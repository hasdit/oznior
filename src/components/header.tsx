
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, User, Flame, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks/use-cart';
import CartSheet from './cart-sheet';
import { SearchBar } from './search-bar';
import { useUser } from '@/firebase';
import { DesktopNavMenu } from './desktop-nav-menu';
import { Button } from './ui/button';

const navItems = [
    { name: 'Shop', path: '/shop' },
    { name: 'Trending', path: '/trending', icon: Flame },
];

export function Header() {
  const { state, dispatch } = useCart();
  const { user, isUserLoading } = useUser();
  const pathname = usePathname();
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const cartItemCount = state.cart.reduce((total, item) => total + item.qty, 0);

  const Logo = () => (
    <Link href="/" className="flex-shrink-0" aria-label="OZNIOR Home">
      <h1 className="text-2xl font-bold tracking-widest text-primary">
        OZNIOR
      </h1>
    </Link>
  );

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container flex h-16 items-center justify-between gap-4">
          
          <div className={cn("flex items-center gap-6", { 'hidden': isMobileSearchOpen })}>
            <div className='md:hidden'>
              <DesktopNavMenu isMobile={true} />
            </div>
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <DesktopNavMenu />
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "text-sm font-body uppercase tracking-wider transition-colors duration-200 flex items-center gap-2",
                  pathname === item.path 
                    ? 'text-primary' 
                    : 'text-foreground/80 hover:text-primary'
                )}
              >
                {item.icon && <item.icon className='h-4 w-4'/>}
                {item.name}
              </Link>
            ))}
             <Link
                href="/blog"
                className={cn(
                  "text-sm font-body uppercase tracking-wider transition-colors duration-200",
                  pathname.startsWith('/blog')
                    ? 'text-primary' 
                    : 'text-foreground/80 hover:text-primary'
                )}
              >
                Blog
              </Link>
          </nav>
          
          {/* Mobile Search Bar State */}
          {isMobileSearchOpen && (
              <div className="md:hidden flex-1 flex items-center gap-2">
                  <SearchBar onResultClick={() => setIsMobileSearchOpen(false)} />
                  <Button variant="ghost" size="sm" onClick={() => setIsMobileSearchOpen(false)}>Cancel</Button>
              </div>
          )}


          {/* Right side icons */}
          <div className={cn("flex flex-1 md:flex-initial items-center justify-end space-x-2 md:space-x-4", { 'hidden': isMobileSearchOpen })}>
            <div className="hidden md:block w-full max-w-xs">
              <SearchBar />
            </div>

            {/* Mobile search trigger */}
            <button onClick={() => setIsMobileSearchOpen(true)} className="md:hidden p-2 text-foreground/80 hover:text-primary">
                <Search className="h-5 w-5" />
            </button>

            <Link
                href={user ? "/account" : "/login"}
                className="relative text-foreground/80 hover:text-primary transition-colors duration-200 p-2 flex-shrink-0"
                 aria-label={user ? "My Account" : "Login"}
              >
                <User className="h-5 w-5" />
            </Link>

            <button
              aria-label={`Open cart with ${cartItemCount} items`}
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative text-foreground/80 hover:text-primary transition-colors duration-200 p-2 flex-shrink-0"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary p-1 text-xs font-bold leading-none text-primary-foreground">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
      <CartSheet />
    </>
  );
}
