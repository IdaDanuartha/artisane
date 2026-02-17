"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, TrendingUp, Palette, Home, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";


const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/pricing", label: "Smart Pricing", icon: TrendingUp },
  { href: "/branding", label: "Brand Identity", icon: Palette },
  { href: "/how-it-works", label: "How AI Works", icon: Brain },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#FDFBF7]/95 backdrop-blur-xl border-b border-[#E5DDD3] shadow-sm"
          : "bg-[#FDFBF7]/60 backdrop-blur-md border-b border-transparent"
      )}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div
              className="p-2 rounded-xl bg-[#5C3D2E] shadow-lg shadow-[#5C3D2E]/15"
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
            <motion.span
              className="text-xl font-bold text-[#5C3D2E]"
              whileHover={{ scale: 1.05 }}
            >
              Artisane
            </motion.span>
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    className={cn(
                      "relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                      isActive
                        ? "text-[#5C3D2E]"
                        : "text-[#6B6B6B] hover:text-[#1A1A1A]"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-[#5C3D2E]/10 rounded-xl"
                        layoutId="activeNav"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <item.icon className="w-4 h-4 relative z-10" />
                    <span className="hidden sm:inline relative z-10">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
