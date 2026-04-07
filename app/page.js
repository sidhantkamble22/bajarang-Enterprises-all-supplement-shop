"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const slides = [
    {
      title: "Build Your Power",
      desc: "Premium Protein Supplements for Strength, Muscle Growth & Performance.",
      img: "/protine.jpg",
      product: "Whey Protein",
    },
    {
      title: "Want To Gain Weight",
      desc: "High Quality Gainer for Fast Weight Gain.",
      img: "/gainer.jpg",
      product: "1kg Gainer",
    },
    {
      title: "Increase Strength",
      desc: "Creatine for Power & Performance.",
      img: "/cretine.jpg",
      product: "Creatine",
    },
    {
      title: "Stay Healthy",
      desc: "Multivitamins for Daily Health & Immunity.",
      img: "/multivitamin.jpg",
      product: "Multivitamin",
    },
  ];

  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handleBuy = (product) => {
    const phone = "9960366907";
    const msg = `Hi, I want to buy ${product}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <>
    <div className="relative w-full flex flex-col md:flex-row items-center justify-center px-5 md:px-10 mt-4 md:mt-8 overflow-hidden min-h-[60vh] md:min-h-[70vh]">

      
      <div className="w-full md:w-1/2 text-black text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-orange-600">
          {slides[current].title}
        </h1>

        <p className="text-sm sm:text-base md:text-lg mb-6">
          {slides[current].desc}
        </p>

        <button
          onClick={() => handleBuy(slides[current].product)}
          className="bg-green-500 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg hover:bg-green-600 transition"
        >
          Buy on WhatsApp
        </button>
      </div>

      
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          key={slides[current].img}
          src={slides[current].img}
          alt="supplement"
          width={250}
          height={250}
          className="w-[180px] sm:w-[220px] md:w-[250px] h-auto transition-all duration-500"
        />
      </div>

      
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-xl md:text-3xl bg-white px-2 md:px-3 py-1 rounded-full shadow"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-xl md:text-3xl bg-white px-2 md:px-3 py-1 rounded-full shadow"
      >
        →
      </button>

      
      <div className="absolute bottom-4 md:bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer ${
              current === index ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
    <div className="section">
      <h1  className="text-3xl text-center justify-center sm:text-4xl md:text-5xl font-bold mb-4 text-orange-600">
        Build Muscle Without Breaking Your Budget</h1>
        <p className="text-sm sm:text-base md:text-lg mb-6 text-center justify-center underline">
          Bajaranga Enterprises
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-6 text-center justify-center ">
          Buy the Quality product in affordable price! we are providing all types of supplement in your near
          <br /> <span className="font-bold text-2xl">Order Now </span>
          <span className="text-green-600 font-bold text-lg hover:underline cursor-pointer">+9960366907</span>
        </p>

    </div>
     <hr />

     <div className="w-full px-5 md:px-10 mt-10">

  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
    Shop by Category
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

    
    <Link href="/protine">
  <div className="bg-white rounded-2xl shadow p-4 text-center cursor-pointer hover:scale-105 transition">
    <img src="/protine.jpg" className="w-24 h-26 mx-auto mb-2" />
    <p>Protein</p>
  </div>
</Link>
     
     <Link href="/gainer">
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden text-center p-4">
      <img src="/gainer.jpg" className="w-24 h-24 object-contain mx-auto mb-3" />
      <p className="font-semibold">Gainer</p>
    </div>
    </Link>
     
     <Link href="/cretine">
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden text-center p-4">
      <img src="/cretine.jpg" className="w-24 h-24 object-contain mx-auto mb-3" />
      <p className="font-semibold">Creatine</p>
    </div></Link>

     <Link href="/multivitamin">
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden text-center p-4">
      <img src="/multivitamin.jpg" className="w-24 h-24 object-contain mx-auto mb-3" />
      <p className="font-semibold">Multivitamin</p>
    </div></Link>
     
      <Link href="/preworkout">
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden text-center p-4">
      <img src="/preworkout.jpg" className="w-24 h-24 object-contain mx-auto mb-3" />
      <p className="font-semibold">Pre-Workout</p>
    </div></Link>

      <Link href="/oats">
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden text-center p-4">
      <img src="/ots.png" className="w-24 h-24 object-contain mx-auto mb-3" />
      <p className="font-semibold">Oats</p>
    </div></Link>

  </div>
</div>

<div className="w-full px-5 md:px-10 mt-10">

 

  <ul className="grid grid-cols-2 md:flex md:flex-wrap gap-x-10 gap-y-2 text-gray-800 list-disc pl-6">

    <li>MuscleBlaze</li>
    <li>Optimum Nutrition</li>
    <li>MyProtein</li>
    <li>MuscleTech</li>
    <li>GNC</li>
    <li>Dymatize</li>
    <li>BigMuscles</li>
    <li>Nutrabay</li>
    <li>Avvatar</li>
    <li>Nakpro</li>

  </ul>

</div>
    </>
  );
}