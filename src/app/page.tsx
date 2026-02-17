"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Palette, Sparkles, ArrowRight, Zap, Target, Users, Brain, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: TrendingUp,
    title: "Smart Pricing",
    description: "AI menganalisis foto produk dan memberikan rekomendasi harga berdasarkan market insight.",
    href: "/pricing",
    bgColor: "bg-[#5C3D2E]",
    shadowColor: "shadow-[#5C3D2E]/10",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Transformasi produk kerajinan menjadi brand profesional dengan nama, tagline, dan color palette.",
    href: "/branding",
    bgColor: "bg-[#A67B5B]",
    shadowColor: "shadow-[#A67B5B]/10",
  },
];

const benefits = [
  { icon: Zap, text: "Analisis dalam hitungan detik" },
  { icon: Target, text: "Strategi pricing berbasis data" },
  { icon: Users, text: "Positioning untuk target pasar tepat" },
];

const stats = [
  { icon: Brain, value: "AI Powered", label: "Gemini 2.5 Flash" },
  { icon: Rocket, value: "< 10 detik", label: "Waktu analisis" },
  { icon: Shield, value: "100%", label: "Privasi terjaga" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#A67B5B]/8 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8C7B6B]/8 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-64 h-64 bg-[#C9B69C]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5C3D2E]/10 border border-[#5C3D2E]/20 mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-[#5C3D2E]" />
            </motion.div>
            <span className="text-sm text-[#5C3D2E]">Powered by Gemini AI</span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#5C3D2E]">
              AI Business Co-Founder
            </span>
            <br />
            <span className="text-[#1A1A1A]">untuk Pengrajin Lokal</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-xl text-[#6B6B6B] max-w-2xl mx-auto mb-10 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transformasi produk kerajinan Anda menjadi brand profesional dengan
            analisis pricing cerdas dan brand identity yang kuat.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/pricing">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-[#5C3D2E] hover:bg-[#4A2E1F] text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#5C3D2E]/15"
                >
                  Mulai Analisis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
            <Link href="/branding">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#E5DDD3] hover:bg-[#F5F0EB] text-[#5C3D2E] px-8 py-6 text-lg rounded-xl"
                >
                  Buat Brand Identity
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 text-[#6B6B6B]"
              variants={itemVariants}
              whileHover={{ scale: 1.05, color: "#5C3D2E" }}
            >
              <div className="p-2 rounded-lg bg-[#5C3D2E]/10">
                <benefit.icon className="w-5 h-5 text-[#5C3D2E]" />
              </div>
              <span className="font-medium">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 rounded-2xl bg-white border border-[#E5DDD3] shadow-sm"
              whileHover={{ scale: 1.05, borderColor: "#C9B69C" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon className="w-8 h-8 text-[#5C3D2E] mx-auto mb-3" />
              <p className="text-lg sm:text-2xl font-bold text-[#1A1A1A] mb-1">{stat.value}</p>
              <p className="text-sm text-[#9B9B9B]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Fitur Utama</h2>
          <p className="text-[#6B6B6B] max-w-xl mx-auto">
            Dua fitur powerful yang dirancang khusus untuk membantu pengrajin lokal berkembang
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Link href={feature.href}>
                <motion.div
                  className={`group p-8 rounded-3xl bg-white border border-[#E5DDD3] transition-all duration-500 hover:border-[#C9B69C] ${feature.shadowColor} hover:shadow-xl`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl ${feature.bgColor} mb-6 shadow-lg`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#5C3D2E] transition-colors text-[#1A1A1A]">
                    {feature.title}
                  </h3>
                  <p className="text-[#6B6B6B] mb-6 text-lg">{feature.description}</p>
                  <span className="inline-flex items-center text-[#5C3D2E] font-medium text-lg">
                    Mulai sekarang
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          className="p-6 sm:p-12 rounded-3xl bg-[#5C3D2E] shadow-2xl shadow-[#5C3D2E]/15"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Rocket className="w-16 h-16 text-white/80 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-white">
            Siap Tingkatkan Bisnis Anda?
          </h2>
          <p className="text-white/70 mb-8 text-sm sm:text-lg">
            Upload foto produk dan biarkan AI membantu menganalisis potensi bisnis Anda.
          </p>
          <Link href="/pricing">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-[#5C3D2E] hover:bg-[#F5F0EB] px-10 py-6 text-lg rounded-xl font-semibold shadow-lg"
              >
                Mulai Gratis
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
