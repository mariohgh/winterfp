import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111827" }} className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8 pb-8 border-b border-white/10">
          <div>
            <Link href="/">
            <Image src="/logo123.jpeg" alt="Winter Finance Partners" width={140} height={40} className="h-9 w-auto object-contain" />
          </Link>
            <p className="text-gray-500 text-sm max-w-xs">
              Xero, Microsoft Dynamics 365 &amp; NetSuite consultancy for growing UK businesses.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {[
              { label: "Services", href: "#services" },
              { label: "About", href: "#about" },
              { label: "Why Us", href: "#why-us" },
              { label: "Contact", href: "#contact" },
              { label: "Privacy Policy", href: "/privacy" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2025 Winter Finance Partners. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Registered in England &amp; Wales
          </p>
        </div>
      </div>
    </footer>
  );
}
