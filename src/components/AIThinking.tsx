"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, Cpu } from "lucide-react";

export function AIThinking() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Animated rings */}
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Outer pulsing ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#5C3D2E]/20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Middle rotating ring */}
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-dashed border-[#A67B5B]/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner glowing circle */}
        <motion.div
          className="absolute inset-4 rounded-full bg-[#5C3D2E]/10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Blur glow behind icon */}
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-[#5C3D2E]/20 blur-xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Center icon */}
        <motion.div
          className="relative z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-10 h-10 text-[#5C3D2E]" />
        </motion.div>

        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2.5 h-2.5 rounded-full bg-[#A67B5B]"
            animate={{
              rotate: 360,
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 1 }}
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: `0 ${40 + i * 8}px`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.p
          className="text-xl font-semibold text-[#5C3D2E]"
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          AI sedang menganalisis
        </motion.p>
        <p className="text-[#9B9B9B] text-sm mt-2">Mohon tunggu sebentar...</p>
      </motion.div>

      {/* Processing steps */}
      <motion.div
        className="flex items-center gap-6 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[
          { icon: Brain, label: "Memahami", delay: 0 },
          { icon: Cpu, label: "Memproses", delay: 0.3 },
          { icon: Sparkles, label: "Menyusun", delay: 0.6 },
        ].map((step, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center gap-1.5"
            animate={{ 
              opacity: [0.4, 1, 0.4],
              y: [0, -3, 0]
            }}
            transition={{ duration: 1.8, repeat: Infinity, delay: step.delay }}
          >
            <div className="p-2 rounded-lg bg-[#F5F0EB] border border-[#E5DDD3]">
              <step.icon className="w-4 h-4 text-[#5C3D2E]" />
            </div>
            <span className="text-xs text-[#9B9B9B]">{step.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Bouncing dots */}
      <div className="flex gap-1.5 mt-6">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#5C3D2E]"
            animate={{ y: [0, -6, 0], scale: [1, 1.3, 1] }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
}
