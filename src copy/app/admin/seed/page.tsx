'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle } from 'lucide-react';
import { products as staticProducts } from '@/lib/data';
import { FirebaseClientProvider, useFirebase } from '@/firebase';
import { collection, writeBatch, doc } from 'firebase/firestore';
import { FirestorePermissionError } from '@/firebase/errors';
import { errorEmitter } from '@/firebase/error-emitter';
import Link from 'next/link';
import { initiateAnonymousSignIn } from '@/firebase/non-blocking-login';

function SeedPageContent() {
    const [isSeeding, setIsSeeding] = useState(false);
    const [isSeeded, setIsSeeded] = useState(false);
    const { toast } = useToast();
    const { firestore, auth, user, isUserLoading } = useFirebase();

    useEffect(() => {
        // Ensure anonymous user is signed in.
        if (!isUserLoading && !user && auth) {
          initiateAnonymousSignIn(auth);
        }
        
        // Automatically start seeding when the component mounts, has firestore instance, and has a user.
        if (firestore && user && !isUserLoading && !isSeeding && !isSeeded) {
            handleSeed();
        }
    }, [firestore, user, isUserLoading, auth, isSeeding, isSeeded]);


    const handleSeed = () => {
        if (!firestore) {
            toast({ variant: 'destructive', title: 'Firestore not available' });
            return;
        }

        setIsSeeding(true);
        toast({ title: 'Starting product seeding...' });

        const productsCollection = collection(firestore, 'products');
        const batch = writeBatch(firestore);

        staticProducts.forEach(product => {
            const docRef = doc(productsCollection, product.id);
            batch.set(docRef, product);
        });

        batch.commit()
            .then(() => {
                toast({ title: 'Success!', description: `${staticProducts.length} products have been seeded.` });
                setIsSeeded(true);
            })
            .catch((error: any) => {
                 const permissionError = new FirestorePermissionError({
                    path: '/products',
                    operation: 'write',
                    requestResourceData: { note: `Batch write for ${staticProducts.length} products.` },
                });
                errorEmitter.emit('permission-error', permissionError);
            })
            .finally(() => {
                 setIsSeeding(false);
            });
    };

    const getStatusContent = () => {
        if (isSeeding) {
            return (
                <>
                    <Loader2 className="mx-auto h-12 w-12 text-primary animate-spin mb-4" />
                    <h1 className="text-4xl text-primary mb-4">Seeding Products...</h1>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Please wait while we upload the product catalog to your database. This may take a moment.
                    </p>
                </>
            );
        }
        if (isSeeded) {
            return (
                 <>
                    <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
                    <h1 className="text-4xl text-foreground mb-4">Seeding Complete!</h1>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        All {staticProducts.length} products have been successfully uploaded to your Firestore database. Your shop is now live.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/shop">Go to Shop</Link>
                    </Button>
                </>
            );
        }
         // Default/Initial state
        return (
             <>
                <Loader2 className="mx-auto h-12 w-12 text-primary animate-spin mb-4" />
                <h1 className="text-4xl text-primary mb-4">Preparing to Seed...</h1>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Authenticating and preparing to upload products. This should start automatically.
                </p>
            </>
        );
    }

    return (
        <div className="container py-20 text-center">
            {getStatusContent()}
        </div>
    );
}


export default function SeedPage() {
    return (
        <FirebaseClientProvider>
            <SeedPageContent />
        </FirebaseClientProvider>
    );
}
