"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from './ui/scroll-area';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { XIcon } from 'lucide-react';

const CartItem = ({ item }: { item: any }) => {
  const { dispatch } = useCart();
  const productImage = PlaceHolderImages.find(p => p.id === item.image);

  return (
    <div className="flex items-center py-4">
      <div className="w-20 h-24 flex-shrink-0 mr-4">
        {productImage && (
          <Image src={productImage.imageUrl} alt={item.title} width={80} height={96} className="w-full h-full object-cover border border-border" data-ai-hint={productImage.imageHint} />
        )}
      </div>
      <div className="flex-1">
        <h4 className="text-base font-medium text-foreground truncate">{item.title}</h4>
        <p className="text-sm text-primary">${item.price.toFixed(2)}</p>
        <p className="text-sm text-muted-foreground">Qty: {item.qty}</p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id } })}
        aria-label={`Remove ${item.title} from cart`}
      >
        <XIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default function CartSheet() {
  const { state, dispatch } = useCart();
  const cartTotal = state.cart.reduce((total, item) => total + (item.price * item.qty), 0);
  const shippingThreshold = 100;
  const remainingForFreeShipping = shippingThreshold - cartTotal;

  return (
    <Sheet open={state.isCartOpen} onOpenChange={() => dispatch({ type: 'TOGGLE_CART' })}>
      <SheetContent className="w-full max-w-sm bg-background flex flex-col p-0">
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="text-xl">Your Cart</SheetTitle>
        </SheetHeader>

        {state.cart.length === 0 ? (
          <div className="flex flex-col flex-1 items-center justify-center p-6 text-center text-muted-foreground">
            <p>Your cart is a blank page.</p>
            <p className="mt-2">Discover your signature scent.</p>
            <Button asChild variant="link" className="mt-4 text-primary" onClick={() => dispatch({ type: 'CLOSE_CART' })}>
              <Link href="/shop">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1">
              <div className="px-6 divide-y divide-border">
                {state.cart.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </ScrollArea>

            <SheetFooter className="p-6 border-t border-border bg-background flex-shrink-0 flex-col space-y-4">
              {cartTotal < shippingThreshold && cartTotal > 0 && (
                <p className="text-center text-sm text-muted-foreground">
                  Spend <span className="font-bold text-primary">${remainingForFreeShipping.toFixed(2)}</span> more for Free Shipping.
                </p>
              )}
              <div className="flex justify-between text-lg font-semibold text-foreground">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)} USD</span>
              </div>
              <Button asChild size="lg" className="w-full" onClick={() => dispatch({ type: 'CLOSE_CART' })}>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button variant="ghost" className="w-full text-xs text-destructive hover:text-destructive" onClick={() => dispatch({ type: 'CLEAR_CART' })}>
                Empty Cart
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
