export type Product = {
  slug: string;
  title: string;
  price?: number;
  // add more fields as needed
};

/**
 * getProducts()
 * Build-time safe loader. Tries local JSON (src/data/products.json) first,
 * falls back to minimal seed so 
ext build won't crash.
 */
export async function getProducts(): Promise<Product[]> {
  try {
    // try local JSON (works during build)
    // Note: keep a products.json in src/data if you have one
    const data = await import('../data/products.json');
    if (data && data.default && Array.isArray(data.default)) {
      return data.default as Product[];
    }
  } catch (e) {
    // ignore
  }

  // fallback seed (safe)
  return [
    { slug: "oznior-noir-50ml", title: "OZNIOR NOIR 50ml", price: 29.0 },
    { slug: "oznior-amber-100ml", title: "OZNIOR AMBER 100ml", price: 49.0 }
  ];
}

export async function getProductBySlug(slug: string) {
  const list = await getProducts();
  return list.find(p => p.slug === slug) || null;
}
