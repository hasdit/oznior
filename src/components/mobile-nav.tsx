
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame, Menu, ShoppingBag, User, LayoutGrid, LogIn, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks/use-cart';
import { useUser } from '@/firebase';
import { SearchBar } from './search-bar';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

const Logo = () => (
    <Link href="/" className="flex-shrink-0" aria-label="OZNIOR Home">
      <h1 className="text-2xl font-bold tracking-widest text-primary">
        OZNIOR
      </h1>
    </Link>
);

export function MobileNav() {
    const { state, dispatch } = useCart();
    const { user } = useUser();
    const pathname = usePathname();
    const cartItemCount = state.cart.reduce((total, item) => total + item.qty, 0);

    const mainNavItems = [
        { name: 'Shop', path: '/shop', icon: LayoutGrid },
        { name: 'Trending', path: '/trending', icon: Flame },
        { name: 'Cart', path: '#', icon: ShoppingBag, isCart: true },
        { name: user ? 'Account' : 'Login', path: user ? '/account' : '/login', icon: user ? User : LogIn },
    ];


    const handleNavClick = (item: (typeof mainNavItems)[0], e: React.MouseEvent) => {
        if (item.isCart) {
            e.preventDefault();
            dispatch({ type: 'TOGGLE_CART' });
        }
    };

    return (
        <>
            <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-background/95 backdrop-blur-lg border-t border-border">
                <div className="grid h-full grid-cols-4 mx-auto font-medium">
                    {mainNavItems.map((item) => {
                        const isActive = !item.isCart && pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                onClick={(e) => handleNavClick(item, e)}
                                className={cn(
                                    "inline-flex flex-col items-center justify-center px-5 hover:bg-muted group",
                                    isActive ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                <div className="relative">
                                    <item.icon className="w-5 h-5 mb-1" />
                                    {item.isCart && cartItemCount > 0 && (
                                        <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary p-1 text-xs font-bold leading-none text-primary-foreground">
                                            {cartItemCount}
                                        </span>
                                    )}
                                </div>
                                <span className="text-xs">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
