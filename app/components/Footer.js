"use client";

export default function Footer() {
  const handleWhatsApp = () => {
    const msg = "Hello, I want to know more about your supplements";
    const url = `https://wa.me/919960366907?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">

      
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

       
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Bajarang Enterprises
          </h2>
          <p className="text-sm">
          At Bajarang Enterprises, we offer genuine and high-quality supplements at affordable prices. Our goal is to provide trusted products that help you achieve your fitness goals without compromising your budget. Shop with confidence and experience the difference of real quality
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Protein</li>
            <li>Gainer</li>
            <li>Creatine</li>
            <li>Multivitamin</li>
            <li>Pre-Workout</li>
            <li>Protine-Oats</li>
          </ul>
        </div>


        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">📞 9960366907</p>
          <p className="text-sm mt-2">📍 Shivani Phata, Amarapur Vita-Karad Road, Maharastra</p>
          <p className="text-sm mt-2">📧 bajarangenterprises28@gmail.com</p>

          <button
            onClick={handleWhatsApp}
            className="mt-4 bg-green-500 px-4 py-2 text-sm rounded hover:bg-green-600 transition"
          >
            WhatsApp Us
          </button>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © 2026 Bajrang Enterprises | All Rights Reserved
      </div>

    </footer>
  );
}