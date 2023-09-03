'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const PAGES = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Writings',
    href: '/writings',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center gap-6">
        {PAGES.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className={cn(
              'text-sm hover:text-primary transition-all',
              isActive(page.href) && 'font-bold',
            )}
          >
            {page.name}
          </Link>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}
