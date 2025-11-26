'use client';

import { useState } from 'react';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Product } from '@/lib/types';

export function AddToCartForm({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (product.inventoryNumber < quantity) {
      toast({
        variant: 'destructive',
        title: 'Limited Stock',
        description: `Cannot add that many to cart. Only ${product.inventoryNumber} available.`,
      });
      return;
    }

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
        quantity,
      },
    });

    toast({
      title: 'Added to Cart',
      description: `${product.title} (x${quantity}) has been added to your cart.`,
    });
    setQuantity(1);
  };

  return (
    <div className="flex space-x-4 items-center">
      <Input
        type="number"
        min="1"
        max={product.inventoryNumber > 0 ? product.inventoryNumber : 1}
        value={quantity}
        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
        className="w-20 text-center"
        disabled={product.inventoryNumber <= 0}
        aria-label="Quantity selector"
      />
      <Button
        onClick={handleAddToCart}
        disabled={product.inventoryNumber <= 0 || quantity < 1}
        className="flex-1 max-w-sm"
        size="lg"
      >
        Add to Cart
      </Button>
    </div>
  );
}
