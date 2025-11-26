import { MetadataRoute } from 'next';
import { getProducts, getBlogs, getAllPages } from '@/lib/actions';

const URL = 'https://www.oznior.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all dynamic routes
  const products = await getProducts({});
  const blogs = await getBlogs();
  const pages = await getAllPages();
  
  // Define main static routes that are not in the 'pages' collection
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: URL, lastModified: new Date().toISOString(), priority: 1 },
    { url: `${URL}/shop`, lastModified: new Date().toISOString(), priority: 0.9 },
    { url: `${URL}/blog`, lastModified: new Date().toISOString(), priority: 0.8 },
  ];

  const productRoutes = products.map((product) => ({
    url: `${URL}/product/${product.slug}`,
    lastModified: new Date(product.createdAt).toISOString(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.7,
  }));

  const blogRoutes = blogs.map((post) => ({
      url: `${URL}/blog/${post.slug}`,
      lastModified: new Date(post.createdAt).toISOString(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.6,
  }));

  const pageRoutes = pages.map((page) => ({
    url: `${URL}/${page.id}`,
    lastModified: new Date(page.updatedAt).toISOString(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...pageRoutes, ...productRoutes, ...blogRoutes];
}
