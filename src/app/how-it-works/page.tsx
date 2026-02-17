"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, Cpu, Sparkles, Upload, Camera, TrendingUp, Palette,
  ArrowRight, Zap, Eye, BarChart3, Tag, MessageSquare,
  Layers, CircuitBoard, Globe, Shield, Rocket, ChevronRight,
  DollarSign, Target, Users, Award, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

/* ───── animation variants ───── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

/* ───── data ───── */
const pipelineSteps = [
  { icon: Upload, title: "Upload Foto", desc: "Foto produk kerajinan di-upload ke platform", color: "brown" },
  { icon: Eye, title: "AI Menganalisis", desc: "Gemini AI memahami visual, bahan, dan kualitas produk", color: "tan" },
  { icon: Sparkles, title: "Hasil Instan", desc: "Rekomendasi harga & brand identity dalam hitungan detik", color: "gray" },
];

const techCards = [
  { icon: Brain, title: "Gemini 2.5 Flash", desc: "Model AI terbaru dari Google dengan kemampuan multimodal — memahami gambar dan teks secara bersamaan." },
  { icon: Eye, title: "Computer Vision", desc: "Mengidentifikasi jenis produk, material, teknik pembuatan, dan kualitas finishing dari foto." },
  { icon: Cpu, title: "NLP & Market Analysis", desc: "Memproses data pasar Indonesia untuk memberikan insight pricing dan branding yang relevan." },
];

/* ═══════ Mock demo data ═══════ */
const mockPricing = {
  productName: "Tas Anyaman Bambu Premium",
  estimatedPrice: { min: 150000, max: 350000, recommended: 275000 },
  marketPosition: "mid-range to premium",
  targetAudience: "Wanita urban 25-45 tahun yang menghargai produk eco-friendly dan handmade",
  pricingStrategy: [
    "Gunakan strategi value-based pricing — tonjolkan aspek handmade & eco-friendly",
    "Bundling dengan produk pelengkap seperti dompet atau pouch",
    "Tawarkan opsi personalisasi untuk meningkatkan perceived value",
  ],
};

const mockBranding = {
  brandNames: ["Bamboo Artistry", "AnyamKu", "BambuKraf"],
  taglines: ["Keindahan Alam dalam Genggaman", "Handmade with Heart"],
  colorPalette: { primary: "#2D5016", secondary: "#8B7355", accent: "#D4A574", background: "#F5F0E8" },
  brandPersonality: ["Artisanal", "Eco-Conscious", "Elegant"],
  uniqueSellingPoint: "Kerajinan bambu premium handmade dengan teknik anyaman tradisional yang ramah lingkungan",
};

function formatRupiah(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n);
}

/* ═══════ Sub-components ═══════ */

function NeuralBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#A67B5B]/10 rounded-full blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-[#C9B69C]/10 rounded-full blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute top-1/2 left-10 w-80 h-80 bg-[#8C7B6B]/8 rounded-full blur-[80px]"
        animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div key={i}
          className="absolute w-1 h-1 rounded-full bg-[#A67B5B]/30"
          style={{ top: `${15 + i * 14}%`, left: `${10 + i * 16}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </div>
  );
}

function PipelineSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.div className="text-center mb-12 sm:mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-[#5C3D2E]">3 Langkah Sederhana</span>
        </h2>
        <p className="text-[#6B6B6B] max-w-xl mx-auto text-base sm:text-lg">Dari foto produk hingga insight bisnis — semuanya otomatis</p>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* Connector lines - desktop only */}
        <div className="hidden md:block absolute top-1/2 left-[33%] w-[34%] h-[2px] -translate-y-1/2 z-0">
          <motion.div className="h-full bg-[#C9B69C] rounded-full"
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8 }} style={{ transformOrigin: "left" }} />
        </div>
        <div className="hidden md:block absolute top-1/2 left-[66%] w-[34%] h-[2px] -translate-y-1/2 z-0">
          <motion.div className="h-full bg-[#C9B69C] rounded-full"
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.8 }} style={{ transformOrigin: "left" }} />
        </div>

        {pipelineSteps.map((step, i) => (
          <motion.div key={i} variants={fadeUp} className="relative z-10">
            <motion.div
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DDD3] text-center hover:border-[#C9B69C] transition-all duration-500 shadow-sm"
              whileHover={{ scale: 1.03, y: -8 }} transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div className="inline-flex p-4 rounded-2xl bg-[#5C3D2E]/10 border border-[#5C3D2E]/15 mb-4"
                animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}>
                <step.icon className={`w-8 h-8 ${i === 0 ? "text-[#5C3D2E]" : i === 1 ? "text-[#A67B5B]" : "text-[#8C7B6B]"}`} />
              </motion.div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#5C3D2E]/10 text-[#5C3D2E] text-sm font-bold mb-3">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{step.title}</h3>
              <p className="text-[#6B6B6B] text-sm sm:text-base">{step.desc}</p>
            </motion.div>
            {/* Mobile connector */}
            {i < 2 && (
              <div className="flex justify-center my-4 md:hidden">
                <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ChevronRight className="w-6 h-6 text-[#C9B69C] rotate-90" />
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function FeatureExplainer({ title, subtitle, steps, icon: Icon }: {
  title: string; subtitle: string;
  steps: { icon: typeof Brain; title: string; desc: string }[];
  icon: typeof Brain;
}) {
  return (
    <motion.div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#E5DDD3] shadow-sm"
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left - title area */}
        <div className="lg:w-2/5">
          <motion.div className="inline-flex p-4 rounded-2xl bg-[#5C3D2E] mb-4 shadow-lg shadow-[#5C3D2E]/15"
            whileHover={{ scale: 1.1, rotate: -5 }}>
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            <span className="text-[#5C3D2E]">{title}</span>
          </h3>
          <p className="text-[#6B6B6B] text-sm sm:text-base">{subtitle}</p>
        </div>

        {/* Right - steps */}
        <motion.div className="lg:w-3/5 space-y-4 w-full" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {steps.map((step, i) => (
            <motion.div key={i} variants={fadeUp}
              className="flex items-start gap-4 p-4 rounded-2xl bg-[#FDFBF7] border border-[#E5DDD3] hover:border-[#C9B69C] transition-all"
              whileHover={{ x: 6 }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#5C3D2E]/10 flex items-center justify-center">
                <step.icon className="w-5 h-5 text-[#5C3D2E]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1A1A1A] mb-1">{step.title}</h4>
                <p className="text-[#6B6B6B] text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

function DemoSection() {
  const [activeTab, setActiveTab] = useState<"pricing" | "branding">("pricing");
  const [demoState, setDemoState] = useState<"idle" | "processing" | "done">("idle");

  const runDemo = () => {
    setDemoState("processing");
    setTimeout(() => setDemoState("done"), 2500);
  };

  const resetDemo = () => {
    setDemoState("idle");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.div className="text-center mb-10 sm:mb-14" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A67B5B]/10 border border-[#A67B5B]/20 mb-6">
          <Zap className="w-4 h-4 text-[#A67B5B]" />
          <span className="text-sm text-[#A67B5B]">Interactive Demo</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-[#5C3D2E]">Coba Demo Interaktif</span>
        </h2>
        <p className="text-[#6B6B6B] max-w-xl mx-auto text-base sm:text-lg">Lihat bagaimana AI kami bekerja — tanpa perlu upload foto</p>
      </motion.div>

      {/* Tab selector */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1.5 rounded-2xl bg-[#F5F0EB] border border-[#E5DDD3]">
          {[
            { id: "pricing" as const, label: "Smart Pricing", icon: TrendingUp },
            { id: "branding" as const, label: "Brand Identity", icon: Palette },
          ].map((tab) => (
            <motion.button key={tab.id}
              onClick={() => { setActiveTab(tab.id); resetDemo(); }}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id ? "bg-[#5C3D2E] text-white shadow-lg shadow-[#5C3D2E]/15" : "text-[#6B6B6B] hover:text-[#1A1A1A]"
              }`}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Demo area */}
      <motion.div className="max-w-4xl mx-auto" layout>
        <Card className="p-6 sm:p-8 bg-white border-[#E5DDD3] shadow-sm overflow-hidden">
          <AnimatePresence mode="wait">
            {demoState === "idle" && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-8 sm:py-12">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  {/* Example product image placeholder */}
                  <motion.div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-[#F5F0EB] border border-[#E5DDD3] flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.05 }}>
                    <div className="text-center">
                      <Camera className="w-10 h-10 text-[#C9B69C] mx-auto mb-2" />
                      <p className="text-[#9B9B9B] text-xs">Contoh: Tas Anyaman Bambu</p>
                    </div>
                  </motion.div>
                  <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="w-8 h-8 text-[#C9B69C] rotate-90 sm:rotate-0" />
                  </motion.div>
                  <motion.div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-[#5C3D2E]/5 border border-[#5C3D2E]/15 flex items-center justify-center"
                    animate={{ borderColor: ["rgba(92,61,46,0.15)", "rgba(166,123,91,0.3)", "rgba(92,61,46,0.15)"] }}
                    transition={{ duration: 3, repeat: Infinity }}>
                    <div className="text-center">
                      <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
                        <Sparkles className="w-10 h-10 text-[#5C3D2E] mx-auto mb-2" />
                      </motion.div>
                      <p className="text-[#5C3D2E] text-xs font-medium">
                        {activeTab === "pricing" ? "Pricing Analysis" : "Brand Identity"}
                      </p>
                    </div>
                  </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button onClick={runDemo}
                    className="bg-[#5C3D2E] hover:bg-[#4A2E1F] text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#5C3D2E]/15">
                    <Zap className="mr-2 w-5 h-5" />
                    Lihat Demo {activeTab === "pricing" ? "Pricing" : "Branding"}
                  </Button>
                </motion.div>
              </motion.div>
            )}

            {demoState === "processing" && (
              <motion.div key="processing" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-12 sm:py-16">
                {/* AI Processing Animation */}
                <div className="relative w-24 h-24 mb-6">
                  <motion.div className="absolute inset-0 rounded-full border-2 border-[#5C3D2E]/20"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} />
                  <motion.div className="absolute inset-2 rounded-full border-2 border-dashed border-[#A67B5B]/30"
                    animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                  <motion.div className="absolute inset-4 rounded-full bg-[#5C3D2E]/10"
                    animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                  <motion.div className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                    <Brain className="w-8 h-8 text-[#5C3D2E]" />
                  </motion.div>
                </div>
                <motion.p className="text-lg font-semibold text-[#5C3D2E]"
                  animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  AI sedang menganalisis...
                </motion.p>
                <div className="flex gap-3 mt-4">
                  {[
                    { icon: Eye, label: "Memahami" },
                    { icon: Cpu, label: "Memproses" },
                    { icon: Sparkles, label: "Menyusun" },
                  ].map((s, i) => (
                    <motion.div key={i} className="flex flex-col items-center gap-1"
                      animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}>
                      <div className="p-2 rounded-lg bg-[#F5F0EB] border border-[#E5DDD3]">
                        <s.icon className="w-4 h-4 text-[#5C3D2E]" />
                      </div>
                      <span className="text-xs text-[#9B9B9B]">{s.label}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="w-48 h-1 bg-[#E5DDD3] rounded-full mt-6 overflow-hidden">
                  <motion.div className="h-full bg-[#5C3D2E] rounded-full"
                    initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2.5 }} />
                </div>
              </motion.div>
            )}

            {demoState === "done" && activeTab === "pricing" && (
              <motion.div key="pricing-result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-[#5C3D2E]" />
                  <span className="text-[#5C3D2E] font-medium">Analisis Selesai!</span>
                  <span className="text-[#9B9B9B] text-sm ml-auto">Demo Mode</span>
                </div>

                <Card className="p-4 sm:p-5 bg-[#FDFBF7] border-[#E5DDD3]">
                  <p className="text-sm text-[#6B6B6B] mb-1">Produk Teridentifikasi</p>
                  <p className="text-lg font-semibold text-[#1A1A1A]">{mockPricing.productName}</p>
                </Card>

                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
                  <Card className="p-4 sm:p-6 bg-[#5C3D2E]/5 border-[#5C3D2E]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign className="w-5 h-5 text-[#5C3D2E]" />
                      <h4 className="font-semibold text-[#5C3D2E]">Rekomendasi Harga</h4>
                    </div>
                    <p className="text-3xl sm:text-4xl font-bold text-[#5C3D2E] text-center my-3">
                      {formatRupiah(mockPricing.estimatedPrice.recommended)}
                    </p>
                    <p className="text-center text-[#6B6B6B] text-sm">
                      Range: {formatRupiah(mockPricing.estimatedPrice.min)} - {formatRupiah(mockPricing.estimatedPrice.max)}
                    </p>
                  </Card>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="p-4 bg-[#FDFBF7] border-[#E5DDD3]">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-[#5C3D2E]" />
                      <h4 className="font-medium text-sm text-[#1A1A1A]">Market Position</h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#5C3D2E]/10 text-[#5C3D2E] text-sm capitalize">{mockPricing.marketPosition}</span>
                  </Card>
                  <Card className="p-4 bg-[#FDFBF7] border-[#E5DDD3]">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-[#A67B5B]" />
                      <h4 className="font-medium text-sm text-[#1A1A1A]">Target Audience</h4>
                    </div>
                    <p className="text-[#1A1A1A] text-sm">{mockPricing.targetAudience}</p>
                  </Card>
                </div>

                <Card className="p-4 bg-[#FDFBF7] border-[#E5DDD3]">
                  <h4 className="font-medium text-sm mb-3 flex items-center gap-2 text-[#1A1A1A]">
                    <BarChart3 className="w-4 h-4 text-[#A67B5B]" /> Strategi Pricing
                  </h4>
                  <ul className="space-y-2">
                    {mockPricing.pricingStrategy.map((tip, i) => (
                      <motion.li key={i} className="flex items-start gap-2 text-[#1A1A1A] text-sm"
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.15 }}>
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#A67B5B]/15 flex items-center justify-center text-[#A67B5B] text-xs font-bold">{i + 1}</span>
                        {tip}
                      </motion.li>
                    ))}
                  </ul>
                </Card>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button onClick={resetDemo} variant="outline" className="border-[#E5DDD3] hover:bg-[#F5F0EB] text-[#5C3D2E] flex-1">
                    Coba Lagi
                  </Button>
                  <Link href="/pricing" className="flex-1">
                    <Button className="w-full bg-[#5C3D2E] hover:bg-[#4A2E1F] text-white">
                      Coba dengan Foto Anda <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}

            {demoState === "done" && activeTab === "branding" && (
              <motion.div key="branding-result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-[#5C3D2E]" />
                  <span className="text-[#5C3D2E] font-medium">Brand Generated!</span>
                  <span className="text-[#9B9B9B] text-sm ml-auto">Demo Mode</span>
                </div>

                <Card className="p-4 sm:p-6 bg-[#5C3D2E]/5 border-[#5C3D2E]/20">
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                      <Sparkles className="w-5 h-5 text-[#5C3D2E]" />
                    </motion.div>
                    <h4 className="font-semibold text-[#5C3D2E]">Nama Brand</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mockBranding.brandNames.map((name, i) => (
                      <motion.span key={i} className="px-4 py-2 rounded-full bg-[#5C3D2E]/10 text-[#5C3D2E] font-medium"
                        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.05 }}>
                        {name}
                      </motion.span>
                    ))}
                  </div>
                </Card>

                <Card className="p-4 bg-[#FDFBF7] border-[#E5DDD3]">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-[#A67B5B]" />
                    <h4 className="font-medium text-sm text-[#1A1A1A]">Tagline</h4>
                  </div>
                  {mockBranding.taglines.map((t, i) => (
                    <motion.p key={i} className="text-[#1A1A1A] italic border-l-2 border-[#A67B5B]/50 pl-3 mb-2 text-sm"
                      initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.15 }}>
                      &ldquo;{t}&rdquo;
                    </motion.p>
                  ))}
                </Card>

                <Card className="p-4 bg-[#FDFBF7] border-[#E5DDD3]">
                  <div className="flex items-center gap-2 mb-3">
                    <Palette className="w-4 h-4 text-[#8C7B6B]" />
                    <h4 className="font-medium text-sm text-[#1A1A1A]">Color Palette</h4>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {Object.entries(mockBranding.colorPalette).map(([name, color], i) => (
                      <motion.div key={name} className="text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ scale: 1.1 }}>
                        <div className="w-full h-12 rounded-xl mb-1 border border-[#E5DDD3] shadow-md" style={{ backgroundColor: color }} />
                        <p className="text-xs text-[#6B6B6B] capitalize">{name}</p>
                        <p className="text-xs text-[#9B9B9B] font-mono">{color}</p>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="p-4 bg-[#FDFBF7] border-[#E5DDD3]">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-[#A67B5B]" />
                      <h4 className="font-medium text-sm text-[#1A1A1A]">Brand Personality</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {mockBranding.brandPersonality.map((trait, i) => (
                        <motion.span key={i} className="px-3 py-1 rounded-full bg-[#A67B5B]/10 text-[#A67B5B] text-xs font-medium"
                          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.1, type: "spring" }}>
                          {trait}
                        </motion.span>
                      ))}
                    </div>
                  </Card>
                  <Card className="p-4 bg-[#FDFBF7] border-[#E5DDD3]">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-[#5C3D2E]" />
                      <h4 className="font-medium text-sm text-[#1A1A1A]">USP</h4>
                    </div>
                    <p className="text-[#1A1A1A] text-sm">{mockBranding.uniqueSellingPoint}</p>
                  </Card>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button onClick={resetDemo} variant="outline" className="border-[#E5DDD3] hover:bg-[#F5F0EB] text-[#5C3D2E] flex-1">Coba Lagi</Button>
                  <Link href="/branding" className="flex-1">
                    <Button className="w-full bg-[#5C3D2E] hover:bg-[#4A2E1F] text-white">
                      Coba dengan Foto Anda <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>
    </section>
  );
}

/* ═══════ Main page ═══════ */

export default function HowItWorksPage() {
  return (
    <div className="relative overflow-hidden">
      <NeuralBackground />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-8">
        <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5C3D2E]/10 border border-[#5C3D2E]/20 mb-8"
            whileHover={{ scale: 1.05 }}>
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
              <CircuitBoard className="w-4 h-4 text-[#5C3D2E]" />
            </motion.div>
            <span className="text-sm text-[#5C3D2E]">Behind the AI Magic</span>
          </motion.div>

          <motion.h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span className="text-[#5C3D2E]">
              Bagaimana AI Kami
            </span>
            <br />
            <span className="text-[#1A1A1A]">Bekerja</span>
          </motion.h1>

          <motion.p className="text-lg sm:text-xl text-[#6B6B6B] max-w-2xl mx-auto"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Pelajari teknologi di balik Artisane — dari computer vision hingga market analysis,
            semua dirancang untuk pengrajin lokal Indonesia.
          </motion.p>
        </motion.div>
      </section>

      {/* Pipeline */}
      <PipelineSection />

      {/* Smart Pricing Explainer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <FeatureExplainer
          title="Smart Pricing & Market Insight"
          subtitle="AI menganalisis foto produk dan memberikan rekomendasi harga optimal berdasarkan analisis pasar Indonesia."
          icon={TrendingUp}
          steps={[
            { icon: Camera, title: "Analisis Visual Produk", desc: "Computer Vision mengenali jenis produk, material, kualitas finishing, dan detail kerajinan." },
            { icon: BarChart3, title: "Riset Pasar Otomatis", desc: "AI membandingkan dengan produk serupa di pasar Indonesia dan menentukan posisi kompetitif." },
            { icon: DollarSign, title: "Rekomendasi Harga", desc: "Menghasilkan range harga optimal beserta strategi pricing yang disesuaikan target pasar." },
            { icon: Target, title: "Target Audience & Strategi", desc: "Identifikasi segmen pasar ideal dan saran peningkatan nilai produk." },
          ]}
        />
      </section>

      {/* Brand Identity Explainer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <FeatureExplainer
          title="Brand Identity Generator"
          subtitle="Transformasi produk kerajinan Anda menjadi brand profesional dengan identitas visual yang kuat."
          icon={Palette}
          steps={[
            { icon: Eye, title: "Pemahaman Produk & Cerita", desc: "AI memahami karakteristik visual produk dan narasi pengrajin untuk menciptakan brand yang autentik." },
            { icon: Tag, title: "Generasi Nama & Tagline", desc: "Menciptakan nama brand yang unik dan tagline yang memorable berdasarkan identitas produk." },
            { icon: Palette, title: "Color Palette & Visual Identity", desc: "Menghasilkan palet warna yang selaras dengan produk dan positioning brand." },
            { icon: Award, title: "Brand Personality & USP", desc: "Mendefinisikan kepribadian brand dan unique selling point untuk diferensiasi pasar." },
          ]}
        />
      </section>

      {/* Interactive Demo */}
      <DemoSection />

      {/* Technology Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div className="text-center mb-12 sm:mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#5C3D2E]">Teknologi di Balik Artisane</span>
          </h2>
          <p className="text-[#6B6B6B] max-w-xl mx-auto text-base sm:text-lg">Dibangun dengan teknologi AI terdepan dari Google</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {techCards.map((card, i) => (
            <motion.div key={i} variants={fadeUp}>
              <motion.div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DDD3] h-full hover:border-[#C9B69C] transition-all duration-500 shadow-sm"
                whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <motion.div className="inline-flex p-4 rounded-2xl bg-[#5C3D2E] mb-5 shadow-lg shadow-[#5C3D2E]/15"
                  whileHover={{ rotate: 5, scale: 1.1 }}>
                  <card.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{card.title}</h3>
                <p className="text-[#6B6B6B] text-sm sm:text-base leading-relaxed">{card.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-20 sm:mt-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          {[
            { icon: Zap, value: "< 10 detik", label: "Waktu Analisis" },
            { icon: Globe, value: "Indonesia", label: "Fokus Pasar" },
            { icon: Layers, value: "Multimodal", label: "Input Tipe" },
            { icon: Shield, value: "100%", label: "Privasi Data" },
          ].map((stat, i) => (
            <motion.div key={i} className="text-center p-4 sm:p-6 rounded-2xl bg-white border border-[#E5DDD3] shadow-sm"
              whileHover={{ scale: 1.05, borderColor: "#C9B69C" }} transition={{ type: "spring", stiffness: 300 }}>
              <stat.icon className="w-6 h-6 text-[#5C3D2E] mx-auto mb-2" />
              <p className="text-lg sm:text-xl font-bold text-[#1A1A1A]">{stat.value}</p>
              <p className="text-xs sm:text-sm text-[#9B9B9B]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <motion.div className="p-8 sm:p-12 rounded-3xl bg-[#5C3D2E] shadow-2xl shadow-[#5C3D2E]/15"
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200 }}>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <Rocket className="w-12 h-12 sm:w-16 sm:h-16 text-white/80 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Siap Mencoba?</h2>
          <p className="text-white/70 mb-8 text-base sm:text-lg max-w-lg mx-auto">
            Upload foto produk kerajinan Anda dan biarkan AI membantu menganalisis potensi bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-[#5C3D2E] hover:bg-[#F5F0EB] px-8 py-6 text-lg rounded-xl shadow-lg w-full sm:w-auto font-semibold">
                  Smart Pricing <TrendingUp className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
            <Link href="/branding">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-white/30 text-[#5C3D2E] hover:bg-[#F5F0EB] px-8 py-6 text-lg rounded-xl w-full sm:w-auto font-semibold">
                  Brand Identity <Palette className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
