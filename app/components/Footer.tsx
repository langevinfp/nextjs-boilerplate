// Add "use client" directive because we'll need state for the form
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // Import useState for form inputs

export default function Footer() {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // State for the message

  // Placeholder submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic here
    console.log("Form submitted (placeholder):", { name, email, message });
    alert("Thank you for your message! (Placeholder message)");
    setName(""); // Clear form after submission
    setEmail("");
    setMessage("");
  };

  // SVG background pattern Data URI (same as before)
  const patternDataUri =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15'%3E%3Cpath d='M-1,1 l2,-2 M0,15 l15,-15 M14,16 l2,-2' stroke='%23e7e5e4' stroke-width='0.5'/%3E%3C/svg%3E";

  return (
    <footer
      className="bg-stone-100 text-stone-700 py-12 mt-auto border-t-3 border-rose-900"
      style={{
        backgroundImage: `url("${patternDataUri}")`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Grid Structure - Form spans 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* --- Column 1: Logo + Contact Info --- */}
          <div className="md:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.svg"
                alt="Langevin Forest Products Logo"
                width={170} // Adjusted size
                height={57}
              />
            </Link>
            {/* Contact Info Below Logo */}
            <div className="space-y-2 text-sm mt-4">
              {" "}
              {/* Added margin-top */}
              <h4 className="text-base font-semibold text-rose-900 mb-2 font-mono tracking-wider uppercase">
                Business Info
              </h4>
              <p className="leading-relaxed text-stone-600">
                P.O. Box 428
                <br />
                Sterling, MA 01564
              </p>
              <p>
                <a
                  href="tel:978-422-3939"
                  className="text-stone-600 hover:text-rose-800 transition-colors"
                >
                  (978) 422-3939
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@langevinforest.com"
                  className="text-stone-600 hover:text-rose-800 transition-colors"
                >
                  sales@langevinfp.com
                </a>
              </p>
              <p className="mt-2">M-F: 8am-5pm EST</p>
            </div>
          </div>

          {/* --- Column 2: Quick Links --- */}
          <div className="md:col-span-1">
            <h4 className="text-base font-semibold text-rose-900 mb-3 font-mono tracking-wider uppercase">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {" "}
              {/* Slightly increased spacing */}
              <Link
                href="/lumber-products"
                className="block text-sm hover:text-rose-800 transition-colors"
              >
                Lumber Products
              </Link>
              <Link
                href="/about-us"
                className="block text-sm hover:text-rose-800 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/our-team"
                className="block text-sm hover:text-rose-800 transition-colors"
              >
                Our Team
              </Link>
              <Link
                href="/contact"
                className="block text-sm hover:text-rose-800 transition-colors"
              >
                Contact Page
              </Link>
            </nav>
          </div>

          {/* --- Column 3 & 4: Contact Form (Spanning 2 columns) --- */}
          <div className="md:col-span-2">
            <h4 className="text-base font-semibold text-rose-900 mb-3 font-mono tracking-wider uppercase">
              Send a Message
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              {" "}
              {/* Standard spacing */}
              {/* Nested Grid for Name/Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="footer-name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="footer-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-rose-800 focus:border-rose-800 bg-white placeholder-stone-400" // Standard padding/text
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="footer-email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="footer-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-rose-800 focus:border-rose-800 bg-white placeholder-stone-400" // Standard padding/text
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              {/* Message Textarea */}
              <div>
                <label htmlFor="footer-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="footer-message"
                  rows={4} // Reasonable number of rows
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-rose-800 focus:border-rose-800 bg-white placeholder-stone-400 resize-vertical" // Allow vertical resize
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto bg-rose-800 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-rose-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-100 focus:ring-rose-700" // Standard padding, allow auto width on larger screens
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-stone-300 pt-8 text-center">
          {" "}
          {/* Standard padding */}
          <p className="text-sm text-stone-600">
            {" "}
            {/* Standard text size */}© {new Date().getFullYear()} Langevin
            Forest Products, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
