"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/main-1.png", "/main-2.png", "/main-3.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]); // Add images.length to dependency array

  return (
    <div className="relative w-full h-[550px] sm:h-[400px] md:h-[550px] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Carousel image ${index + 1}`}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30 z-10"></div>

      {/* Text overlay - centered */}
      <div className="absolute top-5/12 left-0 right-0 transform -translate-y-1/2 z-20 text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl font-bold text-white mx-auto mb-8 text-shadow-2xl px-4">
          Connecting Quality Mills to Quality Customers
        </h2>

        {/* Contact button with simpler animation - centered */}
        <Link href="/contact">
          <button
            className="
              mt-4 px-6 py-3 bg-rose-700 text-white text-lg sm:text-xl font-semibold rounded-lg
              shadow-lg hover:shadow-xl hover:bg-rose-800
              transition-colors duration-200 cursor-pointer
              focus:outline-none focus:ring-0 w-full sm:w-auto
            "
          >
            CONTACT US
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function Home() {
  const lumberProducts = [
    {
      title: "Canadian SPF",
      description: [
        "Dimensions: 2x4-2x12 16' and Shorter (Including Special Trims)",
        "Grades: Econ - MSR, Including Premium",
        "Use: Ideal for General Construction and framing"
      ],
    },
    {
      title: "Southern Yellow Pine (SYP)",
      description: [
        "Dimensions: 2x4-2x12 20' and shorter",
        "Grades: #4 - MSR including DSS & SS",
        "Use: Structural applications"
      ],
    },
    {
      title: "Import Euro SPF",
      description: [
        "Dimensions: 2x4-2x12 8'-20'",
        "Grades: 2x4 & 2x6",
        "Use: Construction and industrial uses"
      ],
    },
    {
      title: "Boards - EWP/SPF/SYP",
      description: [
        "Dimensions: 1x3-1x6 8'-16'",
        "Grades: All Grades",
        "Use: Trim, shelving, and craft projects"
      ],
    },
    {
      title: "KD Hem Fir / White Fir",
      description: [
        "Dimensions: 2x4-2x12 8'-26'",
        "Grades: Stud - Select Structural including Premium",
        "Use: Construction applications"
      ],
    },
    {
      title: "Posts & Timbers",
      description: [
        "Dimensions: Rough Sawn 4x4-6x12 / S4S 4x4-6x6",
        "Grades: Green / KD Appearance",
        "Use: Structural applications"
      ],
    },
  ];

  return (
    <>
      {/* Full-width carousel with overlaid partners section */}
      <div className="w-full relative">
        <div className="relative">
          <ImageCarousel />

          {/* Our Partners section - overlaid on the gradient - tightened up */}
          <div className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-1/2">
            <div className="max-w-3xl mx-auto px-4">
              <div className="bg-white rounded-2xl shadow-xl py-6 px-8">
                <h3 className="mt-2 text-2xl italic font-semibold text-center mb-4">
                  Our Close Partners
                </h3>
                <div className="flex justify-center items-center gap-6 md:gap-10">
                  <div className="w-32 h-16 relative">
                    <Image
                      src="/partner-1.png"
                      alt="Partner 1"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="w-32 h-16 relative">
                    <Image
                      src="/partner-2.png"
                      alt="Partner 2"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="w-32 h-16 relative">
                    <Image
                      src="/partner-3.png"
                      alt="Partner 3"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section - Brutalist, Text-Based Design */}
      <section id="lumber-products" className="py-32 bg-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10 mb-16 text-center">
            {/* Title styling remains similar but can be adjusted if needed */}
            <h2 className="text-4xl font-bold text-rose-900 mb-4 font-serif inline-block relative">
              Our Lumber Products
            </h2>
            <p className="text-xl text-rose-900 max-w-3xl mx-auto">
              Premium quality lumber sourced from sustainable forests, carefully
              selected and graded for your construction projects
            </p>
          </div>

          {/* Updated Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {lumberProducts.map((product, index) => (
              <div
                key={index}
                // Removed shadow, group, rounded-sm, overflow-hidden. Added thicker border.
                className="border-2 border-rose-800 bg-amber-50 flex flex-col"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Title Section */}
                  <div className="border-b-2 border-dashed border-rose-800/50 pb-4 mb-4">
                    <h3 className="text-xl font-semibold text-rose-900 uppercase tracking-wider font-mono">
                      {product.title}
                    </h3>
                  </div>

                  {/* Description Section */}
                  <p className="text-rose-800 mb-6 flex-grow text-base leading-relaxed">
                    {Array.isArray(product.description) ? (
                      product.description.map((line, i) => {
                        const label = line.split(':')[0];
                        const content = line.split(':')[1];
                        return (
                          <span key={i} className="block mb-1">
                            <span className="font-semibold">{label}:</span>
                            <span className="ml-1">{content}</span>
                          </span>
                        );
                      })
                    ) : (
                      <span className="block">{product.description}</span>
                    )}
                  </p>

                  {/* Button Section - Separated by a top border */}
                  <div className="mt-auto pt-4 border-t-2 border-dashed border-rose-800/50">
                    {/* Brutalist button style */}
                    <Link href="/contact">
                      <button className="text-rose-800 hover:text-white border-2 border-rose-800 px-5 py-2 text-xs font-mono uppercase tracking-[.2em] hover:bg-rose-800 hover:text-ambroseer-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-rose-100 focus:ring-rose-700 cursor-pointer">
                        Request Quote
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="mt-16 text-center">
            <Link href="/lumber-products">
              <button
                className="px-8 py-4 bg-rose-700 text-white text-xl font-semibold rounded-lg
                shadow-lg hover:shadow-xl hover:bg-rose-800
                transition-colors duration-200 cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-700"
              >
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Banner with Quote */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        {/* Background Image with Rose Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/main-3.png"
            alt="Forest background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-rose-900/70"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          {/* Profile Image */}
          <div className="w-32 h-32 mb-8 overflow-hidden rounded-full border-4 border-white shadow-2xl">
            <Image
              src="/portrait-2.png" // Make sure this image exists in /public
              alt="Chris Langevin"
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              onError={(e) => {
                // Optional: hide or replace if image fails to load
                e.currentTarget.style.display = "none";
                // Or show a placeholder div
              }}
            />
          </div>

          {/* Quote */}
          <blockquote className="max-w-4xl mx-auto mb-6 text-3xl md:text-4xl lg:text-5xl font-serif italic">
            "Our success comes from knowing both our mills and our customers.
            That's what we've done since 1984."
          </blockquote>

          {/* Attribution */}
          <p className="text-xl font-semibold tracking-wide uppercase">
            Chris Langevin, President
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about-us" className="py-24 bg-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-rose-900 mb-12 font-serif inline-block relative">
            Our Story
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {" "}
            {/* Increased space between paragraphs */}
            <p className="text-xl text-rose-900 leading-relaxed">
              Langevin Forest Products Inc was founded in 1984 as a partnership
              between Moose River Lumber of Maine and Roger Langevin. When Moose
              River Lumber was later sold to a paper company, Roger assumed full
              ownership of LFP Inc.
            </p>
            {/* Optional divider */}
            <hr className="border-t-2 border-dashed border-rose-800/30 w-1/4 mx-auto" />
            <p className="text-xl text-rose-900 leading-relaxed">
              Roger began his journey in the lumber industry with Furman Lumber
              (now Boisie Cascade) in 1979. A Vietnam-era veteran, he holds
              degrees in forestry and business from Syracuse and New Hampshire
              universities. Born in Quebec, Roger is also fluent in French.
            </p>
            {/* Optional divider */}
            <hr className="border-t-2 border-dashed border-rose-800/30 w-1/4 mx-auto" />
            <p className="text-xl text-rose-900 leading-relaxed">
              Christopher Langevin joined the company in 1994 after graduating
              from Worcester State University. Under his influence, the company
              expanded its profile from strictly wholesale to include mill
              representation. Today, we hold exclusivity with Delco Forest
              Products (New Brunswick) and manage US sales for Group Crete
              (Quebec). We collaborate with various mills across Eastern and
              Western species, utilizing reload locations throughout Canada and
              the Eastern US.
            </p>
            {/* Meet the Team Link */}
            <div className="mt-12">
              <Link
                href="/about-us"
                className="inline-flex items-center text-lg font-medium text-rose-800 border-b-2 border-rose-800/50 hover:border-rose-800 transition-all duration-300 group"
              >
                More about us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
