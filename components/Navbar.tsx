"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#1a2332" }}
      className="fixed top-0 left-0 right-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/">
          <Image src="/logo123.jpeg" alt="Winter Finance Partners" width={160} height={44} className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{ backgroundColor: "#c9a84c", color: "#1a2332" }}
            className="px-5 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div style={{ backgroundColor: "#243044" }} className="md:hidden px-6 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-300 hover:text-white text-sm font-medium border-b border-white/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{ backgroundColor: "#c9a84c", color: "#1a2332" }}
            className="mt-4 block text-center px-5 py-2 rounded text-sm font-semibold"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>

  );
}
