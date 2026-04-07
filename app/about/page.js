"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800">

      {/* HERO */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/aboutbg.jpg')] bg-cover bg-center scale-110"></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        >
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4">
            Bajrang Enterprises
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Powering your fitness journey with authentic supplements, trusted quality, and unbeatable prices.
          </p>
        </motion.div>
      </div>

      {/* ABOUT SECTION */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[350px] md:h-[450px]"
        >
          <Image
            src="/about.jpg"
            alt="about"
            fill
            className="object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who We Are
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Bajrang Enterprises is dedicated to providing genuine and high-quality supplements for fitness enthusiasts. We believe in transparency, trust, and delivering only the best products that support your health and performance.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From beginners to professionals, our mission is to empower every individual with the right nutrition at the right price.
          </p>
        </motion.div>

      </div>

      {/* STATS SECTION */}
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold">1000+</h3>
            <p className="text-gray-400">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-gray-400">Top Brands</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-gray-400">Genuine Products</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-gray-400">Support</p>
          </div>

        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 grid md:grid-cols-3 gap-8">

        {["Genuine Products", "Best Prices", "Fast Support"].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white p-6 rounded-3xl shadow-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-2">{item}</h3>
            <p className="text-gray-500 text-sm">
              We ensure the best experience with quality, affordability, and trust.
            </p>
          </motion.div>
        ))}

      </div>

      
      <div className="py-20 text-center bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Fitness Journey?
        </h2>

        <button
          onClick={() => {
            const msg = "Hello, I visited your website and I want to know more about your supplements";
            const url = `https://wa.me/919960366907?text=${encodeURIComponent(msg)}`;
            window.open(url, "_blank");
          }}
          className="bg-black px-8 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Contact on WhatsApp
        </button>
      </div>

    </div>
  );
}
