'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Package, PlusCircle, Newspaper, FileText, FileEdit, LayoutDashboard, DollarSign, Users, Activity, LogOut, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Product, Blog, SiteContent, Order, User, Review } from '@/lib/types';
import { FirebaseClientProvider, useFirebase } from '@/firebase';
import { collection, DocumentData, doc, getDoc, setDoc, updateDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { ProductForm } from './product-form';
import { BlogForm } from './blog-form';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { deleteDocumentNonBlocking, setDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { getSiteContent } from '@/lib/actions';
import { SiteContentForm } from './site-content-form';
import { PageEditor } from './page-editor';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const statusColors: { [key: string]: string } = {
    pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    processing: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    shipped: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    delivered: 'bg-green-500/20 text-green-400 border-green-500/30',
    cancelled: 'bg-red-500/20 text-red-400 border-red-500/30',
    approved: 'bg-green-500/20 text-green-400 border-green-500/30',
};

function AdminDashboard() {
    const { firestore, auth, user: adminUser } = useFirebase();
    const { toast } = useToast();

    const [isProductFormOpen, setIsProductFormOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    
    const [isBlogFormOpen, setIsBlogFormOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

    const [siteContent, setSiteContent] = React.useState<SiteContent | null>(null);
    const [isLoadingContent, setIsLoadingContent] = React.useState(true);

    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);
    const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
    const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);
    const [allUsers, setAllUsers] = useState<User[]>([]);
    const [isLoadingUsers, setIsLoadingUsers] = useState(true);
    const [allReviews, setAllReviews] = useState<Review[]>([]);
    const [isLoadingReviews, setIsLoadingReviews] = useState(true);

    useEffect(() => {
        if (!firestore) return;
    
        const fetchData = async () => {
            try {
                setIsLoadingProducts(true);
                const productsSnapshot = await getDocs(collection(firestore, 'products'));
                setAllProducts(productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product)));
                setIsLoadingProducts(false);
                
                setIsLoadingBlogs(true);
                const blogsSnapshot = await getDocs(query(collection(firestore, 'blogs'), orderBy('createdAt', 'desc')));
                setAllBlogs(blogsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog)));
                setIsLoadingBlogs(false);

                setIsLoadingUsers(true);
                const usersSnapshot = await getDocs(collection(firestore, 'users'));
                setAllUsers(usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as User)));
                setIsLoadingUsers(false);

                setIsLoadingReviews(true);
                const reviewsSnapshot = await getDocs(query(collection(firestore, 'reviews'), orderBy('createdAt', 'desc')));
                setAllReviews(reviewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Review)));
                setIsLoadingReviews(false);

            } catch (error: any) {
                console.error("Error fetching admin data:", error);
                toast({ variant: 'destructive', title: 'Data Load Failed', description: error.message || 'Could not load admin data. Check console and security rules.' });
                setIsLoadingProducts(false);
                setIsLoadingBlogs(false);
                setIsLoadingUsers(false);
                setIsLoadingReviews(false);
            }
        };
    
        fetchData();
    }, [firestore, toast]);
    
    const dashboardStats = useMemo(() => {
        if (!allProducts) return { totalProducts: 0 };
        const totalProducts = allProducts.length;
        return { totalProducts };
    }, [allProducts]);

    React.useEffect(() => {
        const fetchContent = async () => {
            setIsLoadingContent(true);
            const content = await getSiteContent();
            setSiteContent(content);
            setIsLoadingContent(false);
        };
        fetchContent();
    }, []);


    const handleAddNewProduct = () => {
        setSelectedProduct(null);
        setIsProductFormOpen(true);
    };

    const handleEditProduct = (product: Product) => {
        setSelectedProduct(product);
        setIsProductFormOpen(true);
    };
    
    const handleDeleteProduct = (productId: string) => {
        if (!firestore) return;
        const productDoc = doc(firestore, 'products', productId);
        deleteDocumentNonBlocking(productDoc);
        setAllProducts(prev => prev.filter(p => p.id !== productId));
        toast({
            title: "Product Deleted",
            description: "The product has been successfully removed.",
        });
    };
    
    const handleAddNewBlog = () => {
        setSelectedBlog(null);
        setIsBlogFormOpen(true);
    };

    const handleEditBlog = (blog: Blog) => {
        setSelectedBlog(blog);
        setIsBlogFormOpen(true);
    };

    const handleDeleteBlog = (blogId: string) => {
        if (!firestore) return;
        const blogDoc = doc(firestore, 'blogs', blogId);
        deleteDocumentNonBlocking(blogDoc);
        setAllBlogs(prev => prev.filter(b => b.id !== blogId));
        toast({
            title: "Blog Post Deleted",
            description: "The blog post has been successfully removed.",
        });
    };
    
    const handleUserRoleChange = async (userId: string, newRole: string) => {
        if (!firestore || !adminUser || adminUser.uid === userId) {
            toast({ variant: 'destructive', title: 'Action Forbidden', description: 'Admins cannot change their own role.' });
            return;
        };

        const userDocRef = doc(firestore, 'users', userId);
        try {
            await setDocumentNonBlocking(userDocRef, { role: newRole }, { merge: true });
            setAllUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole as User['role'] } : u));
            toast({
                title: 'User Role Updated',
                description: `User role has been changed to ${newRole}. You may need to ask the user to log out and log back in for changes to take full effect.`,
            });
        } catch (error) {
            console.error('Error updating user role:', error);
            toast({
                variant: 'destructive',
                title: 'Update Failed',
                description: 'Could not update user role.',
            });
        }
    };

    const handleReviewStatusChange = async (reviewId: string, newStatus: 'approved' | 'pending') => {
        if (!firestore) return;
        const reviewDocRef = doc(firestore, 'reviews', reviewId);
        try {
            await setDocumentNonBlocking(reviewDocRef, { status: newStatus }, { merge: true });
            setAllReviews(prev => prev.map(r => r.id === reviewId ? { ...r, status: newStatus } : r));
            toast({
                title: 'Review Updated',
                description: `Review has been ${newStatus}.`,
            });
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Update Failed',
                description: 'Could not update review status.',
            });
        }
    };

    const handleDeleteReview = (reviewId: string) => {
        if (!firestore) return;
        const reviewDoc = doc(firestore, 'reviews', reviewId);
        deleteDocumentNonBlocking(reviewDoc);
        setAllReviews(prev => prev.filter(r => r.id !== reviewId));
        toast({
            title: "Review Deleted",
            description: "The review has been successfully removed.",
        });
    };
    
    const handleLogout = async () => {
        if(!auth) return;
        await signOut(auth);
        toast({title: 'Logged Out'});
    }

    return (
        <div className="container py-12">
            <div className="flex justify-between items-center border-b border-border pb-4 mb-8">
                <h1 className="text-4xl text-primary">Admin Dashboard</h1>
                <div className='flex gap-4'>
                    <Button onClick={handleLogout} variant="secondary"><LogOut className="mr-2 h-4 w-4"/>Logout</Button>
                </div>
            </div>
            
            <ProductForm 
                isOpen={isProductFormOpen} 
                setIsOpen={setIsProductFormOpen} 
                product={selectedProduct}
            />

            <BlogForm
                isOpen={isBlogFormOpen}
                setIsOpen={setIsBlogFormOpen}
                blog={selectedBlog}
            />

            <Tabs defaultValue="dashboard" className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="dashboard"><LayoutDashboard className="mr-2 h-4 w-4" />Dashboard</TabsTrigger>
                    <TabsTrigger value="products"><Package className="mr-2 h-4 w-4" />Products</TabsTrigger>
                    <TabsTrigger value="users"><Users className="mr-2 h-4 w-4" />Users</TabsTrigger>
                    <TabsTrigger value="reviews"><Star className="mr-2 h-4 w-4" />Reviews</TabsTrigger>
                    <TabsTrigger value="blogs"><Newspaper className="mr-2 h-4 w-4" />Blogs</TabsTrigger>
                    <TabsTrigger value="content"><FileText className="mr-2 h-4 w-4" />Site Content</TabsTrigger>
                    <TabsTrigger value="pages"><FileEdit className="mr-2 h-4 w-4" />Pages</TabsTrigger>
                </TabsList>
                <TabsContent value="dashboard" className="mt-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                                <Package className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                {isLoadingProducts ? <Loader2 className='h-6 w-6 animate-spin' /> : <div className="text-2xl font-bold">{dashboardStats.totalProducts}</div>}
                                <p className="text-xs text-muted-foreground">Total products in catalog</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                {isLoadingUsers ? <Loader2 className='h-6 w-6 animate-spin' /> : <div className="text-2xl font-bold">{allUsers.length}</div>}
                                <p className="text-xs text-muted-foreground">Total registered users</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
                                <Star className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                {isLoadingReviews ? <Loader2 className='h-6 w-6 animate-spin' /> : <div className="text-2xl font-bold">+{allReviews.filter(r => r.status === 'pending').length}</div>}
                                <p className="text-xs text-muted-foreground">Reviews awaiting approval</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                                <Newspaper className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                {isLoadingBlogs ? <Loader2 className='h-6 w-6 animate-spin' /> : <div className="text-2xl font-bold">{allBlogs.length}</div>}
                                <p className="text-xs text-muted-foreground">Total blog posts published</p>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="products" className="mt-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Product Management</CardTitle>
                                <CardDescription>View, add, and manage all products.</CardDescription>
                            </div>
                            <Button onClick={handleAddNewProduct}><PlusCircle className="mr-2 h-4 w-4" /> Add New</Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {isLoadingProducts && <div className="flex items-center justify-center p-8"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}
                            {allProducts && allProducts.map(product => (
                                <div key={product.id} className="p-4 bg-card-foreground/5 border border-border rounded-md flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-foreground">{product.title}</p>
                                        <p className="text-sm text-muted-foreground">${product.price.toFixed(2)} | Stock: {product.inventoryNumber}</p>
                                    </div>
                                    <div className="space-x-2">
                                        <Button variant="ghost" size="sm" onClick={() => handleEditProduct(product)}>Edit</Button>
                                         <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Delete</Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This action cannot be undone. This will permanently delete the product from your database.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction onClick={() => handleDeleteProduct(product.id)}>Delete</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
                 <TabsContent value="users" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>User Management</CardTitle>
                            <CardDescription>View and manage user roles.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {isLoadingUsers && <div className="flex items-center justify-center p-8"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}
                            {allUsers && allUsers.map(user => (
                                <div key={user.id} className="p-4 bg-card-foreground/5 border border-border rounded-md flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-foreground">{user.name}</p>
                                        <p className="text-sm text-muted-foreground">{user.email}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <label className="text-sm font-medium text-foreground">Role:</label>
                                        <Select 
                                            defaultValue={user.role} 
                                            onValueChange={(value) => handleUserRoleChange(user.id, value)}
                                            disabled={adminUser?.uid === user.id}
                                        >
                                            <SelectTrigger className="w-[120px] bg-background/50">
                                                <SelectValue placeholder="Change role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="user">User</SelectItem>
                                                <SelectItem value="admin">Admin</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
                 <TabsContent value="reviews" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Review Management</CardTitle>
                            <CardDescription>Approve or delete customer reviews.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {isLoadingReviews && <div className="flex items-center justify-center p-8"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}
                            {allReviews && allReviews.length === 0 && !isLoadingReviews && <p className="text-muted-foreground text-center p-8">No reviews submitted yet.</p>}
                            {allReviews && allReviews.map(review => (
                                <div key={review.id} className={`p-4 border rounded-lg ${statusColors[review.status] || 'bg-card'}`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="font-semibold text-foreground">{review.productTitle}</p>
                                            <p className="text-sm text-muted-foreground">by {review.userName} on {format(new Date(review.createdAt), 'MMM d, yyyy')}</p>
                                            <div className="flex items-center mt-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${statusColors[review.status] || 'bg-muted'}`}>{review.status}</span>
                                    </div>
                                    <p className="text-foreground/90 mb-4">{review.text}</p>
                                    <div className="flex justify-end items-center gap-2">
                                        {review.status === 'pending' && <Button size="sm" variant="secondary" onClick={() => handleReviewStatusChange(review.id, 'approved')}>Approve</Button>}
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="destructive" size="sm">Delete</Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>This will permanently delete this review.</AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction onClick={() => handleDeleteReview(review.id)}>Delete</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="blogs" className="mt-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Blog Management</CardTitle>
                                <CardDescription>Create and manage your journal entries.</CardDescription>
                            </div>
                            <Button onClick={handleAddNewBlog}><PlusCircle className="mr-2 h-4 w-4" /> Add New Post</Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {isLoadingBlogs && <div className="flex items-center justify-center p-8"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}
                            {allBlogs && allBlogs.map(blog => (
                                <div key={blog.id} className="p-4 bg-card-foreground/5 border border-border rounded-md flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-foreground">{blog.title}</p>
                                        <p className="text-sm text-muted-foreground">By {blog.author} on {format(new Date(blog.createdAt), "MMMM dd, yyyy")}</p>
                                    </div>
                                    <div className="space-x-2">
                                        <Button variant="ghost" size="sm" onClick={() => handleEditBlog(blog)}>Edit</Button>
                                         <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Delete</Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This action cannot be undone. This will permanently delete this blog post.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction onClick={() => handleDeleteBlog(blog.id)}>Delete</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
                 <TabsContent value="content" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Homepage Content</CardTitle>
                            <CardDescription>Edit the text content displayed on your homepage.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {isLoadingContent && <div className="flex items-center justify-center p-8"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}
                            {siteContent && <SiteContentForm initialData={siteContent} />}
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="pages" className="mt-6">
                    <PageEditor />
                </TabsContent>
            </Tabs>
        </div>
    );
}

function AdminPageContent() {
    const { user, isUserLoading } = useFirebase();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        if (!isUserLoading) {
            setIsLoading(false);
        }
    }, [isUserLoading]);


    if (isLoading || isUserLoading) {
        return (
             <div className="flex items-center justify-center min-h-screen bg-background">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return <AdminDashboard />;
}

export default function AdminPage() {
    return (
        <FirebaseClientProvider>
            <AdminPageContent />
        </FirebaseClientProvider>
    )
}

    