"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function ContactUs() {
  // State for form inputs
  // Test
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitSuccess(true);
      // Clear form after successful submission
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      setSubmitError(
        error.message || "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // SVG background pattern Data URI
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-rose-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            We're here to answer any questions you may have about our products
            and services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-stone-50 p-8 rounded-lg shadow-sm border border-stone-200 h-full">
                {/* Logo */}
                <Link href="/" className="inline-block mb-6">
                  <Image
                    src="/logo.svg"
                    alt="Langevin Forest Products Logo"
                    width={200}
                    height={67}
                    className="mb-2"
                  />
                </Link>

                <h2 className="text-2xl font-semibold text-rose-900 mb-6">
                  Business Information
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaMapMarkerAlt className="h-6 w-6 text-rose-800" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-stone-800">
                        Address
                      </h3>
                      <p className="mt-1 text-stone-600 leading-relaxed">
                        P.O. Box 428
                        <br />
                        Sterling, MA 01564
                      </p>
                    </div>
                  </div>


                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaEnvelope className="h-6 w-6 text-rose-800" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-stone-800">
                        Email
                      </h3>
                      <p className="mt-1">
                        <a
                          href="mailto:sales@langevinfp.com"
                          className="text-stone-600 hover:text-rose-800 transition-colors"
                        >
                          contact@langevinfp.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaClock className="h-6 w-6 text-rose-800" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-stone-800">
                        Business Hours
                      </h3>
                      <p className="mt-1 text-stone-600">
                        Monday - Friday: 8:00 AM - 5:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-rose-900 mb-4 font-mono tracking-wider uppercase">
                    Quick Links
                  </h3>
                  <nav className="space-y-3">
                    <Link
                      href="/lumber-products"
                      className="block text-base hover:text-rose-800 transition-colors"
                    >
                      Lumber Products
                    </Link>
                    <Link
                      href="/about-us"
                      className="block text-base hover:text-rose-800 transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/our-team"
                      className="block text-base hover:text-rose-800 transition-colors"
                    >
                      Our Team
                    </Link>
                  </nav>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
                <h2 className="text-2xl font-semibold text-rose-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-stone-600 mb-8">
                  Please fill out the form below and we'll get back to you as
                  soon as possible.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg mb-8">
                  <p className="text-lg font-semibold text-amber-800">
                    Kindly Note: We supply lumber by the truckload or carload only
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-stone-700 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-stone-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-rose-800 focus:border-rose-800 bg-white placeholder-stone-400"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-stone-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-stone-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-rose-800 focus:border-rose-800 bg-white placeholder-stone-400"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 border border-stone-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-rose-800 focus:border-rose-800 bg-white placeholder-stone-400"
                      placeholder="Your Phone Number"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 border border-stone-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-rose-800 focus:border-rose-800 bg-white placeholder-stone-400 resize-vertical"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                      <p className="font-medium">Error: {submitError}</p>
                    </div>
                  )}

                  {/* Success Message */}
                  {submitSuccess && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                      <p className="font-medium">
                        Thank you for your message! We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full md:w-auto px-8 py-3 rounded-md text-base font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-rose-700 ${
                        isSubmitting
                          ? "bg-stone-400 text-white cursor-not-allowed"
                          : "bg-rose-800 text-white hover:bg-rose-900"
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Copyright */}
      <section className="py-8 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-stone-600">
            © {new Date().getFullYear()} Langevin Forest Products, Inc. All
            rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
