'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Box, User as UserIcon, ShoppingBag, Loader2, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFirebase, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import type { Order, User } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { signOut } from 'firebase/auth';
import { format } from 'date-fns';

const statusColors: { [key: string]: string } = {
    pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    processing: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    shipped: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    delivered: 'bg-green-500/20 text-green-400 border-green-500/30',
    cancelled: 'bg-red-500/20 text-red-400 border-red-500/30',
};


export function AccountPageContent() {
    const { user, isUserLoading } = useFirebase();
    const router = useRouter();
    const { toast } = useToast();
    const { auth, firestore } = useFirebase();
    
    const [userData, setUserData] = useState<User | null>(null);
    const [name, setName] = useState('');
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoadingOrders, setIsLoadingOrders] = useState(true);


    useEffect(() => {
        if (!isUserLoading && !user) {
            router.push('/login');
        }
        if (user && firestore) {
             const userDoc = doc(firestore, 'users', user.uid);
             const unsubUser = onSnapshot(userDoc, (doc) => {
                 if(doc.exists()) {
                     const data = doc.data() as User;
                     setUserData(data);
                     setName(data.name);
                 }
             });

             const ordersQuery = query(
                collection(firestore, 'orders'),
                where('userId', '==', user.uid),
                orderBy('createdAt', 'desc')
             );

             setIsLoadingOrders(true);
             const unsubOrders = onSnapshot(ordersQuery, (snapshot) => {
                 const userOrders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order));
                 setOrders(userOrders);
                 setIsLoadingOrders(false);
             }, (error) => {
                console.error("Failed to fetch orders:", error);
                toast({ variant: 'destructive', title: 'Could not fetch orders', description: error.message });
                setIsLoadingOrders(false);
             });

             return () => {
                unsubUser();
                unsubOrders();
             };
        }
    }, [user, isUserLoading, router, firestore, toast]);
    

    const handleLogout = async () => {
        if (!auth) return;
        await signOut(auth);
        toast({ title: 'Logged Out', description: 'You have been successfully logged out.' });
        router.push('/');
    };
    
    const handleSaveChanges = async () => {
        if(!firestore || !user || !name) return;
        const userDocRef = doc(firestore, 'users', user.uid);
        try {
            await updateDoc(userDocRef, { name });
            toast({title: "Profile Updated", description: "Your name has been updated."});
        } catch (error: any) {
            toast({variant: 'destructive', title: "Update Failed", description: error.message});
        }
    }

    if (isUserLoading || !user || !userData) {
        return <div className="container flex justify-center items-center py-20"><Loader2 className="h-8 w-8 animate-spin" /></div>;
    }
    
    return (
        <div className="container py-12 md:py-20">
            <div className="mb-10 border-b border-border pb-4 flex justify-between items-center">
                <div>
                    <h1 className="text-4xl text-foreground">My Account</h1>
                    <p className="text-muted-foreground mt-2">Welcome back, {userData.name}!</p>
                </div>
                <Button variant="secondary" onClick={handleLogout}><LogOut className="mr-2 h-4 w-4" />Logout</Button>
            </div>

            <Tabs defaultValue="orders" className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-md">
                    <TabsTrigger value="orders"><ShoppingBag className="mr-2 h-4 w-4" />Orders</TabsTrigger>
                    <TabsTrigger value="profile"><UserIcon className="mr-2 h-4 w-4" />Profile</TabsTrigger>
                    <TabsTrigger value="settings"><Box className="mr-2 h-4 w-4" />Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="orders" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Order History</CardTitle>
                            <CardDescription>Here are your recent orders.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {isLoadingOrders && <div className='flex justify-center p-8'><Loader2 className='h-6 w-6 animate-spin' /></div>}
                            {!isLoadingOrders && orders && orders.length === 0 && <p className='text-muted-foreground text-center p-8'>You haven't placed any orders yet.</p>}
                            {orders && orders.map(order => (
                                <div key={order.id} className={`p-4 border rounded-lg ${statusColors[order.status] || 'bg-card'}`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="font-semibold text-foreground">Order ID: #{order.id.substring(0, 8)}</p>
                                             <p className="text-sm text-muted-foreground">
                                                {order.createdAt && format( (order.createdAt as any).toDate ? (order.createdAt as any).toDate() : new Date(order.createdAt), "MMMM dd, yyyy")}
                                             </p>
                                        </div>
                                         <span className={`px-2 py-1 text-xs rounded-full font-medium ${statusColors[order.status] || 'bg-muted'}`}>{order.status}</span>
                                    </div>
                                    <div>
                                         <h4 className="font-medium text-foreground mb-2 mt-4 text-sm">Items:</h4>
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                            {order.items.map((item: any) => (
                                                <li key={item.id}>{item.title} (x{item.qty}) - ${(item.price * item.qty).toFixed(2)}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-current/20 flex justify-end items-center">
                                         <p className="font-semibold text-primary">Total: ${order.total.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="profile" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                            <CardDescription>Update your personal details here.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Full Name</label>
                                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email Address</label>
                                <Input id="email" type="email" value={userData.email} disabled />
                            </div>
                            <Button className="mt-4" onClick={handleSaveChanges}>Save Changes</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                 <TabsContent value="settings" className="mt-6">
                     <Card>
                        <CardHeader>
                            <CardTitle>Account Settings</CardTitle>
                            <CardDescription>Manage your login and notification settings.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                             <div>
                                <h4 className="text-lg text-foreground mb-2">Change Password</h4>
                                <p className="text-sm text-muted-foreground mb-3">To change your password, please log out and use the "Forgot Password" link on the login page.</p>
                            </div>
                             <div className="border-t border-border pt-6">
                                <h4 className="text-lg text-destructive mb-2">Danger Zone</h4>
                                 <p className="text-sm text-muted-foreground mb-3">Deleting your account is irreversible. All your data will be permanently removed.</p>
                                <Button variant="destructive">Delete Account</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
