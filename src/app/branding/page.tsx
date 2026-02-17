"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Sparkles, Tag, MessageSquare, Target, Award, Camera, BookOpen, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ImageUploader } from "@/components/ImageUploader";
import { AIThinking } from "@/components/AIThinking";

interface BrandResult {
  brandNames: string[];
  taglines: string[];
  brandStory: string;
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  brandPersonality: string[];
  uniqueSellingPoint: string;
  marketPositioning: string;
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

export default function BrandingPage() {
  const [image, setImage] = useState<string>("");
  const [story, setStory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<BrandResult | null>(null);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!image) return;

    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/generate-brand", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image, story }),
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
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#C9B69C]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-[#8C7B6B]/6 rounded-full blur-3xl" />
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
            whileHover={{ scale: 1.05, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Palette className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#5C3D2E]">
            Brand Identity Generator
          </h1>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto text-lg">
            Transformasi produk kerajinan Anda menjadi brand profesional dengan
            nama, tagline, dan identitas visual.
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
                    <BookOpen className="w-5 h-5 text-[#A67B5B]" />
                  </div>
                  <h2 className="text-lg font-semibold text-[#1A1A1A]">Cerita Pengrajin</h2>
                </div>
                <Textarea
                  placeholder="Ceritakan perjalanan Anda sebagai pengrajin: inspirasi, nilai-nilai, tradisi yang diwariskan, dll..."
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  className="min-h-[120px] bg-[#FDFBF7] border-[#E5DDD3] focus:border-[#A67B5B] transition-colors"
                />
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleGenerate}
                disabled={!image || isLoading}
                className="w-full py-6 text-lg bg-[#5C3D2E] hover:bg-[#4A2E1F] text-white shadow-lg shadow-[#5C3D2E]/15 disabled:opacity-50 disabled:shadow-none transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Wand2 className="mr-2 w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    Generate Brand Identity
                    <Sparkles className="ml-2 w-5 h-5" />
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
                  {/* Brand Names */}
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="p-6 bg-[#5C3D2E]/5 border-[#5C3D2E]/20 shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-5 h-5 text-[#5C3D2E]" />
                        </motion.div>
                        <h3 className="font-semibold text-[#5C3D2E]">Nama Brand</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {result.brandNames.map((name, i) => (
                          <motion.span
                            key={i}
                            className="px-4 py-2 rounded-full bg-[#5C3D2E]/10 text-[#5C3D2E] font-medium cursor-pointer hover:bg-[#5C3D2E]/20 transition-colors"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {name}
                          </motion.span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>

                  {/* Taglines */}
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                    <Card className="p-6 bg-white border-[#E5DDD3] hover:border-[#C9B69C] transition-colors shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-5 h-5 text-[#A67B5B]" />
                        <h3 className="font-semibold text-[#1A1A1A]">Tagline</h3>
                      </div>
                      <ul className="space-y-3">
                        {result.taglines.map((tagline, i) => (
                          <motion.li
                            key={i}
                            className="text-[#1A1A1A] italic text-lg border-l-2 border-[#A67B5B]/50 pl-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.15 }}
                          >
                            &ldquo;{tagline}&rdquo;
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>

                  {/* Color Palette */}
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                    <Card className="p-6 bg-white border-[#E5DDD3] hover:border-[#C9B69C] transition-colors shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <Palette className="w-5 h-5 text-[#8C7B6B]" />
                        <h3 className="font-semibold text-[#1A1A1A]">Color Palette</h3>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {Object.entries(result.colorPalette).map(([name, color], i) => (
                          <motion.div
                            key={name}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <motion.div
                              className="w-full h-16 rounded-xl mb-2 border border-[#E5DDD3] shadow-md cursor-pointer"
                              style={{ backgroundColor: color }}
                              whileHover={{ boxShadow: `0 10px 40px ${color}40` }}
                            />
                            <p className="text-xs text-[#6B6B6B] capitalize">{name}</p>
                            <p className="text-xs text-[#9B9B9B] font-mono">{color}</p>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>

                  {/* Brand Story */}
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                    <Card className="p-6 bg-white border-[#E5DDD3] hover:border-[#C9B69C] transition-colors shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <MessageSquare className="w-5 h-5 text-[#5C3D2E]" />
                        <h3 className="font-semibold text-[#1A1A1A]">Brand Story</h3>
                      </div>
                      <p className="text-[#1A1A1A] leading-relaxed text-lg">{result.brandStory}</p>
                    </Card>
                  </motion.div>

                  {/* Brand Personality */}
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                    <Card className="p-6 bg-white border-[#E5DDD3] hover:border-[#C9B69C] transition-colors shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-[#A67B5B]" />
                        <h3 className="font-semibold text-[#1A1A1A]">Brand Personality</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {result.brandPersonality.map((trait, i) => (
                          <motion.span
                            key={i}
                            className="px-4 py-2 rounded-full bg-[#A67B5B]/10 text-[#A67B5B] text-sm font-medium"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {trait}
                          </motion.span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>

                  {/* USP & Positioning */}
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                    <Card className="p-6 bg-white border-[#E5DDD3] hover:border-[#C9B69C] transition-colors shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-[#8C7B6B]" />
                        <h3 className="font-semibold text-[#1A1A1A]">Unique Selling Point</h3>
                      </div>
                      <p className="text-[#1A1A1A] mb-4 text-lg">{result.uniqueSellingPoint}</p>
                      <motion.div
                        className="p-4 rounded-xl bg-[#5C3D2E]/5 border border-[#5C3D2E]/15"
                        whileHover={{ scale: 1.02 }}
                      >
                        <p className="text-sm text-[#5C3D2E] font-medium mb-1">Positioning Statement</p>
                        <p className="text-[#1A1A1A]">{result.marketPositioning}</p>
                      </motion.div>
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
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Palette className="w-16 h-16 text-[#E5DDD3] mx-auto mb-4" />
                    </motion.div>
                    <p className="text-[#9B9B9B] text-lg">
                      Upload foto produk untuk generate brand identity
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
