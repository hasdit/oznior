import { Suspense } from 'react';
import { Hero } from '@/components/hero';
import { ProductGrid } from '@/components/product-grid';
import { getProducts, getSiteContent } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import type { SiteContent } from '@/lib/types';

async function FeaturedProducts() {
  const featuredProducts = await getProducts({ featured: true });
  const topFeatured = featuredProducts.slice(0, 4);
  return <ProductGrid products={topFeatured} title="The Signature Collection" />;
}

function FeaturedProductsSkeleton() {
  return (
    <div className="py-8 md:py-16">
      <h2 className="text-3xl md:text-4xl text-center text-foreground mb-10">
        The Signature Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="aspect-[3/4] w-full" />
            <Skeleton className="h-6 w-3/4 mx-auto" />
            <Skeleton className="h-5 w-1/4 mx-auto" />
            <Skeleton className="h-11 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Home() {
  const content: SiteContent = await getSiteContent();

  return (
    <div>
      <Hero 
        headline={content.hero.headline}
        subline={content.hero.subline}
        ctaText={content.hero.ctaText}
        imageUrlId="hero-banner-1"
        imageHint="perfume spotlight"
      />
      
      <div className="container pt-4 md:pt-0">
        <Suspense fallback={<FeaturedProductsSkeleton />}>
          <FeaturedProducts />
        </Suspense>
      </div>
      
      <div className="my-16 bg-card py-16 text-center border-y border-primary/20">
        <div className="container">
          <h3 className="text-3xl text-foreground mb-4">
            {content.scentQuiz.headline}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            {content.scentQuiz.subline}
          </p>
          <Button variant="secondary">{content.scentQuiz.ctaText}</Button>
        </div>
      </div>
      
      <section className="container py-12 md:py-20 text-center">
        <h2 className="text-4xl text-primary mb-6">
          {content.ourStory.headline}
        </h2>
        <p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8"
            dangerouslySetInnerHTML={{ __html: content.ourStory.subline.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
        />
        <Button asChild variant="secondary">
          <Link href="/about">{content.ourStory.ctaText}</Link>
        </Button>
      </section>
    </div>
  );
}
