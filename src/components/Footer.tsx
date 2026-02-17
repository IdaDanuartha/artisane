"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Palette, Brain, Heart, Mail, MapPin, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    title: "Fitur",
    links: [
      { label: "Smart Pricing", href: "/pricing", icon: TrendingUp },
      { label: "Brand Identity", href: "/branding", icon: Palette },
      { label: "How AI Works", href: "/how-it-works", icon: Brain },
    ],
  },
  {
    title: "Teknologi",
    links: [
      { label: "Gemini 2.5 Flash", href: "https://ai.google.dev", icon: Sparkles, external: true },
      { label: "Computer Vision", href: "/how-it-works", icon: Brain },
      { label: "NLP Analysis", href: "/how-it-works", icon: Brain },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#E5DDD3] bg-[#F5F0EB]">
      {/* Subtle top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-[#E5DDD3]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 group mb-4">
              <motion.div
                className="p-2 rounded-xl bg-[#5C3D2E] shadow-lg shadow-[#5C3D2E]/15"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-bold text-[#5C3D2E]">
                Artisane
              </span>
            </Link>
            <p className="text-[#6B6B6B] text-sm leading-relaxed mt-3 max-w-xs">
              AI Business Co-Founder untuk pengrajin lokal Indonesia. Transformasi produk kerajinan menjadi brand profesional.
            </p>
            <div className="flex items-center gap-2 mt-4 text-[#9B9B9B] text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Bali, Indonesia</span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={"external" in link ? "_blank" : undefined}
                      rel={"external" in link ? "noopener noreferrer" : undefined}
                      className="group/link flex items-center gap-2 text-[#6B6B6B] hover:text-[#5C3D2E] transition-colors text-sm"
                    >
                      <link.icon className="w-3.5 h-3.5 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                      <span>{link.label}</span>
                      {"external" in link && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-50 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact / Info */}
          <div>
            <h3 className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider mb-4">
              Info
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@artisane.id"
                  className="group/link flex items-center gap-2 text-[#6B6B6B] hover:text-[#5C3D2E] transition-colors text-sm"
                >
                  <Mail className="w-3.5 h-3.5 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                  <span>hello@artisane.id</span>
                </a>
              </li>
              <li className="pt-2">
                <div className="p-3 rounded-xl bg-white border border-[#E5DDD3]">
                  <p className="text-xs text-[#9B9B9B] mb-1">Powered by</p>
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4 text-[#5C3D2E]" />
                    </motion.div>
                    <span className="text-sm font-medium text-[#1A1A1A]">
                      Google Gemini AI
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#E5DDD3]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#9B9B9B] text-sm text-center sm:text-left">
              © {currentYear} Artisane. All rights reserved.
            </p>
            <motion.p
              className="flex items-center gap-1.5 text-[#9B9B9B] text-sm flex-wrap justify-center"
              whileHover={{ scale: 1.05 }}
            >
              Made with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-3.5 h-3.5 text-[#A67B5B] fill-[#A67B5B]" />
              </motion.span>
              untuk pengrajin Indonesia
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
