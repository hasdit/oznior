"use client";

import { useEffect, useState } from "react";
import type { Product, Review } from "@/lib/types";
import { getInsightForProduct } from "@/lib/actions";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SparklesIcon } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export function ProductAiInsight({ product, reviews }: { product: Product, reviews: Review[] }) {
  const [insight, setInsight] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchInsight() {
      if (!product) return;
      
      setIsLoading(true);
      const productInput = {
        productDescription: product.description,
        fragranceNotes: product.fragranceNotes,
        customerReviews: reviews.map(r => r.text),
      };
      
      const result = await getInsightForProduct(productInput);
      setInsight(result);
      setIsLoading(false);
    }
    fetchInsight();
  }, [product, reviews]);

  return (
    <Card className="bg-card/50 border-primary/20 mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-primary">
          <SparklesIcon className="w-5 h-5" />
          Scent Insight
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ) : (
          <p className="text-foreground/80">{insight}</p>
        )}
      </CardContent>
    </Card>
  );
}
