"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, DollarSign, Target, Users, Lightbulb, ArrowUp, Camera, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ImageUploader } from "@/components/ImageUploader";
import { AIThinking } from "@/components/AIThinking";

interface PricingResult {
  productName: string;
  estimatedPrice: {
    min: number;
    max: number;
    recommended: number;
  };
  marketPosition: string;
  targetAudience: string;
  competitorInsight: string;
  pricingStrategy: string[];
  improvementSuggestions: string[];
}

function formatRupiah(num: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(num);
}

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

export default function PricingPage() {
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PricingResult | null>(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!image) return;

    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/analyze-pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image, description }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#A67B5B]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#C9B69C]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex p-4 rounded-2xl bg-[#5C3D2E] mb-6 shadow-lg shadow-[#5C3D2E]/15"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <TrendingUp className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#5C3D2E]">
            Smart Pricing & Market Insight
          </h1>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto text-lg">
            Upload foto produk kerajinan Anda dan AI akan menganalisis harga optimal
            berdasarkan market insight.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="p-6 bg-white border-[#E5DDD3] hover:border-[#C9B69C] transition-colors duration-300 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#5C3D2E]/10">
                    <Camera className="w-5 h-5 text-[#5C3D2E]" />
                  </div>
                  <h2 className="text-lg font-semibold text-[#1A1A1A]">Foto Produk</h2>
                </div>
                <ImageUploader onImageSelect={setImage} />
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="p-6 bg-white border-[#E5DDD3] hover:border-[#C9B69C] transition-colors duration-300 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#A67B5B]/10">
                    <FileText className="w-5 h-5 text-[#A67B5B]" />
                  </div>
                  <h2 className="text-lg font-semibold text-[#1A1A1A]">Deskripsi (Opsional)</h2>
                </div>
                <Textarea
                  placeholder="Ceritakan tentang produk Anda: bahan, teknik pembuatan, ukuran, dll..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[120px] bg-[#FDFBF7] border-[#E5DDD3] focus:border-[#A67B5B] transition-colors"
                />
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleAnalyze}
                disabled={!image || isLoading}
                className="w-full py-6 text-lg bg-[#5C3D2E] hover:bg-[#4A2E1F] text-white shadow-lg shadow-[#5C3D2E]/15 disabled:opacity-50 disabled:shadow-none transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Sparkles className="mr-2 w-5 h-5 animate-spin" />
                    Menganalisis...
                  </>
                ) : (
                  <>
                    Analisis Pricing
                    <TrendingUp className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </motion.div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Result Section */}
          <div>
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <Card className="p-8 bg-white border-[#E5DDD3] shadow-sm">
                    <AIThinking />
                  </Card>
                </motion.div>
              ) : result ? (
                <motion.div
                  key="result"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4"
                >
                  {/* Product Name */}
                  <motion.div variants={itemVariants}>
                    <Card className="p-6 bg-white border-[#E5DDD3] hover:border-[#C9B69C] transition-colors shadow-sm">
                      <h3 className="text-sm text-[#6B6B6B] mb-1">Produk Teridentifikasi</h3>
                      <p className="text-xl font-semibold text-[#1A1A1A]">{result.productName}</p>
                    </Card>
                  </motion.div>

                  {/* Price Recommendation */}
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="p-6 bg-[#5C3D2E]/5 border-[#5C3D2E]/20 shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <DollarSign className="w-6 h-6 text-[#5C3D2E]" />
                        </motion.div>
                        <h3 className="font-semibold text-[#5C3D2E]">Rekomendasi Harga</h3>
                      </div>
                      <div className="text-center py-4">
                        <motion.p
                          className="text-4xl sm:text-5xl font-bold text-[#5C3D2E] mb-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.3 }}
                        >
                          {formatRupiah(result.estimatedPrice.recommended)}
                        </motion.p>
                        <p className="text-[#6B6B6B]">
                          Range: {formatRupiah(result.estimatedPrice.min)} - {formatRupiah(result.estimatedPrice.max)}
                        </p>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Market Position */}
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                    <Card className="p-6 bg-white border-[#E5DDD3] hover:border-[#C9B69C] transition-colors shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-[#5C3D2E]" />
                        <h3 className="font-semibold text-[#1A1A1A]">Market Position</h3>
                      </div>
                      <motion.span
                        className="inline-flex px-4 py-2 rounded-full bg-[#5C3D2E]/10 text-[#5C3D2E] text-sm font-medium capitalize"
                        whileHover={{ scale: 1.05 }}
                      >
                        {result.marketPosition}
                      </motion.span>
                    </Card>
                  </motion.div>

                  {/* Target Audience */}
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                    <Card className="p-6 bg-white border-[#E5DDD3] hover:border-[#C9B69C] transition-colors shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-5 h-5 text-[#A67B5B]" />
                        <h3 className="font-semibold text-[#1A1A1A]">Target Audience</h3>
                      </div>
                      <p className="text-[#1A1A1A]">{result.targetAudience}</p>
                    </Card>
                  </motion.div>

                  {/* Pricing Strategy */}
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                    <Card className="p-6 bg-white border-[#E5DDD3] hover:border-[#C9B69C] transition-colors shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="w-5 h-5 text-[#A67B5B]" />
                        <h3 className="font-semibold text-[#1A1A1A]">Strategi Pricing</h3>
                      </div>
                      <ul className="space-y-3">
                        {result.pricingStrategy.map((tip, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3 text-[#1A1A1A]"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A67B5B]/15 flex items-center justify-center text-[#A67B5B] text-xs font-bold">
                              {i + 1}
                            </span>
                            {tip}
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>

                  {/* Improvement Suggestions */}
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                    <Card className="p-6 bg-white border-[#E5DDD3] hover:border-[#C9B69C] transition-colors shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <ArrowUp className="w-5 h-5 text-[#8C7B6B]" />
                        <h3 className="font-semibold text-[#1A1A1A]">Saran Peningkatan Nilai</h3>
                      </div>
                      <ul className="space-y-3">
                        {result.improvementSuggestions.map((suggestion, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3 text-[#1A1A1A]"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8C7B6B]/15 flex items-center justify-center text-[#8C7B6B] text-xs font-bold">
                              {i + 1}
                            </span>
                            {suggestion}
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card className="p-12 bg-white border-[#E5DDD3] text-center shadow-sm">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <TrendingUp className="w-16 h-16 text-[#E5DDD3] mx-auto mb-4" />
                    </motion.div>
                    <p className="text-[#9B9B9B] text-lg">
                      Upload foto produk untuk memulai analisis pricing
                    </p>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
