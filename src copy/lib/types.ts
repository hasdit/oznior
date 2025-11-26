export type FragranceNotes = {
  top: string[];
  middle: string[];
  base: string[];
};

export type Product = {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  comparePrice: number;
  volumeMl: number;
  images: string[];
  categories: string[];
  tags: string[];
  fragranceNotes: FragranceNotes;
  featured: boolean;
  inventoryNumber: number;
  sku: string;
  createdAt: string;
};

export type CartItem = {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  qty: number;
};

export type Order = {
  id: string;
  userId: string;
  name: string;
  mobile: string;
  address: string;
  items: CartItem[];
  total: number;
  subtotal: number;
  shippingFee: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: 'bkash' | 'nagad' | 'rocket' | 'upay';
  last4: string;
  createdAt: string | { toDate: () => Date }; // Support both Firestore Timestamp and string
  source: string;
}

export type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  createdAt: string; // ISO 8601 date string
};

export type Review = {
    id: string;
    productId: string;
    productTitle: string;
    userId: string;
    userName: string;
    rating: number;
    text: string;
    createdAt: string; // ISO 8601 date string
    status: 'pending' | 'approved';
};


export type SiteContent = {
  id: 'homepage'; // Singleton document
  hero: {
    headline: string;
    subline: string;
    ctaText: string;
  };
  scentQuiz: {
    headline: string;
    subline: string;
    ctaText: string;
  };
  ourStory: {
    headline: string;
    subline: string;
    ctaText: string;
  };
};

export type Page = {
  id: string; // e.g., 'about', 'contact', 'terms'
  title: string;
  content: string; // Markdown content
  updatedAt: string;
};

export type User = {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
};
