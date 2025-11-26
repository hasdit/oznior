import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductBySlug, getReviewsForProduct } from '@/lib/actions';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ProductAiInsight } from '@/components/product-ai-insight';
import type { Metadata } from 'next';
import { AddToCartForm } from './add-to-cart-form';
import { Review, Product } from '@/lib/types';
import { Star } from 'lucide-react';
import { format } from 'date-fns';
import { ReviewForm } from './review-form';
import { FirebaseClientProvider } from '@/firebase';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const firstImage = PlaceHolderImages.find(p => p.id === product.images[0]);

  return {
    title: product.title,
    description: product.shortDescription,
    openGraph: {
      title: product.title,
      description: product.shortDescription,
      type: 'product',
      images: firstImage ? [firstImage.imageUrl] : [],
      siteName: 'OZNIOR',
    },
  };
}

async function ProductReviews({ reviews }: { reviews: Review[] }) {
    if (reviews.length === 0) {
        return <p className="text-muted-foreground">No reviews yet. Be the first to write one!</p>
    }

    return (
        <div className="space-y-6">
            {reviews.map(review => (
                <div key={review.id} className="border-b border-border pb-4">
                    <div className="flex items-center mb-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                            ))}
                        </div>
                        <p className="ml-4 font-semibold text-foreground">{review.userName}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{format(new Date(review.createdAt), 'MMMM dd, yyyy')}</p>
                    <p className="text-foreground/90">{review.text}</p>
                </div>
            ))}
        </div>
    )
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }
  
  const reviews = await getReviewsForProduct(product.id);

  const {
    title, price, comparePrice, description, volumeMl, inventoryNumber,
    images, fragranceNotes, tags
  } = product;

  const mainImage = PlaceHolderImages.find(p => p.id === images[0]);
  
  const averageRating = reviews.length > 0 ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length : 0;


  return (
    <FirebaseClientProvider>
    <div className="container py-12 md:py-20">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
        <div className="space-y-6 lg:sticky lg:top-24 self-start">
          <div className="aspect-[3/4] bg-card border border-border">
            {mainImage && (
              <Image
                src={mainImage.imageUrl}
                alt={title}
                width={600}
                height={800}
                className="w-full h-full object-cover p-8"
                priority
                data-ai-hint={mainImage.imageHint}
              />
            )}
          </div>
        </div>

        <div className="mt-10 lg:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{title}</h1>
           <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < averageRating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                    ))}
                </div>
                <span className="text-muted-foreground text-sm">({reviews.length} reviews)</span>
            </div>
          <div className="flex items-center space-x-4 mb-6">
            {comparePrice && comparePrice > price && (
              <span className="text-2xl text-muted-foreground line-through">${comparePrice.toFixed(2)}</span>
            )}
            <span className="text-3xl text-primary">${price.toFixed(2)} USD</span>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{product.shortDescription}</p>

          {inventoryNumber > 0 && inventoryNumber <= 10 && (
            <Badge variant="destructive" className="mb-6 animate-pulse uppercase">
              Only {inventoryNumber} left
            </Badge>
          )}
          {inventoryNumber <= 0 && (
            <Badge variant="secondary" className="mb-6 uppercase">Sold Out</Badge>
          )}
          
          <AddToCartForm product={product} />

          <Separator className="my-8" />
          
          <div>
            <h3 className="text-xl font-medium text-foreground mb-3">The Story</h3>
            <div className="prose prose-invert text-muted-foreground leading-relaxed whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </div>

          <Separator className="my-8" />

          <div>
            <h3 className="text-xl font-medium text-foreground mb-3">Fragrance Profile</h3>
            <dl className="space-y-3 text-muted-foreground">
              {Object.entries(fragranceNotes).map(([key, value]) => (
                 <div key={key} className="flex items-start">
                    <dt className="w-20 font-semibold text-primary capitalize">{key}:</dt>
                    <dd className="flex-1">{Array.isArray(value) ? value.join(', ') : value}</dd>
                </div>
              ))}
            </dl>
          </div>
          
          <ProductAiInsight product={product} reviews={reviews} />

           <Separator className="my-8" />

            <div>
                <h3 className="text-2xl font-medium text-foreground mb-6">Customer Reviews</h3>
                <ProductReviews reviews={reviews} />
                <ReviewForm product={product} />
            </div>

        </div>
      </div>
    </div>
    </FirebaseClientProvider>
  );
}

export async function generateStaticParams() {
  const products = await getProducts({});
  return products.map(product => ({
    slug: product.slug,
  }));
}
