"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhone } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "LUMBER PRODUCTS", href: "/lumber-products" },
    { label: "ABOUT US", href: "/about-us" },
    { label: "OUR TEAM", href: "/our-team" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="w-full py-4 px-6 fixed top-0 left-0 z-50 bg-white shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center relative group p-2 rounded-lg transition-all duration-300 hover:bg-rose-50">
          <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-rose-200 transition-all duration-300"></div>
          <div className="relative transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.svg"
              alt="Langevin Forest Products Logo"
              width={150}
              height={50}
              priority
              className="transition-all duration-300 group-hover:brightness-110"
            />
          </div>
        </Link>

        <nav>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-mono tracking-[.1em] py-2 px-1 ${
                    pathname === item.href
                      ? "font-bold text-rose-800 border-b-2 border-rose-800"
                      : "text-amber-900 hover:text-rose-800 hover:border-b-2 hover:border-rose-800"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="tel:+19784223939"
          className="flex items-center text-amber-900 hover:text-rose-800 transition-colors duration-300 group"
        >
          <span className="bg-amber-100 p-2 rounded-full mr-2 group-hover:bg-rose-100 transition-colors duration-300">
            <FaPhone className="text-amber-900 group-hover:text-rose-800 transition-colors duration-300" />
          </span>
          <span className="text-sm font-mono tracking-[.1em] group-hover:font-semibold transition-all duration-300">
            (978) 422-3939
          </span>
        </a>
      </div>
    </header>
  );
}
