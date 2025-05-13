"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaUsers,
  FaQuoteLeft,
  FaLinkedin,
  FaEnvelope,
  FaTree,
  FaLeaf,
  FaSeedling,
} from "react-icons/fa";

export default function OurTeam() {
  // State for parallax effect
  const [offset, setOffset] = useState(0);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Team member data with expanded details
  const teamMembers = [
    {
      name: "Roger Langevin",
      role: "Founder",
      image: "/roger.png",
      bio: "Roger hails from Quebec, Canada, and moved to the U.S. at 18. He served in the military during the Vietnam era, then worked his way through Syracuse University of New Hampshire, earning a Master's in Business and Forestry. His know-how in business and love for forestry have shaped him into a steady hand at LFP Inc., where he leads with practical wisdom.",
      icon: FaTree,
      specialty: "Business Strategy & Forestry",
      color: "from-emerald-700 to-emerald-900",
    },
    {
      name: "Chris Langevin",
      role: "President",
      image: "/chris.png",
      bio: "Chris grew up in the family business, learning the ropes early on. After getting his Bachelor's in Organizational Psychology, he joined LFP Inc. in 1994 and has been a key player ever since. He's a family guy through and through, married to his wife, Lisa, with two kids in college. When he's not working, you'll find him fishing with his son, Jake, or soaking up family time on vacation.",
      icon: FaSeedling,
      specialty: "Operations & Customer Relations",
      color: "from-amber-700 to-amber-900",
    },
    {
      name: "Lylee",
      role: "Sales Representative",
      image: "/lylee.png",
      bio: "Lylee jumped into the lumber world three years ago and joined LFP Inc. in August 2024. Working remotely from Portland, Oregon, she's quickly become a valued part of the Langevin crew. In her downtime, she's out hiking the trails or wandering the Oregon coast, soaking in the beauty of the Pacific Northwest.",
      icon: FaLeaf,
      specialty: "Sales & Client Development",
      color: "from-rose-700 to-rose-900",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      {/* --- Animated Wood Grain Background --- */}
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
          transform: `translateY(${offset * 0.2}px)`,
        }}
      ></div>

      {/* --- Hero Section with Parallax --- */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Parallax background */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-rose-900 to-rose-800"
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* No top decorative lines as requested */}

          <div className="mb-4 transform transition-all duration-700 hover:rotate-12">
            <FaUsers className="text-5xl md:text-6xl text-amber-200/80 mx-auto animate-pulse-subtle" />
          </div>

          {/* Header with decorative border */}
          <div className="relative inline-block mb-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-white text-shadow-lg relative z-10">
              Meet Our Team
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-amber-300/60"></div>
            <div className="absolute -bottom-5 left-10 right-10 h-0.5 bg-amber-200/40"></div>
          </div>

          <p className="text-lg md:text-xl text-amber-100/90 font-light max-w-3xl mx-auto leading-relaxed">
            The professionals behind Langevin Forest Products
          </p>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 space-y-32">
        {/* Team Introduction - Card Style */}
        <section className="relative">
          <div className="absolute inset-0 bg-rose-50/30 rounded-3xl transform -rotate-1 scale-105"></div>
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-rose-100">
            <h2 className="text-3xl md:text-4xl font-semibold font-serif text-rose-900 mb-6 inline-block relative">
              <span className="relative z-10">Our People</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-200/40 -z-0 transform -rotate-1"></span>
            </h2>
            <p className="text-lg text-rose-800/80 leading-relaxed">
              Our team combines decades of industry experience with fresh
              perspectives to provide exceptional service to our customers and
              mill partners.
            </p>
          </div>
        </section>

        {/* Team Members - Interactive Cards */}
        <section className="space-y-32">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative">
              {/* Background accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  member.color
                } rounded-3xl transform ${
                  index % 2 === 0 ? "rotate-1" : "-rotate-1"
                } scale-105 opacity-10`}
              ></div>

              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image section */}
                  <div
                    className={`relative h-96 md:h-auto ${
                      index % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent z-10"></div>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition:
                          member.name === "Roger Langevin"
                            ? "center 42%"
                            : "center 35%",
                      }}
                      className="transition-transform duration-500 hover:scale-110"
                    />

                    {/* Overlay with name and role */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
                      <h2 className="text-3xl font-bold text-white mb-1">
                        {member.name}
                      </h2>
                      <p className="text-xl font-medium text-amber-200">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Content section */}
                  <div
                    className={`p-8 md:p-12 space-y-6 flex flex-col justify-center ${
                      index % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-br ${member.color} text-white`}
                      >
                        <member.icon className="text-2xl" />
                      </div>
                      <span className="text-lg font-medium text-rose-800">
                        {member.role}
                      </span>
                    </div>

                    <div className="relative pl-8 pt-2">
                      <FaQuoteLeft className="absolute top-0 left-0 text-2xl text-rose-300" />
                      <p className="text-lg leading-relaxed text-gray-700">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Team Values - Interactive Card */}
        <section className="relative my-32 transform hover:scale-[1.01] transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-rose-100 rounded-3xl transform rotate-1 scale-105"></div>
          <div className="relative bg-white rounded-2xl shadow-xl p-12 md:p-16 text-center border border-amber-200">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-rose-600 to-amber-600 rounded-full flex items-center justify-center mb-8">
              <FaUsers className="text-3xl text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold font-serif text-rose-900 mb-6">
              Working Together
            </h2>
            <p className="text-lg text-rose-800/80 leading-relaxed max-w-3xl mx-auto">
              At Langevin Forest Products, we believe in the power of teamwork,
              expertise, and personal connection. Our collective industry
              knowledge and shared commitment to excellence allow us to provide
              unparalleled service in the lumber wholesale industry.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
