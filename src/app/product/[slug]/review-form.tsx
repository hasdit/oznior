'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Star } from 'lucide-react';
import type { Product } from '@/lib/types';
import { useFirebase } from '@/firebase';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const formSchema = z.object({
  rating: z.number().min(1, 'Please select a rating').max(5),
  text: z.string().min(10, 'Review must be at least 10 characters long.'),
});

type ReviewFormValues = z.infer<typeof formSchema>;

export function ReviewForm({ product }: { product: Product }) {
  const { firestore, user, isUserLoading } = useFirebase();
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 0,
      text: '',
    },
  });

  const onSubmit = async (data: ReviewFormValues) => {
    if (!firestore || !user) {
      toast({
        variant: 'destructive',
        title: 'Authentication Error',
        description: 'You must be logged in to submit a review.',
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      const reviewsCollection = collection(firestore, 'reviews');
      await addDoc(reviewsCollection, {
        ...data,
        productId: product.id,
        productTitle: product.title,
        userId: user.uid,
        userName: user.displayName || 'Anonymous',
        createdAt: new Date().toISOString(),
        status: 'pending',
      });

      toast({
        title: 'Review Submitted',
        description: 'Thank you! Your review is pending approval.',
      });
      form.reset();
      router.refresh(); // Re-fetches server data and re-renders
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: error.message || 'An unexpected error occurred.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isUserLoading) {
      return null; // Don't show form while checking auth state
  }

  if (!user) {
    return (
      <div className="mt-8 p-6 bg-card border border-border rounded-lg text-center">
        <h4 className="text-lg text-foreground mb-2">Want to share your thoughts?</h4>
        <p className="text-muted-foreground mb-4">
          <Link href="/login" className="text-primary underline">Log in</Link> to leave a review.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h4 className="text-xl font-medium text-foreground mb-4">Write a Review</h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 border border-border rounded-lg bg-card">
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Rating</FormLabel>
                <FormControl>
                  <div
                    className="flex items-center gap-1"
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    {[...Array(5)].map((_, index) => {
                      const ratingValue = index + 1;
                      return (
                        <button
                          type="button"
                          key={ratingValue}
                          onClick={() => field.onChange(ratingValue)}
                          onMouseEnter={() => setHoverRating(ratingValue)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`h-6 w-6 cursor-pointer transition-colors ${
                              ratingValue <= (hoverRating || field.value)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-muted-foreground'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Review</FormLabel>
                <FormControl>
                  <Textarea placeholder="Share your thoughts on this fragrance..." {...field} rows={5} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Review
          </Button>
        </form>
      </Form>
    </div>
  );
}
