
'use client';
import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "./ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Men's Fragrances",
    href: "/shop?category=Men's",
    description: "Bold, sophisticated, and powerful scents for the modern man.",
  },
  {
    title: "Women's Fragrances",
    href: "/shop?category=Women's",
    description: "Elegant, captivating, and timeless scents for every occasion.",
  },
  {
    title: "Unisex Collection",
    href: "/shop?category=Unisex",
    description: "Versatile fragrances that defy boundaries and celebrate individuality.",
  },
  {
    title: "All Products",
    href: "/shop",
    description: "Explore the entire OZNIOR collection to find your perfect scent.",
  },
];

const mobileLinks = [
    { title: "Home", href: "/" },
    { title: "Shop All", href: "/shop" },
    { title: "Trending", href: "/trending" },
    { title: "Blog", href: "/blog" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
];

export function DesktopNavMenu({ isMobile = false }: { isMobile?: boolean }) {

  if (isMobile) {
      return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                 <div className="p-4 border-b border-border">
                    <h2 className="text-lg font-semibold text-primary">Menu</h2>
                </div>
                <nav className="mt-4 grid gap-1 p-2">
                {mobileLinks.map((item) => (
                    <SheetClose asChild key={item.href}>
                        <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                           {item.title}
                        </Link>
                    </SheetClose>
                ))}
                </nav>
            </SheetContent>
        </Sheet>
      )
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
