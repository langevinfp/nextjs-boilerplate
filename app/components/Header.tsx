"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaPhone } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "LUMBER PRODUCTS", href: "/lumber-products" },
    { label: "ABOUT US", href: "/about-us" },
    { label: "OUR TEAM", href: "/our-team" },
    { label: "CONTACT", href: "/contact" },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Langevin Forest Products Logo"
                width={150}
                height={50}
                priority
                className="transition-all duration-300 hover:brightness-110"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden sm:flex sm:space-x-8">
            <ul className="flex space-x-4">
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

          <div className="flex items-center space-x-4 sm:space-x-8">
            {/* Desktop phone number */}
            <a
              href="tel:+19784223939"
              className="hidden sm:flex items-center text-amber-900 hover:text-rose-800 transition-colors duration-300 group ml-auto"
            >
              <span className="bg-amber-100 p-2 rounded-full mr-2 group-hover:bg-rose-100 transition-colors duration-300">
                <FaPhone className="text-amber-900 group-hover:text-rose-800 transition-colors duration-300" />
              </span>
              <span className="text-sm font-mono tracking-[.1em] group-hover:font-semibold transition-all duration-300">
                (978) 422-3939
              </span>
            </a>

            {/* Mobile phone number */}
            <a
              href="tel:+19784223939"
              className="flex items-center text-amber-900 hover:text-rose-800 transition-colors duration-300 group sm:hidden"
            >
              <span className="bg-amber-100 p-2 rounded-full group-hover:bg-rose-100 transition-colors duration-300">
                <FaPhone className="text-amber-900 group-hover:text-rose-800 transition-colors duration-300" />
              </span>
            </a>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="sm:hidden absolute right-0 top-16 z-50 bg-white shadow-lg rounded-lg">
              <div className="px-4 py-3 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block w-full text-center text-lg font-mono tracking-[.1em] ${
                      pathname === item.href
                        ? "text-rose-800 font-semibold"
                        : "text-amber-900 hover:text-rose-800"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
