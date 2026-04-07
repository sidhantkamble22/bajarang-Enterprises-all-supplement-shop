"use client";
import Image from "next/image";
import { useState } from "react";
export default function oats() {
  const [search, setSearch] = useState("");

  const products = [
    {
      name: "Alpino High Protein Super Rolled Oats Chocolate",
      
      img: "/oats/alpjino-oats.jpg",
    },
    {
      name: "Doctor's Choice Chocolate Protein Oats",
      
      img: "/oats/drchoice-oats.jpg",
    },
    {
      name: "MuscleBlaze Fit High Protein Oats",
      
      img: "/oats/mb-oats.jpg",
    },
    
    {
      name: "High Protein Health Ninja Dark Chocolate Oats ",
     
      img: "/oats/ninjadarkchocolate-oats.jpg",
    },
    {
      name: "nutrabay.com High Protein Oats",
      
      img: "/oats/nutraby-oats.jpg",
    },
    {
      name: "PRO.FITNESS 27g High Protein Oats 900g (By MyFitness)",
     
      img: "/oats/profitness-oats.jpg",
    },
    {
      name: "Yogabar 26g High Protein Oats 1kg , Dark Chocolate",
     
      img: "/oats/yogabar-oats.jpg",
    },
    
    
  ];



  const handleBuy = (product) => {
    const msg = `Hi, I visited your website and I want to buy ${product}`;
    const url = `https://wa.me/919960366907?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };
    const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      
      <div className="w-full h-[45vh] md:h-[60vh] relative">
        <div className="absolute inset-0 bg-[url('/oatsbg.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Start Your Day Right with Healthy & Nutritious Oats.
          </h1>

          <p className="text-gray-200 text-sm md:text-lg max-w-xl">
          High-quality oats packed with fiber, energy, and essential nutrients.
          </p>
        </div>
      </div>

     
      <div className="px-5 md:px-10 py-10">

        <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search Protine-Oats..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Protine-Oats Products
        </h2>

         <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow text-center">

              <div className="relative w-24 h-24 mx-auto mb-2">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>

              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>

              <button
                onClick={() => handleBuy(item.name)}
                className="mt-2 w-full bg-green-500 text-white py-2 rounded"
              >
                Buy
              </button>

            </div>
          ))
        ) : (
          <p className="text-center text-2xl col-span-full text-gray-500">
            No products found 
          </p>
        )}


        </div>

      </div>
    </>
  );
}