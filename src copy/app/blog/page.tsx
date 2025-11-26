import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogs } from '@/lib/actions';
import { format } from 'date-fns';

export const metadata: Metadata = {
    title: 'The OZNIOR Journal',
    description: 'Explore the world of perfumery, from ingredient deep dives to the art of scent layering. The OZNIOR Journal is your guide to fragrance.',
};

export default async function BlogPage() {
    const blogPosts = await getBlogs();

    return (
        <div className="container max-w-5xl py-12 md:py-20">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    The OZNIOR Journal
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    সুগন্ধ প্রেমীদের জন্য একটি精心ভাবে সাজানো জায়গা। আমাদের সুগন্ধের পেছনের শিল্প, বিজ্ঞান এবং গল্পগুলো অন্বেষণ করুন।
                </p>
            </div>

            <div className="grid gap-8 md:gap-12">
                {blogPosts.map((post, index) => {
                    return (
                        <article key={post.slug} className="grid md:grid-cols-2 gap-8 items-center">
                            <Link href={`/blog/${post.slug}`} className={`block relative aspect-video w-full overflow-hidden rounded-lg border border-border group ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                {post.imageUrl && (
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                            </Link>
                            <div className="flex flex-col">
                                <p className="text-sm text-muted-foreground mb-2">{format(new Date(post.createdAt), 'MMMM dd, yyyy')}</p>
                                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>
                                <Link href={`/blog/${post.slug}`} className="text-primary font-semibold hover:underline">
                                    আরও পড়ুন &rarr;
                                </Link>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}
