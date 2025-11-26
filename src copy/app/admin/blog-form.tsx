'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Blog } from "@/lib/types";
import { useEffect } from "react";
import { useFirebase } from "@/firebase";
import { collection, doc } from "firebase/firestore";
import { setDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long"),
  slug: z.string().min(5, "Slug must be at least 5 characters long").regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
  excerpt: z.string().min(20, "Excerpt must be at least 20 characters long").max(300, "Excerpt must be less than 300 characters"),
  content: z.string().min(100, "Content must be at least 100 characters long"),
  imageUrl: z.string().url("Please enter a valid image URL"),
  author: z.string().min(3, "Author name is required"),
});

type BlogFormValues = z.infer<typeof formSchema>;

interface BlogFormProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  blog: Blog | null;
}

export function BlogForm({ isOpen, setIsOpen, blog }: BlogFormProps) {
  const { firestore } = useFirebase();
  const { toast } = useToast();
  
  const defaultValues: Partial<BlogFormValues> = {
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    imageUrl: "",
    author: "OZNIOR Team",
  };

  const form = useForm<BlogFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useEffect(() => {
    if (blog) {
      form.reset(blog);
    } else {
      form.reset(defaultValues);
    }
  }, [blog, isOpen, form]);

  const onSubmit = (data: BlogFormValues) => {
    if (!firestore) return;

    const blogsCollection = collection(firestore, 'blogs');

    if (blog) {
      // Editing existing blog
      const blogDoc = doc(blogsCollection, blog.id);
      const updatedData = {
          ...blog,
          ...data,
      };
      setDocumentNonBlocking(blogDoc, updatedData, { merge: true });
      toast({ title: "Blog Post Updated", description: `"${data.title}" has been successfully updated.` });
    } else {
      // Adding new blog post
      const newBlogData = {
        ...data,
        id: doc(blogsCollection).id,
        createdAt: new Date().toISOString(),
      };
      const newDocRef = doc(blogsCollection, newBlogData.id);
      setDocumentNonBlocking(newDocRef, newBlogData, {});
      toast({ title: "Blog Post Added", description: `"${data.title}" has been successfully added.` });
    }
    setIsOpen(false);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{blog ? "Edit Blog Post" : "Add New Blog Post"}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-1">
              <FormField control={form.control} name="title" render={({ field }) => ( <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} onChange={(e) => {
                  field.onChange(e.target.value);
                  form.setValue('slug', e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''));
              }} /></FormControl><FormMessage /></FormItem> )} />
              <FormField control={form.control} name="slug" render={({ field }) => ( <FormItem><FormLabel>Slug</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
              <FormField control={form.control} name="excerpt" render={({ field }) => ( <FormItem><FormLabel>Excerpt</FormLabel><FormControl><Textarea {...field} rows={3} /></FormControl><FormMessage /></FormItem> )} />
              <FormField control={form.control} name="content" render={({ field }) => ( <FormItem><FormLabel>Content</FormLabel><FormControl><Textarea {...field} rows={10} /></FormControl><FormDescription>
                  You can use Markdown for formatting. For example, use **bold text** for bold.
                </FormDescription><FormMessage /></FormItem> )} />
              <FormField control={form.control} name="imageUrl" render={({ field }) => ( <FormItem><FormLabel>Image URL</FormLabel><FormControl><Input {...field} placeholder="https://example.com/image.jpg" /></FormControl><FormMessage /></FormItem> )} />
              <FormField control={form.control} name="author" render={({ field }) => ( <FormItem><FormLabel>Author</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button type="submit">Save Post</Button>
              </DialogFooter>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
