'use client';
import { useCart } from '@/hooks/use-cart';
import { CheckoutForm } from './checkout-form';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { FirebaseClientProvider } from '@/firebase';

export default function CheckoutPage() {
    const { state } = useCart();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const cartSubtotal = useMemo(() => state.cart.reduce((total, item) => total + (item.price * item.qty), 0), [state.cart]);
    const shippingFee = cartSubtotal >= 100 || cartSubtotal === 0 ? 0.00 : 10.00;
    const cartTotal = cartSubtotal + shippingFee;

    if (!isClient) {
        return (
             <div className="container py-20 text-center">
                <p className="text-muted-foreground">Loading checkout...</p>
            </div>
        );
    }
    
    if (state.cart.length === 0) {
        return (
            <div className="container py-20 text-center">
                <h2 className="text-3xl text-primary mb-4">Your Cart is Empty</h2>
                <p className="text-muted-foreground">Add products to your cart to proceed to checkout.</p>
                <Button onClick={() => router.push('/shop')} variant="secondary" className="mt-6">
                    Continue Shopping
                </Button>
            </div>
        );
    }

    return (
        <FirebaseClientProvider>
            <div className="container py-12 md:py-20">
                <h1 className="text-4xl text-foreground mb-10 border-b border-border pb-4">Checkout</h1>
                <CheckoutForm cartItems={state.cart} cartTotal={cartTotal}/>
            </div>
        </FirebaseClientProvider>
    );
}
