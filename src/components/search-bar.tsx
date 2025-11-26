
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useDebounce } from 'use-debounce';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Loader2, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { getProducts } from '@/lib/actions';
import type { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export function SearchBar({ onResultClick }: { onResultClick?: () => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchResults = async () => {
      if (debouncedSearchTerm.length > 1) {
        setIsLoading(true);
        const products = await getProducts({ keyword: debouncedSearchTerm });
        setResults(products);
        setIsLoading(false);
        if (!isPopoverOpen) setIsPopoverOpen(true);
      } else {
        setResults([]);
        if (isPopoverOpen) setIsPopoverOpen(false);
      }
    };
    fetchResults();
  }, [debouncedSearchTerm, isPopoverOpen]);
  
  useEffect(() => {
      const shouldBeOpen = isInputFocused && searchTerm.length > 0 && results.length > 0;
      setIsPopoverOpen(shouldBeOpen);
  }, [searchTerm, results, isInputFocused])

  const handleClear = () => {
      setSearchTerm('');
      setResults([]);
      setIsPopoverOpen(false);
      inputRef.current?.focus();
  }
  
  const handleLinkClick = () => {
    setIsPopoverOpen(false);
    onResultClick?.();
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
          <Input
            ref={inputRef}
            type="search"
            placeholder="Search scents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            className="pl-10 h-10 w-full"
            aria-label="Search products"
          />
           {(isLoading || searchTerm) && (
            <button 
                onClick={handleClear} 
                className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", isLoading && "hidden")}
            >
                <X className="h-4 w-4" />
            </button>
           )}
           {isLoading && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] mt-1 p-0" align="start">
        {results.length > 0 ? (
          <div className="max-h-96 overflow-y-auto">
            {results.map((product) => {
              const productImage = PlaceHolderImages.find(p => p.id === product.images[0]);
              return (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className="flex items-center gap-4 p-3 hover:bg-muted transition-colors"
                  onClick={handleLinkClick}
                >
                  {productImage && (
                      <Image 
                        src={productImage.imageUrl} 
                        alt={product.title}
                        width={40}
                        height={53}
                        className="object-cover w-10 h-[53px] border border-border"
                      />
                  )}
                  <div>
                    <p className="font-medium text-foreground">{product.title}</p>
                    <p className="text-sm text-primary">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          !isLoading && debouncedSearchTerm.length > 1 && (
            <p className="p-4 text-center text-sm text-muted-foreground">No results found.</p>
          )
        )}
      </PopoverContent>
    </Popover>
  );
}
