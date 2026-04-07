"use client";
import Link from "next/link";
import { ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-600">
          Bajarang <span className="text-black">Enterprises</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link href="/">Home</Link>
          
          
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        
        <div className="hidden md:flex items-center gap-4">
          <ShoppingCart className="cursor-pointer" />
          <User className="cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Menu onClick={() => setOpen(!open)} className="cursor-pointer" />
        </div>
      </div>

      
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 font-medium">
          <Link href="/">Home</Link>
     
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}
