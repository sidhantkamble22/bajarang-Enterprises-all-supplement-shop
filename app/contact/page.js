"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const msg = `Hello, my name is ${name}. I am interested in ${product}. ${message}`;
    const url = `https://wa.me/919960366907?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* HERO */}
      <div className="text-center py-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide"
        >
          Contact Bajrang Enterprises
        </motion.h1>

        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Premium supplements. Trusted service. Direct support for your fitness journey.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 pb-20">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {[{
            title: "Phone",
            value: "9960366907",
            icon: "📞",
          },
          {
            title: "Email",
            value: "bajarangenterprises28@gmail.com",
            icon: "📧",
          },
          {
            title: "Owner",
            value: "Sagar Sanjay Shejale",
            
          },
          {
            title: "Management",
            value: "Kaustubh Sanjay Shejale",
            
          }].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-orange-500/20 transition"
            >
              <h3 className="text-xl font-bold mb-1">{item.icon} {item.title}</h3>
              <p className="text-gray-300">{item.value}</p>
            </motion.div>
          ))}

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-5 rounded-xl text-center border border-orange-400/20">
              <h3 className="text-3xl font-bold">1000+</h3>
              <p className="text-gray-400 text-sm">Happy Customers</p>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-5 rounded-xl text-center border border-green-400/20">
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-gray-400 text-sm">Top Brands</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Send Message </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-black/40 border border-gray-600 outline-none focus:border-orange-400"
            />

            <input
              type="text"
              placeholder="Product (e.g. Whey Protein)"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full p-3 rounded-lg bg-black/40 border border-gray-600 outline-none focus:border-orange-400"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-lg bg-black/40 border border-gray-600 outline-none focus:border-orange-400"
            ></textarea>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg shadow-green-500/30"
            >
              Send via WhatsApp 💬
            </button>

          </div>
        </motion.div>

      </div>

      {/* FLOATING BUTTON */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full shadow-xl hover:scale-110 transition"
      >
        💬
      </button>

    </div>
  );
}
