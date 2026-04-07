"use client";
import Image from "next/image";
import { useState } from "react";
export default function cretine() {
  const [search, setSearch] = useState("");

  const products = [
    {
      name: "MuscleBlaze Monohydrete Creatine",
      
      img: "/cretine/mb-cretine.jpg",
    },
    {
      name: "AS-IT-IS ATOM Creatine Monohydrate",
      
      img: "/cretine/atom-cretine.jpg",
    },
    {
      name: "avvatar Micronized Creatine Monohydrate Powde",
      
      img: "/cretine/avtar-cretine.jpg",
    },
    
    {
      name: "BeastLife Micronised Creatine Monohydrate Powder Watermelon ",
     
      img: "/cretine/bestlife-cretine.jpg",
    },
    {
      name: "Bigmuscles Nutrition Creatine| Blueberry | Micronized",
      
      img: "/cretine/bigmuscle-cretine.jpg",
    },
    {
      name: "GNC Pro Performance Creatine Monohydrate ",
     
      img: "/cretine/gnc-cretine.jpg",
    },
    {
      name: "MuscleTech Platinum Creatine Monohydrate Powder",
     
      img: "/cretine/muscletech-cretine.jpg",
    },
    {
      name: "NAKPRO Micronized Creatine Monohydrate Powder",
      
      img: "/cretine/nakpro-cretine.jpg",
    },
   
    {
      name: "Nutrabay Gold Micronized Creatine Monohydrate",
      
      img: "/cretine/nutriby-cretine.jpg",
    },
    {
      name: "Nutrition Planet Micronized Creatine Monohydrate Powde",
     
      img: "/cretine/nutrition-planet.jpg",
    },
     {
      name: "Optimum Nutrition Micronized Creatine Monohydrate Powder",
      
      img: "/cretine/optinutrition-cretine.jpg",
    },
    {
      name: "Ronnie Coleman Signature Series Creatine XS, Unflavoured",

      img: "/cretine/ronnycolman.jpg",
    },
    {
      name: "Ripped Up Nutrition Creatine Monohydrate",
     
      img: "/cretine/run-cretine.jpg",
    },
    {
      name: "TATA 1MG Creatine Monohydrate | 100% Pure, Micronized",
     
      img: "/cretine/tata-cretine.jpg",
    },
    {
      name: " Wellcore Pure Micronised Creatine Powde",
     
      img: "/cretine/wellcore-cretine.jpg",
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
        <div className="absolute inset-0 bg-[url('/cretinebanner.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Boost Your Strength, Power, and Performance with Premium Creatine
          </h1>

          <p className="text-gray-200 text-sm md:text-lg max-w-xl">
           Advanced creatine supplements to maximize power, endurance, and muscle efficiency.
          </p>
        </div>
      </div>

     
      <div className="px-5 md:px-10 py-10">

        <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search Creatine..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
         Creatine Products
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