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

export default function Products() {
  // Array of partnered sawmills with details
  const partneredSawmills = [
    {
      name: "Delco Forest Products",
      logo: "/partner-3.png", // Delco logo
      description:
        "Exclusive sales representation. Specializing in premium Eastern SPF lumber with a focus on consistent quality and reliable supply.",
      location: "Quebec, Canada",
      products: [
        "2x3 - 2x12 SPF",
        "Premium Framing Lumber",
        "Kiln-Dried Products",
      ],
    },
    {
      name: "Group Crete",
      logo: "/partner-2.png", // Replace with actual logo
      description:
        "Key partnership offering a wide range of dimensional lumber products with exceptional grading standards.",
      location: "Eastern Canada",
      products: [
        "Dimensional Lumber",
        "SPF Products",
        "Construction-Grade Materials",
      ],
    },
    {
      name: "Lulumco",
      logo: "/partner-1.png", // Lulumco logo
      description:
        "Long-standing partnership providing high-quality lumber products from sustainable forest management practices.",
      location: "Quebec, Canada",
      products: ["Premium SPF Lumber", "Specialty Cuts", "Custom Dimensions"],
    },
  ];

  // Lumber products by category
  const lumberProducts = [
    {
      title: "Canadian SPF",
      grade: "Various Dimensions",
      description:
        "Available in 2x4-2x12, 2x3-2x12, and 2x4-2x6 sizes. Ideal for general construction and framing.",
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
      grade: "Various Grades & Dimensions",
      description:
        "Strong and dense pine available in 2x4-2x12 sizes across multiple grades for structural applications.",
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
      grade: "2x4 & 2x6 Dimensions",
      description:
        "European Spruce-Pine-Fir suitable for construction and industrial uses.",
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
      grade: "1x3, 1x4, 1x6 Dimensions",
      description:
        "Versatile boards in Eastern White Pine, SPF, and SYP for trim, shelving, and craft projects.",
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
      grade: "2x4-2x12 Dimensions",
      description:
        "Kiln-Dried Hemlock-Fir and White Fir lumber, known for stability and strength in construction.",
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
      grade: "Rough Sawn & S4S Options",
      description:
        "Heavy-duty posts and timbers available in Rough Sawn for a rustic look or S4S (Surfaced Four Sides) for a smooth finish.",
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
      <section
        className="bg-stone-100 py-16 border-b border-stone-200"
        style={{
          backgroundImage: `url("${patternDataUri}")`,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Premium quality lumber sourced from sustainable forests, carefully
            selected and graded for your construction projects
          </p>
        </div>
      </section>

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
                      <p className="text-rose-900/80 text-sm font-semibold font-mono mt-1">
                        {product.grade}
                      </p>
                    </div>
                  </div>

                  {/* Mill Source */}
                  <div className="mb-4 pb-4 border-b-2 border-dashed border-rose-800/50">
                    <p className="text-sm text-rose-700">
                      <strong>Source:</strong> {product.mill}
                    </p>
                  </div>

                  {/* Description Section */}
                  <p className="text-rose-800 mb-6 flex-grow text-base leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features Section */}
                  <div className="mt-4">
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
                  <div className="mt-auto pt-4 border-t-2 border-dashed border-rose-800/50">
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
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } bg-slate-700 rounded-lg overflow-hidden shadow-md border border-slate-600`}
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
