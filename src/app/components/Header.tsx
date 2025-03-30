// src/app/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-foreground">
            Adam&apos;s Portfolio
          </span>
        </Link>
        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-lg text-foreground hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-lg text-foreground hover:text-primary transition"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-lg text-foreground hover:text-primary transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-lg text-foreground hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          {/* Optionally add a mobile menu toggle here */}
        </div>
      </div>
    </header>
  );
}
