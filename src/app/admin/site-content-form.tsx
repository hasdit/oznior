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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SiteContent } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { updateSiteContent } from '@/lib/actions';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  hero: z.object({
    headline: z.string().min(5, 'Headline is required'),
    subline: z.string().min(5, 'Subline is required'),
    ctaText: z.string().min(3, 'CTA text is required'),
  }),
  scentQuiz: z.object({
    headline: z.string().min(5, 'Headline is required'),
    subline: z.string().min(5, 'Subline is required'),
    ctaText: z.string().min(3, 'CTA text is required'),
  }),
  ourStory: z.object({
    headline: z.string().min(5, 'Headline is required'),
    subline: z.string().min(10, 'Subline is required'),
    ctaText: z.string().min(3, 'CTA text is required'),
  }),
});

type SiteContentFormValues = z.infer<typeof formSchema>;

interface SiteContentFormProps {
  initialData: SiteContent;
}

export function SiteContentForm({ initialData }: SiteContentFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SiteContentFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        hero: initialData.hero,
        scentQuiz: initialData.scentQuiz,
        ourStory: initialData.ourStory,
    },
  });

  const onSubmit = async (data: SiteContentFormValues) => {
    setIsSubmitting(true);
    const result = await updateSiteContent({ ...data, id: 'homepage' });
    if (result.success) {
      toast({ title: 'Content Updated', description: 'Your homepage content has been saved.' });
    } else {
      toast({
        variant: 'destructive',
        title: 'Update Failed',
        description: result.error || 'Could not save homepage content.',
      });
    }
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Hero Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField control={form.control} name="hero.headline" render={({ field }) => (<FormItem><FormLabel>Headline</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="hero.subline" render={({ field }) => (<FormItem><FormLabel>Subline</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="hero.ctaText" render={({ field }) => (<FormItem><FormLabel>Button Text</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scent Quiz Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField control={form.control} name="scentQuiz.headline" render={({ field }) => (<FormItem><FormLabel>Headline</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="scentQuiz.subline" render={({ field }) => (<FormItem><FormLabel>Subline</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="scentQuiz.ctaText" render={({ field }) => (<FormItem><FormLabel>Button Text</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Story Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField control={form.control} name="ourStory.headline" render={({ field }) => (<FormItem><FormLabel>Headline</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="ourStory.subline" render={({ field }) => (<FormItem><FormLabel>Subline</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="ourStory.ctaText" render={({ field }) => (<FormItem><FormLabel>Button Text</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
          </CardContent>
        </Card>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save Content
        </Button>
      </form>
    </Form>
  );
}
