'use client';
import { useState, useEffect } from 'react';
import type { Product } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductGrid } from '@/components/product-grid';
import { useDebounce } from 'use-debounce';
import { Search } from 'lucide-react';

export default function ShopClient({ initialProducts }: { initialProducts: Product[] }) {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
    
    const [debouncedKeyword] = useDebounce(keyword, 300);

    useEffect(() => {
        let filtered = initialProducts;

        if (debouncedKeyword) {
            filtered = filtered.filter(p => p.title.toLowerCase().includes(debouncedKeyword.toLowerCase()));
        }

        if (category && category !== 'All') {
            filtered = filtered.filter(p => p.categories.includes(category));
        }

        setProducts(filtered);
    }, [debouncedKeyword, category, initialProducts]);

    const categories = ['All', ...new Set(initialProducts.flatMap(p => p.categories))];

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search by scent name..."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <div className="w-full sm:w-auto">
                     <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                            <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem key={cat} value={cat}>
                                    {cat}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <ProductGrid products={products} />
        </>
    );
}