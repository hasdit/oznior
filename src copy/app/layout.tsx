import type { Metadata, Viewport } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/context/cart-context';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import './globals.css';
import { MobileNav } from '@/components/mobile-nav';
import { FirebaseClientProvider } from '@/firebase';

const APP_NAME = "OZNIOR";
const APP_DEFAULT_TITLE = "OZNIOR: Signature Scents — Premium Perfumery";
const APP_TITLE_TEMPLATE = "%s | OZNIOR";
const APP_DESCRIPTION = "Discover OZNIOR's collection of premium, modern fragrances. Luxurious, unmistakable scents crafted for the discerning minimalist. Shop the latest collection.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: new URL("https://oznior.com"),
    images: [
      {
        url: 'https://picsum.photos/seed/118/1200/630', // From placeholder-images.json
        width: 1200,
        height: 630,
        alt: "OZNIOR Premium Perfumery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
     images: [
      {
        url: 'https://picsum.photos/seed/118/1200/630',
        width: 1200,
        height: 630,
        alt: "OZNIOR Premium Perfumery",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#071028",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased min-h-screen flex flex-col")}>
        <FirebaseClientProvider>
          <CartProvider>
            <Header />
            <main className="flex-grow pb-16 md:pb-0">{children}</main>
            <Footer />
            <Toaster />
            <MobileNav />
          </CartProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
