import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';

interface HeroProps {
  headline: string;
  subline: string;
  ctaText: string;
  imageUrlId: string;
  imageHint: string;
}

export function Hero({ headline, subline, ctaText, imageUrlId, imageHint }: HeroProps) {
  const heroImage = PlaceHolderImages.find(p => p.id === imageUrlId);

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {heroImage && (
         <Image 
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/60"></div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <p className="font-body text-lg md:text-xl text-foreground uppercase tracking-widest mb-4">
          {subline}
        </p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold max-w-4xl text-primary mb-8 leading-tight drop-shadow-lg">
          {headline}
        </h2>
        
        <Button asChild variant="secondary" size="lg" className="mt-4 hover:scale-[1.03] transition-transform duration-300">
          <Link href="/shop">{ctaText}</Link>
        </Button>
      </div>
    </div>
  );
};
