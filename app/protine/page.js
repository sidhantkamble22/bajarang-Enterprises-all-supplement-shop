"use client";
import Image from "next/image";
import { useState } from "react";
export default function gainer() {
  const [search, setSearch] = useState("");

  const products = [
    {
      name: "MuscleBlaze Biozyme Performance Whey",
      
      img: "/protine/mbprotine.jpg",
    },
    {
      name: "GNC Pro performence 100% whey",
      
      img: "/protine/gnc-protine.jpg",
    },
    {
      name: "Muscle Tech  Nitro tech whey protein",
      
      img: "/protine/muscletech-protine.jpg",
    },
    
    {
      name: "MuscleBlaze Whey Gold,100% Isolated ",
     
      img: "/protine/goldway-protine.jpg",
    },
    {
      name: "NAKPRO impact whey protein",
      
      img: "/protine/nakpro-protine.jpg",
    },
    {
      name: "nutriby gold 100%  whey",
     
      img: "/protine/nutriby-protine.jpg",
    },
    {
      name: "optimum nutrition gold standard wheyy",
     
      img: "/protine/protine.jpg",
    },
    {
      name: "Nutrition RUN 100% Isolated Whey",
      
      img: "/protine/run-protine.jpg",
    },
   
    {
      name: "Big Muscles Premium Gold Whey Protein",
      
      img: "/protine/goldwaybig.jpg",
    },
    {
      name: "GNC Pro Performance Beginner's Protein |",
     
      img: "/protine/gnc-beginer-protine.jpg",
    },
     {
      name: "Labrada 100% Whey Protein",
      
      img: "/protine/labrada-protine.jpg",
    },
    {
      name: "Dymatize Elite 100% Whey Protein",
      
      img: "/protine/dytmize-protine.jpg",
    },
    {
      name: "Nitric Whey Protein | 27g Whey Protein Isolate | Lean Muscle",
     
      img: "/protine/big-muscle-protine.jpg",
    },
    {
      name: "avvatar WHEY PROTEIN | 1Kg | Belgian Chocolate Flavour | 24g",
     
      img: "/protine/avtar-protine.jpg",
    },
    {
      name: " Nutrition ATOM Whey",
     
      img: "/protine/atom-protine.jpg",
    },
    {
      name: "YourWhey 100% Whey Protein",
     
      img: "/protine/wh.jpg",
    },
    {
      name: "Getmymettle Alpha Whey Protein Powder, Belgian Chocolate",
      
      img: "/protine/alfa.jpg",
    },
    
    {
      name: "Nitra Isolate | 32g Isolate Whey Protein for Lean Muscle",
      
      img: "/protine/nitra.jpg",
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
        <div className="absolute inset-0 bg-[url('/protinebg.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Complete Your Daily Protein Needs 
          </h1>

          <p className="text-gray-200 text-sm md:text-lg max-w-xl">
            High-quality protein supplements to support muscle growth, recovery, and performance.
          </p>
        </div>
      </div>

     
      <div className="px-5 md:px-10 py-10">

        <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search protein..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Protein Products
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