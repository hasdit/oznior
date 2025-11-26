import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, path: 'https://instagram.com/oznior' },
    { name: 'Facebook', icon: Facebook, path: 'https://facebook.com/oznior' },
    { name: 'Twitter', icon: Twitter, path: 'https://twitter.com/oznior' },
  ];

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container py-12">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="mt-8 flex justify-center space-x-6">
          {socialLinks.map((social) => (
            <a key={social.name} href={social.path} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-muted-foreground hover:text-primary transition-colors">
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          &copy; {currentYear} OZNIOR Perfumery. All rights reserved. | <span className="text-primary">Luxury is simplicity.</span>
        </p>
      </div>
    </footer>
  );
};
