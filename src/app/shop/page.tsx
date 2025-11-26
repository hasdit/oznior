import { getProducts } from '@/lib/actions';
import ShopClient from './shop-client';

export const metadata = {
    title: 'Shop All Fragrances',
    description: 'Explore the full OZNIOR catalogue: intense orientals, fresh aquatics, and powdery florals. Find your next signature scent today.',
};

export default async function ShopPage() {
    const products = await getProducts({});

    return (
        <div className="container py-12 md:py-20">
            <h1 className="text-4xl text-foreground mb-10 border-b border-border pb-4">
                The Full Collection
            </h1>
            <ShopClient initialProducts={products} />
        </div>
    );
}