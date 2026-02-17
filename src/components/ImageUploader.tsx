"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, ImageIcon, CheckCircle, Camera, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploaderProps {
  onImageSelect: (base64: string) => void;
  className?: string;
}

export function ImageUploader({ onImageSelect, className }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return;

      setIsUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = (reader.result as string).split(",")[1];
        setTimeout(() => {
          setPreview(reader.result as string);
          onImageSelect(base64);
          setIsUploading(false);
        }, 500);
      };
      reader.readAsDataURL(file);
    },
    [onImageSelect]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const clearImage = () => {
    setPreview(null);
    onImageSelect("");
  };

  return (
    <motion.div
      className={cn(
        "relative border-2 border-dashed rounded-2xl transition-all duration-300 overflow-hidden",
        isDragging
          ? "border-[#5C3D2E] bg-[#5C3D2E]/5 shadow-lg shadow-[#5C3D2E]/10"
          : preview
          ? "border-[#E5DDD3] p-2"
          : "border-[#E5DDD3] hover:border-[#C9B69C]",
        !preview && "p-8",
        className
      )}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      whileHover={!preview ? { scale: 1.01, borderColor: "#C9B69C" } : undefined}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <AnimatePresence mode="wait">
        {isUploading ? (
          <motion.div
            key="uploading"
            className="flex flex-col items-center justify-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {/* Spinning ring */}
            <div className="relative w-16 h-16">
              <motion.div
                className="absolute inset-0 border-4 border-[#5C3D2E]/20 rounded-full"
              />
              <motion.div
                className="absolute inset-0 border-4 border-transparent border-t-[#5C3D2E] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Camera className="w-6 h-6 text-[#5C3D2E]" />
              </motion.div>
            </div>

            <motion.p
              className="text-[#1A1A1A] mt-4 font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Memproses gambar...
            </motion.p>

            {/* Progress bar */}
            <div className="w-48 h-1 bg-[#E5DDD3] rounded-full mt-3 overflow-hidden">
              <motion.div
                className="h-full bg-[#5C3D2E] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ) : preview ? (
          <motion.div
            key="preview"
            className="relative group"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={preview}
              alt="Preview"
              className="w-full h-64 object-cover rounded-xl"
            />

            {/* Shimmer effect on load */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Success indicator */}
            <motion.div
              className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5C3D2E]/90 text-white text-sm font-medium shadow-lg shadow-[#5C3D2E]/20"
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <CheckCircle className="w-4 h-4" />
              </motion.div>
              Siap dianalisis
            </motion.div>

            {/* Delete button */}
            <motion.button
              onClick={clearImage}
              className="absolute top-3 right-3 p-2.5 bg-black/60 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/80 border border-white/10"
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <X className="w-4 h-4 text-white" />
            </motion.button>

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-center justify-center backdrop-blur-[2px]"
            >
              <motion.div 
                className="flex items-center gap-2 text-white text-sm font-medium bg-white/10 px-4 py-2 rounded-full border border-white/20"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <Camera className="w-4 h-4" />
                Klik X untuk ganti gambar
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.label
            key="upload"
            className="flex flex-col items-center justify-center cursor-pointer group/upload"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Icon with glow */}
            <motion.div
              className="relative p-5 rounded-2xl bg-[#5C3D2E]/10 mb-4 border border-[#5C3D2E]/15"
              animate={{
                y: [0, -6, 0],
                scale: isDragging ? 1.15 : 1,
              }}
              transition={{
                y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.2 },
              }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-[#5C3D2E]/5 blur-xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <AnimatePresence mode="wait">
                {isDragging ? (
                  <motion.div
                    key="dragging"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ type: "spring" }}
                  >
                    <ImageIcon className="w-8 h-8 text-[#5C3D2E] relative z-10" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="upload"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -90 }}
                    transition={{ type: "spring" }}
                  >
                    <Upload className="w-8 h-8 text-[#5C3D2E] relative z-10" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.p
              className="text-[#1A1A1A] font-semibold mb-1 text-base"
              animate={{ color: isDragging ? "#5C3D2E" : "#1A1A1A" }}
            >
              {isDragging ? "Lepaskan untuk upload" : "Drag & drop foto produk"}
            </motion.p>
            <p className="text-[#9B9B9B] text-sm">atau klik untuk pilih file</p>

            {/* Supported formats with hover animation */}
            <div className="flex gap-2 mt-5">
              {["JPG", "PNG", "WEBP"].map((format, i) => (
                <motion.span
                  key={format}
                  className="px-3 py-1 rounded-lg text-xs bg-[#F5F0EB] text-[#6B6B6B] border border-[#E5DDD3] font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, borderColor: "#C9B69C" }}
                >
                  {format}
                </motion.span>
              ))}
            </div>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
              }}
            />
          </motion.label>
        )}
      </AnimatePresence>

      {/* Drag overlay with particle effect */}
      <AnimatePresence>
        {isDragging && (
          <motion.div
            className="absolute inset-0 bg-[#5C3D2E]/5 border-2 border-[#5C3D2E] rounded-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Corner sparkles */}
            {[
              "top-2 left-2",
              "top-2 right-2",
              "bottom-2 left-2",
              "bottom-2 right-2",
            ].map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute ${pos}`}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.25,
                }}
              >
                <Sparkles className="w-4 h-4 text-[#5C3D2E]" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
