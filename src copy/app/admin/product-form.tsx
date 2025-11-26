'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Product, FragranceNotes } from "@/lib/types";
import { useEffect } from "react";
import { useFirebase } from "@/firebase";
import { collection, doc, serverTimestamp } from "firebase/firestore";
import { addDocumentNonBlocking, setDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { products as staticProducts } from '@/lib/data'; // For default reviews

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  slug: z.string().min(3, "Slug must be at least 3 characters long"),
  price: z.coerce.number().positive("Price must be a positive number"),
  comparePrice: z.coerce.number().min(0).optional(),
  volumeMl: z.coerce.number().positive("Volume must be a positive number"),
  inventoryNumber: z.coerce.number().min(0, "Inventory can't be negative"),
  sku: z.string().min(1, "SKU is required"),
  shortDescription: z.string().min(10, "Short description is required"),
  description: z.string().min(20, "Full description is required"),
  featured: z.boolean().default(false),
  categories: z.array(z.string()).min(1, "At least one category is required"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  images: z.array(z.string()).min(1, "At least one image ID is required"),
  fragranceNotes: z.object({
    top: z.array(z.string()).min(1, "Top notes are required"),
    middle: z.array(z.string()).min(1, "Middle notes are required"),
    base: z.array(z.string()).min(1, "Base notes are required"),
  }),
});

type ProductFormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  product: Product | null;
}

export function ProductForm({ isOpen, setIsOpen, product }: ProductFormProps) {
  const { firestore } = useFirebase();
  const { toast } = useToast();
  
  const defaultValues: Partial<ProductFormValues> = {
      title: "",
      slug: "",
      price: 0,
      comparePrice: 0,
      volumeMl: 50,
      inventoryNumber: 10,
      sku: "OZ-",
      shortDescription: "",
      description: "",
      featured: false,
      categories: [],
      tags: [],
      images: [],
      fragranceNotes: { top: [], middle: [], base: [] },
  };

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useEffect(() => {
    if (product) {
      form.reset(product);
    } else {
      form.reset(defaultValues);
    }
  }, [product, isOpen, form]);

  const onSubmit = (data: ProductFormValues) => {
    if (!firestore) return;

    const productsCollection = collection(firestore, 'products');

    if (product) {
      // Editing existing product
      const productDoc = doc(productsCollection, product.id);
      const updatedData = {
          ...product, // Keep existing fields like reviews, createdAt
          ...data,
          price: Number(data.price),
          comparePrice: Number(data.comparePrice || 0),
          volumeMl: Number(data.volumeMl),
          inventoryNumber: Number(data.inventoryNumber),
      };
      setDocumentNonBlocking(productDoc, updatedData, { merge: true });
      toast({ title: "Product Updated", description: `${data.title} has been successfully updated.` });
    } else {
      // Adding new product
      const newProductData = {
        ...data,
        id: doc(productsCollection).id,
        price: Number(data.price),
        comparePrice: Number(data.comparePrice || 0),
        volumeMl: Number(data.volumeMl),
        inventoryNumber: Number(data.inventoryNumber),
        createdAt: new Date().toISOString(),
        reviews: staticProducts[0].reviews, // Add some default reviews
      };
      const newDocRef = doc(productsCollection, newProductData.id);
      setDocumentNonBlocking(newDocRef, newProductData, {});
      toast({ title: "Product Added", description: `${data.title} has been successfully added.` });
    }
    setIsOpen(false);
  };
  
  const StringArrayInput = ({ name, label }: { name: "categories" | "tags" | `fragranceNotes.${keyof FragranceNotes}` | "images", label: string }) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input 
                placeholder="Comma-separated values" 
                value={Array.isArray(field.value) ? field.value.join(', ') : ''}
                onChange={e => field.onChange(e.target.value.split(',').map(s => s.trim()))}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{product ? "Edit Product" : "Add New Product"}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="title" render={({ field }) => ( <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                <FormField control={form.control} name="slug" render={({ field }) => ( <FormItem><FormLabel>Slug</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
              </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <FormField control={form.control} name="price" render={({ field }) => ( <FormItem><FormLabel>Price</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem> )} />
                <FormField control={form.control} name="comparePrice" render={({ field }) => ( <FormItem><FormLabel>Compare Price</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem> )} />
                <FormField control={form.control} name="volumeMl" render={({ field }) => ( <FormItem><FormLabel>Volume (ml)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem> )} />
                <FormField control={form.control} name="inventoryNumber" render={({ field }) => ( <FormItem><FormLabel>Inventory</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem> )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <FormField control={form.control} name="sku" render={({ field }) => ( <FormItem><FormLabel>SKU</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                 <FormField control={form.control} name="featured" render={({ field }) => ( <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm mt-8"><div className="space-y-0.5"><FormLabel>Featured Product</FormLabel></div><FormControl><Switch checked={field.value} onCheckedChange={field.onChange} /></FormControl></FormItem> )} />
              </div>
              
              <FormField control={form.control} name="shortDescription" render={({ field }) => ( <FormItem><FormLabel>Short Description</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem> )} />
              <FormField control={form.control} name="description" render={({ field }) => ( <FormItem><FormLabel>Full Description</FormLabel><FormControl><Textarea {...field} rows={6} /></FormControl><FormMessage /></FormItem> )} />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StringArrayInput name="categories" label="Categories" />
                <StringArrayInput name="tags" label="Tags" />
                <StringArrayInput name="images" label="Image IDs" />
              </div>

              <div className="space-y-4 rounded-lg border p-4">
                <h4 className="font-medium">Fragrance Notes</h4>
                <StringArrayInput name="fragranceNotes.top" label="Top Notes" />
                <StringArrayInput name="fragranceNotes.middle" label="Middle Notes" />
                <StringArrayInput name="fragranceNotes.base" label="Base Notes" />
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button type="submit">Save Product</Button>
              </DialogFooter>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
