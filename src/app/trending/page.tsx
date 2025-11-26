
import { getProducts } from '@/lib/actions';
import { ProductGrid } from '@/components/product-grid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Trending Now',
    description: 'Discover the most popular and featured fragrances from the OZNIOR collection.',
};

export default async function TrendingPage() {
    const featuredProducts = await getProducts({ featured: true });

    return (
        <div className="container py-12 md:py-20">
            <h1 className="text-4xl text-foreground mb-10 border-b border-border pb-4">
                Trending Now
            </h1>
            <p className="text-muted-foreground mb-10">Discover the scents that everyone is talking about. These are our current bestsellers and featured fragrances.</p>
            <ProductGrid products={featuredProducts} />
        </div>
    );
}
