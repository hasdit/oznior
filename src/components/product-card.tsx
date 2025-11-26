"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import type { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useCart();
  const { toast } = useToast();
  const productImage = PlaceHolderImages.find(p => p.id === product.images[0]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ 
      type: 'ADD_TO_CART', 
      payload: { 
        item: {
          id: product.id, 
          slug: product.slug,
          title: product.title,
          price: product.price,
          image: product.images[0],
        },
        quantity: 1 
      }
    });
    toast({
      title: "Added to Cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <Card className="group relative overflow-hidden border-border bg-card shadow-xl transition-all duration-300 hover:border-primary/50">
      <Link href={`/product/${product.slug}`} className="block">
        <CardHeader className="p-0">
          <div className="aspect-[3/4] w-full overflow-hidden">
             {productImage && (
              <Image 
                src={productImage.imageUrl} 
                alt={product.title}
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={productImage.imageHint}
              />
            )}
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-4 text-center">
        <CardTitle className="text-lg text-foreground mb-1 leading-tight">
          <Link href={`/product/${product.slug}`} className="hover:text-primary transition-colors duration-200">
            {product.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground mb-3">{product.volumeMl}ml</p>
        <div className="flex justify-center items-baseline space-x-3 mb-4">
          {product.comparePrice > product.price && (
            <p className="text-base text-muted-foreground line-through">${product.comparePrice.toFixed(2)}</p>
          )}
          <p className={`text-xl font-headline ${product.comparePrice > product.price ? 'text-primary' : 'text-foreground'}`}>
            ${product.price.toFixed(2)}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          disabled={product.inventoryNumber <= 0}
          className="w-full"
        >
          {product.inventoryNumber > 0 ? 'Add to Cart' : 'Sold Out'}
        </Button>
      </CardFooter>
    </Card>
  );
};
