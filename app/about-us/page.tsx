"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaQuoteLeft,
  FaEnvelope,
  FaBuilding,
  FaChevronRight,
  FaHandshake,
  FaCheckCircle,
  FaBalanceScale,
  FaSeedling,
  FaBullseye, // For Product Solutions
  FaTruck, // For Logistics
  FaStar, // For Customer Service
  FaChartLine, // For Market Intelligence
} from "react-icons/fa";

export default function AboutUs() {
  // Array of portrait images for Chris Langevin
  const chrisPortraits = [
    "/portrait-1.png",
    "/portrait-2.png",
    "/portrait-3.png",
    "/portrait-4.png",
  ];

  // Define Core Values
  const coreValues = [
    {
      icon: FaHandshake,
      title: "Partnership",
      description:
        "Building strong, lasting relationships with both mills and customers.",
    },
    {
      icon: FaCheckCircle,
      title: "Integrity",
      description:
        "Operating with honesty and transparency in every transaction.",
    },
    {
      icon: FaBalanceScale,
      title: "Reliability",
      description:
        "Consistently delivering quality products and dependable market insights.",
    },
    {
      icon: FaSeedling,
      title: "Market Expertise",
      description:
        "Leveraging deep industry knowledge to connect the right products with the right needs.",
    },
  ];

  // Define "Why Choose Us" points
  const whyChooseUs = [
    {
      icon: FaChartLine,
      title: "Market\nIntelligence",
      description:
        "Deep understanding of market trends, pricing, and availability to guide your purchasing decisions.",
    },
    {
      icon: FaBullseye,
      title: "Product\nSolutions",
      description:
        "Expertise in sourcing the specific lumber grades and species required for your unique projects.",
    },
    {
      icon: FaTruck,
      title: "Logistics\nManagement",
      description:
        "Efficient coordination of transportation and inventory through strategic reload locations across Canada and the Eastern US.",
    },
    {
      icon: FaStar,
      title: "Outstanding\nService",
      description:
        "Dedicated customer support focused on responsiveness, reliability, and building long-term trust.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-stone-50 via-amber-50/50 to-white min-h-screen overflow-x-hidden">
      {/* --- Hero Section --- */}
      <div className="relative text-center py-24 md:py-32 px-4 bg-gradient-to-r from-rose-900 to-rose-800 text-white overflow-hidden">
        <div className="relative z-10">
          <FaBuilding className="text-5xl md:text-6xl text-amber-200/80 mx-auto mb-6 animate-pulse-subtle" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight text-shadow-md">
            About Langevin Forest Products
          </h1>
          <p className="text-xl md:text-2xl text-amber-100/90 font-light max-w-4xl mx-auto leading-relaxed">
            A trusted lumber wholesaler since 1984, connecting North American
            mills with lumber yards, truss manufacturers, and industrial users.
          </p>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 space-y-24">
        {/* Section 1: Who We Are & What We Do */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6 text-lg text-rose-900/90">
            <h2 className="text-3xl font-semibold font-serif text-rose-900 mb-4 border-l-4 border-rose-700 pl-3">
              Connecting Mills & Markets
            </h2>
            <p className="leading-relaxed font-medium">
              Langevin Forest Products Inc. operates as a dedicated lumber
              wholesaler, serving as a vital link in the supply chain. We
              specialize in bridging the gap between high-quality North American
              lumber mills and a diverse customer base.
            </p>
            <p className="leading-relaxed">
              Our strength lies in fostering strong relationships. We are proud
              to hold exclusive sales representation for{" "}
              <span className="font-semibold text-rose-800">
                Delco Forest Products
              </span>
              . Additionally, we maintain key partnerships with{" "}
              <span className="font-semibold text-rose-800">Group Crete</span>{" "}
              and <span className="font-semibold text-rose-800">Lulumco</span>,
              and collaborate with a wide variety of mills specializing in
              Eastern species. This network allows us to offer a comprehensive
              range of products and ensure reliable supply for our clients.
            </p>
            <p className="leading-relaxed">
              Utilizing reload locations throughout Canada and the Eastern US,
              we manage logistics effectively to meet the needs of lumber yards,
              truss manufacturers, and various industrial users.
            </p>
            <div className="mt-6 pt-4 border-t border-dashed border-rose-300">
              <Link
                href="/lumber-products"
                className="inline-flex items-center text-rose-700 hover:text-rose-900 transition-all duration-300 group font-medium"
              >
                <FaChevronRight className="mr-2 text-xs transition-transform group-hover:scale-110" />
                <span>View Our Products</span>
              </Link>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-rose-200">
            <Image
              src="/about-us.jpg"
              alt="Langevin Forest Products Operations"
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = chrisPortraits[0];
                e.currentTarget.alt = "Christopher Langevin, President";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 opacity-70"></div>
          </div>
        </section>

        {/* Section 2: Why Choose Us? */}
        <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-white rounded-xl shadow-lg border border-amber-200">
          <h2 className="text-3xl font-semibold font-serif text-rose-900 mb-12 text-center">
            Why Partner With Langevin?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-4 rounded-lg ">
                <div className="mb-4 inline-flex justify-center items-center w-16 h-16 rounded-full bg-rose-100 text-rose-700 shadow-sm">
                  <item.icon className="text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-rose-900 mb-2 font-mono tracking-wide whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="text-base text-rose-800/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Core Values */}
        <section className="py-20 px-6 bg-rose-50/50 rounded-xl shadow-lg border border-rose-200">
          <h2 className="text-3xl font-semibold font-serif text-rose-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex justify-center items-center w-16 h-16 rounded-full bg-rose-100 text-rose-700">
                  <value.icon className="text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-rose-900 mb-2 font-mono tracking-wide">
                  {value.title}
                </h3>
                <p className="text-base text-rose-800/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Guiding Quote (Chris) */}
        <section className="py-20 bg-amber-50 rounded-xl shadow-xl border border-amber-200 text-center px-6 relative overflow-hidden">
          <FaQuoteLeft className="absolute top-6 left-8 text-8xl text-rose-800/5 transform -translate-x-2 -translate-y-2" />
          <FaQuoteLeft className="absolute bottom-4 right-6 text-7xl text-rose-800/10 transform translate-x-2 translate-y-2 rotate-180" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-24 h-24 mb-6 mx-auto overflow-hidden rounded-full border-4 border-rose-200 shadow-md">
              <Image
                src={chrisPortraits[1]}
                alt="Chris Langevin"
                width={96}
                height={96}
                style={{ objectFit: "cover", objectPosition: "center" }}
                onError={(e) => {
                  e.currentTarget.src = "/placeholder-portrait.png";
                  e.currentTarget.alt = "Placeholder Portrait";
                }}
              />
            </div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-amber-950/90 mb-6 leading-snug border-l-4 border-r-4 border-amber-700/50 px-6 py-4 inline-block bg-white/30 rounded">
              "Our success comes from knowing both our mills and our customers.
              That's what we've done since 1984."
            </blockquote>
            <p className="text-xl font-semibold tracking-wide uppercase text-rose-800/90">
              — Chris Langevin, President
            </p>
          </div>
        </section>

        {/* Section 5: Our History & Leadership */}
        <section>
          <h2 className="text-3xl font-semibold font-serif text-rose-900 mb-12 text-center">
            Our History & Leadership
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-rose-900/90 space-y-6 mb-12 text-center">
            <p className="leading-relaxed">
              Langevin Forest Products Inc. was established in 1984 through a
              partnership between Moose River Lumber of Maine and Roger
              Langevin. After Moose River Lumber's acquisition by a paper
              company, Roger assumed full ownership, bringing his unique blend
              of experience to the helm. A Vietnam-era veteran fluent in French,
              Roger holds degrees in forestry and business from Syracuse and New
              Hampshire universities, respectively, and gained foundational
              industry experience at Furman Lumber (now Boisie Cascade) starting
              in 1979.
            </p>
            <p className="leading-relaxed">
              The company entered a new chapter in 1994 when Christopher
              Langevin, Roger's son, joined after graduating from Worcester
              State University. Christopher was pivotal in strategically
              shifting LFP Inc.'s focus from purely wholesale operations towards
              direct mill representation. This evolution allowed the company to
              forge deeper, more exclusive relationships with key suppliers like
              Delco Forest Products, Group Crete, and Lulumco, enhancing our
              ability to offer tailored solutions and reliable supply chains to
              our customers across North America.
            </p>
            <p className="leading-relaxed italic">
              Today, under Chris's leadership, LFP continues to build upon the
              legacy established by Roger, prioritizing market knowledge, strong
              partnerships, and unwavering commitment to customer success.
            </p>
          </div>
          {/* Leadership Gallery (Can be kept or simplified) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {chrisPortraits.map((portraitUrl, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-md overflow-hidden shadow-md border border-rose-100 transition-transform duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <Image
                  src={portraitUrl}
                  alt={`Christopher Langevin - Portrait ${index + 1}`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder-portrait.png";
                    e.currentTarget.alt = "Placeholder Portrait";
                  }}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity delay-100 px-2 text-center">
                    Chris Langevin
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            {" "}
            {/* Increased margin */}
            <Link
              href="/contact"
              className="inline-flex items-center text-rose-700 hover:text-rose-900 transition-all duration-300 group font-medium text-lg border-b-2 border-rose-700/50 hover:border-rose-700 pb-1" // Added border styling
            >
              <FaEnvelope className="mr-2 transition-transform group-hover:scale-110" />
              <span>Connect With Us Today</span>
              <FaChevronRight className="ml-2 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
