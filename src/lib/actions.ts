'use server';

import type { Product, Blog, SiteContent, Page, Review } from "@/lib/types";
import { getProductInformation } from '@/ai/flows/product-information-tool';
import type { ProductInformationInput } from '@/ai/flows/product-information-tool';
import { initializeFirebase } from '@/firebase/server-init';
import { collection, getDocs, getDoc, query, where, limit, orderBy, doc, setDoc } from 'firebase/firestore';
import { revalidatePath } from "next/cache";
import { products, blogs as staticBlogs } from "./data";

export async function getProducts(filters: {
  featured?: boolean;
  category?: string;
  keyword?: string;
}): Promise<Product[]> {
  // This function now returns static product data
  let filteredProducts = products;

  if (filters.featured) {
    filteredProducts = filteredProducts.filter(p => p.featured);
  }
  if (filters.category && filters.category !== 'All') {
     filteredProducts = filteredProducts.filter(p => p.categories.includes(filters.category!));
  }
  if (filters.keyword) {
      filteredProducts = filteredProducts.filter(p => p.title.toLowerCase().includes(filters.keyword!.toLowerCase()));
  }

  return filteredProducts;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  // This function now returns a product from the static data
  return products.find(p => p.slug === slug);
}

export async function getInsightForProduct(input: ProductInformationInput): Promise<string> {
    try {
        const result = await getProductInformation(input);
        return result.insight;
    } catch (e) {
        console.error("AI Insight Error:", e);
        return "Could not generate an insight at this time.";
    }
}

// --- Review Actions ---
export async function getReviewsForProduct(productId: string): Promise<Review[]> {
    const { firestore } = initializeFirebase();
    const reviewsCollection = collection(firestore, 'reviews');
    const q = query(reviewsCollection, where('productId', '==', productId), where('status', '==', 'approved'), orderBy('createdAt', 'desc'));
    try {
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ ...doc.data() as Review, id: doc.id }));
    } catch (error) {
        console.error(`Error fetching reviews for product ${productId}:`, error);
        return [];
    }
}

// --- Blog Actions ---

export async function getBlogs(): Promise<Blog[]> {
    // This function now returns static blog data
    return staticBlogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
    // This function now returns a blog from the static data
    return staticBlogs.find(b => b.slug === slug);
}

// --- Site Content Actions ---
const defaultSiteContent: SiteContent = {
  id: 'homepage',
  hero: {
    headline: 'Luxurious, unmistakable.',
    subline: 'A modern classic in every bottle.',
    ctaText: 'Shop Bestsellers'
  },
  scentQuiz: {
    headline: 'Find Your Signature.',
    subline: 'Our scents are crafted to be your personal narrative. Which chapter will you open tonight?',
    ctaText: 'Take the Scent Quiz'
  },
  ourStory: {
    headline: 'Luxury is Simplicity.',
    subline: 'At OZNIOR, we distill complexity into elegance. We believe a premium fragrance should be **unmistakable, not overpowering**. Our commitment to ethically-sourced, high-concentration natural oils ensures a clean, long-lasting scent that moves with you.',
    ctaText: 'Read Our Story'
  }
};

export async function getSiteContent(): Promise<SiteContent> {
    const { firestore } = initializeFirebase();
    const contentDocRef = doc(firestore, 'siteContent', 'homepage');
    try {
        const docSnap = await getDoc(contentDocRef);
        if (docSnap.exists()) {
            return docSnap.data() as SiteContent;
        } else {
            // Document doesn't exist, return default content without trying to write.
            // The document will be created when an admin saves it for the first time.
            return defaultSiteContent;
        }
    } catch (error) {
        console.error("Error fetching site content, returning default:", error);
        return defaultSiteContent;
    }
}

export async function updateSiteContent(content: SiteContent): Promise<{success: boolean, error?: string}> {
  const { firestore } = initializeFirebase();
  const contentDocRef = doc(firestore, 'siteContent', 'homepage');
  try {
    await setDoc(contentDocRef, content, { merge: true });
    // Revalidate the homepage to show the updated content immediately
    revalidatePath('/');
    return { success: true };
  } catch (error: any) {
    console.error("Error updating site content:", error);
    return { success: false, error: error.message };
  }
}

// --- Page Content Actions ---

const defaultPages: Page[] = [
    {
        id: 'about',
        title: 'The Story of OZNIOR — Modern Luxury Perfumery',
        content: `
# The OZNIOR Philosophy
OZNIOR is more than perfumery; it is an exercise in **intentional minimalism**. We craft modern classics for those who understand that true luxury lies in subtlety and substance.

## Intentional Minimalism
In a world of noise, we offer clarity. Our deep navy and gold aesthetic reflects our core value: **high-contrast elegance**. The bottles are architectural, designed to be kept. The scents are focused, designed to be *you*. We believe every note should earn its place, resulting in compositions that are both complex and immediately understandable.

> "Our goal is not to fill a shelf, but to provide a single, powerful signature statement. Every element is intentional."

## Craft & Conscience
We are committed to **sustainability and authenticity**. Our fragrances use high-concentration fine fragrance oils, ethically sourced and cruelty-free. Longevity and sillage are paramount—your scent should last as long as the memory you create. We work only with master perfumers who share our vision of creating evocative, powerful, and truly modern narratives.
        `,
        updatedAt: new Date().toISOString(),
    },
    {
        id: 'terms',
        title: 'Terms of Service',
        content: `
# Terms of Service
*Last updated: November 26, 2025*

## 1. Acceptance of Terms
By accessing and using the OZNIOR website ("Site"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.

## 2. Products and Services
All products listed on the Site are subject to availability. We make every effort to display the most accurate product information, including scent notes, descriptions, and packaging. However, we cannot guarantee that your device's display will accurately reflect our products. All prices are listed in USD unless otherwise noted and are subject to change without notice.

## 3. Intellectual Property
The name OZNIOR, the logo, product names, product copy, and all related content on this Site are the exclusive intellectual property of OZNIOR Perfumery, LLC. and are protected by international copyright and trademark laws. Unauthorized use, reproduction, or distribution is strictly prohibited.
        `,
        updatedAt: new Date().toISOString(),
    },
    {
        id: 'privacy',
        title: 'Privacy Policy',
        content: `
# Privacy Policy
*Effective Date: November 26, 2025*

## 1. Information We Collect
We collect personal identification information (such as Name, Email, and Shipping Address) only when you voluntarily provide it to us during the checkout or account registration process. We also collect non-personal information through cookies to maintain your shopping cart session and analyze site traffic to improve user experience.

## 2. How We Use Your Information
Your information is used solely for the purposes of processing your transactions, managing your account, and personalizing your shopping experience. We will never sell, rent, or lease your personal information to third parties for marketing purposes.
        `,
        updatedAt: new Date().toISOString(),
    },
    {
        id: 'contact',
        title: 'Contact Us',
        content: `
# Get in Touch
We would love to hear from you. Whether you have a question about our fragrances, a press inquiry, or feedback on your experience, please don't hesitate to reach out.

## Customer Support
For questions about your order, shipping, or returns, please email us at:
**support@oznior.com**

We aim to respond to all inquiries within 24-48 business hours.

## Press & Media
For press inquiries, please contact:
**press@oznior.com**
`,
        updatedAt: new Date().toISOString(),
    }
];


export async function getPageContent(slug: string): Promise<Page | null> {
    const { firestore } = initializeFirebase();
    const pageDocRef = doc(firestore, 'pages', slug);
    try {
        const docSnap = await getDoc(pageDocRef);
        if (docSnap.exists()) {
            return docSnap.data() as Page;
        } else {
            // If page doesn't exist in DB, check if it's one of the defaults
            const defaultPage = defaultPages.find(p => p.id === slug);
            if (defaultPage) {
                // Return default content without writing to DB
                return defaultPage;
            }
            return null;
        }
    } catch (error) {
        console.error(`Error fetching page content for ${slug}:`, error);
        return null;
    }
}

export async function getAllPages(): Promise<Page[]> {
    const { firestore } = initializeFirebase();
    const pagesCollection = collection(firestore, 'pages');
    try {
        const querySnapshot = await getDocs(pagesCollection);
        let pages = querySnapshot.docs.map(doc => doc.data() as Page);

        // Ensure default pages are available if not in DB, without writing
        for (const defaultPage of defaultPages) {
            if (!pages.some(p => p.id === defaultPage.id)) {
                pages.push(defaultPage);
            }
        }
        return pages;
    } catch (error) {
        console.error("Error fetching all pages:", error);
        return defaultPages; // Return defaults on error to avoid breaking the site
    }
}


export async function updatePageContent(page: Page): Promise<{ success: boolean; error?: string }> {
  const { firestore } = initializeFirebase();
  const pageDocRef = doc(firestore, 'pages', page.id);
  try {
    await setDoc(pageDocRef, { ...page, updatedAt: new Date().toISOString() }, { merge: true });
    // Revalidate the path to show the updated content immediately
    revalidatePath(`/${page.id}`);
    revalidatePath('/sitemap.xml'); // Revalidate sitemap as well
    return { success: true };
  } catch (error: any) {
    console.error(`Error updating page content for ${page.id}:`, error);
    return { success: false, error: error.message };
  }
}
