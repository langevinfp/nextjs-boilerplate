"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLeaf,
  FaIndustry,
  FaShip,
  FaTree,
  FaWarehouse,
  FaCheckCircle,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function LumberProducts() {
  const [showFilters, setShowFilters] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Array of partnered sawmills with details
  const partneredSawmills = [
    {
      name: "Delco Forest Products",
      logo: "/partner-3.png", // Delco logo
      description:
        "Delco is the exclusive sales partner for Langevin Forest Products, handling all transactions in Canada and the U.S. through its dedicated sales office. Delco is committed to excellence, offering select a stud grade and select #2 grade that are known for outstanding quality. To meet customer needs, Delco gladly accommodates special trim requests whenever possible.",
      location: "New Brunswick, Canada",
      products: [
        "2x3 - 2x6 SPF",
        "Econ, Stud NPS, & #2 NPS",
        "Lengths 9' & Shorter - Includes Special Trims",
      ],
    },
    {
      name: "Group Crete",
      logo: "/partner-2.png", // Replace with actual logo
      description:
        "Group Crete is a valued partner of Langevin Forest Products, holding rights to sell Crete stock in the U.S. market. As a dimensional lumber mill, Crete specializes in a range of products, including stud trims and unique odd lengths, offering versatile solutions to meet diverse customer needs.",
      location: "Quebec, Canada",
      products: [
        "2x3-2x10 SPF",
        "Econ to Premium Grade",
        "Lengths 16' & Shorter - Including Odd Lengths",
      ],
    },
    {
      name: "Lulumco",
      logo: "/partner-1.png", // Lulumco logo
      description:
        "Lulumco has been a trusted partner of Langevin Forest Products for over 20 years, renowned in the industry for its top-notch lumber, especially favored by shed builders for its exceptional quality. A standout feature Lulumco offers is customized lumber stamping, allowing customers to have their company name stenciled on the wood before it arrives at their yard, adding a personalized touch to every order.",
      location: "Quebec, Canada",
      products: ["1x2, 1x2- 2x6 SPF", "Stud Grade NPS", "Lengths 8' & Shorter"],
    },
  ];

  // Lumber products by category
  const lumberProducts = [
    {
      title: "Canadian SPF",
      description: [
        "Dimensions: 2x4-2x12 16' and Shorter (Including Special Trims)",
        "Grades: Econ - MSR, Including Premium",
        "Use: Ideal for General Construction and framing"
      ],
      icon: FaLeaf,
      mill: "Delco Forest Products",
      features: [
        "Kiln-dried for dimensional stability",
        "Consistent grading standards",
        "Sustainably harvested",
        "Excellent strength-to-weight ratio",
      ],
    },
    {
      title: "Southern Yellow Pine (SYP)",
      description: [
        "Dimensions: 2x4-2x12 20' and shorter",
        "Grades: #4 - MSR including DSS & SS",
        "Use: Structural applications"
      ],
      icon: FaTree,
      mill: "Group Crete",
      features: [
        "High density and strength",
        "Superior nail and screw holding",
        "Excellent for pressure treatment",
        "Ideal for structural applications",
      ],
    },
    {
      title: "Import Euro SPF",
      description: [
        "Dimensions: 2x4-2x12 8'-20'",
        "Grades: 2x4 & 2x6",
        "Use: Construction and industrial uses"
      ],
      icon: FaShip,
      mill: "Lulumco",
      features: [
        "Consistent quality and appearance",
        "Minimal warping and twisting",
        "Excellent workability",
        "Uniform texture and color",
      ],
    },
    {
      title: "Boards - EWP/SPF/SYP",
      description: [
        "Dimensions: 1x3-1x6 8'-16'",
        "Grades: All Grades",
        "Use: Trim, shelving, and craft projects"
      ],
      icon: FaWarehouse,
      mill: "Multiple Sources",
      features: [
        "Smooth finish options available",
        "Variety of widths and lengths",
        "Suitable for interior and exterior applications",
        "Excellent paintability and stainability",
      ],
    },
    {
      title: "KD Hem Fir / White Fir",
      description: [
        "Dimensions: 2x4-2x12 8'-26'",
        "Grades: Stud - Select Structural including Premium",
        "Use: Construction applications"
      ],
      icon: FaIndustry,
      mill: "Delco Forest Products",
      features: [
        "Excellent dimensional stability",
        "Consistent moisture content",
        "Good nail and screw holding",
        "Suitable for various construction applications",
      ],
    },
    {
      title: "Posts & Timbers",
      description: [
        "Dimensions: Rough Sawn 4x4-6x12 / S4S 4x4-6x6",
        "Grades: Green / KD Appearance",
        "Use: Structural applications"
      ],
      icon: FaTree,
      mill: "Group Crete",
      features: [
        "High load-bearing capacity",
        "Available in various dimensions",
        "Suitable for structural applications",
        "Options for interior and exterior use",
      ],
    },
  ];

  // SVG background pattern Data URI (same as contact page for consistency)
  const patternDataUri =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15'%3E%3Cpath d='M-1,1 l2,-2 M0,15 l15,-15 M14,16 l2,-2' stroke='%23e7e5e4' stroke-width='0.5'/%3E%3C/svg%3E";

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Parallax background */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-rose-900 to-rose-800"
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-4 transform transition-all duration-700 hover:rotate-12">
            <FaLeaf className="text-5xl md:text-6xl text-amber-200/80 mx-auto animate-pulse-subtle" />
          </div>

          <div className="relative inline-block mb-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-white text-shadow-lg relative z-10">
              Our Products
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-amber-300/40"></div>
          </div>

          <p className="text-lg md:text-xl text-amber-100/90 font-light max-w-3xl mx-auto leading-relaxed">
            Premium lumber sourced from trusted mills, carefully selected and graded for your construction projects
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-rose-900 mb-8 text-center font-serif">
            Our Lumber Products
          </h2>
          <p className="text-lg text-rose-800/80 max-w-3xl mx-auto text-center mb-12">
            We offer a comprehensive range of high-quality lumber products to
            meet diverse construction and manufacturing needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {lumberProducts.map((product, index) => (
              <div
                key={index}
                className="border-2 border-rose-800 bg-amber-50 flex flex-col"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Icon and Title Section */}
                  <div className="flex items-center mb-4">
                    <div className="bg-rose-100 p-3 rounded-full mr-4">
                      <product.icon className="text-rose-800 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-rose-900 uppercase tracking-wider font-mono">
                        {product.title}
                      </h3>

                    </div>
                  </div>
                  <div className="border-b-2 border-dashed border-rose-800/50 w-full mb-4" />

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

                  {/* Features Section */}
                  <div className="mt-2">
                    <h4 className="text-sm font-semibold text-rose-800 mb-2 uppercase tracking-wider">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheckCircle className="text-rose-700 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-stone-700 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button Section */}
                  <div className="mt-6 pt-4 border-t-2 border-dashed border-rose-800/50">
                    <Link href="/contact">
                      <button className="text-rose-800 hover:text-amber-100 border-2 border-rose-800 px-5 py-2 text-xs font-mono uppercase tracking-[.2em] hover:bg-rose-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-rose-100 focus:ring-rose-700 cursor-pointer">
                        Request Quote
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnered Sawmills Section - Dark Slate Grey Background */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Our Partnered Sawmills
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We maintain strong relationships with premier sawmills across
              North America, ensuring consistent quality and reliable supply for
              our customers.
            </p>
          </div>

          <div className="space-y-8">
            {partneredSawmills.map((mill, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-slate-700 rounded-lg overflow-hidden shadow-md border border-slate-600"
              >
                {/* Logo Section with Circular Background */}
                <div className="md:w-1/4 p-6 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-white flex items-center justify-center shadow-md">
                    <Image
                      src={mill.logo}
                      alt={`${mill.name} Logo`}
                      width={80}
                      height={80}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/4 p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-amber-400">
                      {mill.name}
                    </h3>
                    <p className="text-sm text-slate-400">{mill.location}</p>
                  </div>

                  <p className="text-slate-300 mb-4">{mill.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-amber-400 mb-2 uppercase">
                      Key Products:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {mill.products.map((product, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-600 text-slate-200 text-sm rounded border border-slate-500"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <button className="px-6 py-3 bg-amber-400 text-slate-900 font-semibold rounded hover:bg-amber-300 transition-colors">
                Partner With Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
