'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import type { CartItem } from '@/lib/types';
import Link from 'next/link';
import { useFirebase } from '@/firebase';
import { initiateAnonymousSignIn } from '@/firebase/non-blocking-login';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { collection, serverTimestamp } from 'firebase/firestore';
import { Textarea } from '@/components/ui/textarea';

export function CheckoutForm({ cartItems, cartTotal }: { cartItems: CartItem[], cartTotal: number }) {
  const { dispatch } = useCart();
  const router = useRouter();
  const { toast } = useToast();
  const { firestore, auth, user, isUserLoading } = useFirebase();

  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    mobile: '',
    address: '',
    paymentMethod: 'bkash',
    last4: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  
  useEffect(() => {
    if (!isUserLoading && !user) {
      initiateAnonymousSignIn(auth);
    }
  }, [isUserLoading, user, auth]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'last4') {
        setShippingDetails(prev => ({ ...prev, [name]: value.replace(/\D/g, '') }));
    } else {
        setShippingDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePaymentMethodChange = (value: string) => {
    setShippingDetails(prev => ({ ...prev, paymentMethod: value }));
  };

  const validateForm = () => {
    if (!shippingDetails.name.trim()) return "Name is required";
    if (!shippingDetails.mobile.trim()) return "Mobile number is required";
    if (!/^(\+8801|01)\d{9}$/.test(shippingDetails.mobile)) return "Invalid mobile number format. Use +8801... or 01...";
    if (shippingDetails.address.trim().length < 10) return "Please provide a complete address.";
    if (!/^\d{4}$/.test(shippingDetails.last4)) return "Last 4 digits must be exactly 4 numbers";
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !firestore) {
        toast({ variant: "destructive", title: "Authentication not ready. Please wait a moment." });
        return;
    }

    const validationError = validateForm();
    if (validationError) {
        toast({ variant: "destructive", title: "Invalid Information", description: validationError });
        return;
    }
    
    setIsProcessing(true);

    try {
        const orderData = {
            userId: user.uid,
            name: shippingDetails.name.trim(),
            mobile: shippingDetails.mobile.trim(),
            address: shippingDetails.address.trim(),
            paymentMethod: shippingDetails.paymentMethod,
            last4: shippingDetails.last4,
            items: cartItems.map(item => ({...item, image: item.image || ''})),
            total: cartTotal,
            subtotal: cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
            shippingFee: cartTotal - cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
            status: 'pending',
            createdAt: serverTimestamp(),
            source: 'web',
        };

        const ordersCollection = collection(firestore, 'orders');
        await addDocumentNonBlocking(ordersCollection, orderData);

        toast({ title: "Order Placed!", description: "Your order has been successfully processed." });
        dispatch({ type: 'CLEAR_CART' });
        router.push('/shop');
        
    } catch(error: any) {
        console.error("Order placement error", error);
        toast({ variant: "destructive", title: "Order Failed", description: error.message || "Could not place your order. Please try again." });
    } finally {
        setIsProcessing(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-6">
        <h3 className="text-2xl text-primary mb-4">Shipping Information</h3>
        <Input type="text" name="name" placeholder="Full Name" value={shippingDetails.name} onChange={handleInputChange} required />
        <Input type="tel" name="mobile" placeholder="Mobile Number (e.g., 017...)" value={shippingDetails.mobile} onChange={handleInputChange} required />
        
        <Textarea 
          name="address" 
          placeholder="Full Shipping Address" 
          value={shippingDetails.address} 
          onChange={handleInputChange} 
          required 
          rows={4}
        />

        <div className="pt-4 border-t border-border">
          <h4 className="text-xl text-foreground mb-4">Payment Method</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <Select name="paymentMethod" value={shippingDetails.paymentMethod} onValueChange={handlePaymentMethodChange}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Payment Method" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="bkash">Bkash</SelectItem>
                    <SelectItem value="nagad">Nagad</SelectItem>
                    <SelectItem value="rocket">Rocket</SelectItem>
                    <SelectItem value="upay">Upay</SelectItem>
                </SelectContent>
            </Select>
            <Input 
                type="text" 
                name="last4" 
                placeholder="Last 4 Digits of Sender" 
                value={shippingDetails.last4} 
                onChange={handleInputChange} 
                required 
                maxLength={4} 
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">Enter the last 4 digits of the mobile number you are paying from.</p>
        </div>
      </div>

      <div className="lg:col-span-1 lg:sticky lg:top-24 h-fit p-6 bg-card border border-border rounded-lg">
        <h3 className="text-2xl text-primary mb-6">Order Summary</h3>
        <div className="space-y-3 mb-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between text-sm text-muted-foreground">
              <span className="truncate pr-2">{item.title} (x{item.qty})</span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-4 mt-4 flex justify-between text-xl font-bold text-foreground">
          <span>Order Total:</span>
          <span className="text-primary">${cartTotal.toFixed(2)} USD</span>
        </div>
        <Button type="submit" disabled={isProcessing || isUserLoading || !user} className="w-full mt-8" size="lg">
          {isProcessing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {isProcessing ? 'Placing Order...' : 'Place Order'}
        </Button>
        <p className="text-xs text-center text-muted-foreground mt-4">
          By placing your order, you agree to the <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link>.
        </p>
      </div>
    </form>
  );
}
