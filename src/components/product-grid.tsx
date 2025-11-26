import React from 'react';
import { ProductCard } from './product-card';
import type { Product } from '@/lib/types';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export function ProductGrid({ products, title }: ProductGridProps) {
  if (!products || products.length === 0) {
    return <div className="text-center py-12 text-muted-foreground">No products found.</div>;
  }

  return (
    <section className="py-8 md:py-16">
      {title && (
        <h2 className="text-3xl md:text-4xl text-center text-foreground mb-10">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {products.map(product => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
};
