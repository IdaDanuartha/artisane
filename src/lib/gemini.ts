import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function analyzeProductPricing(imageBase64: string, productDescription: string) {
  const prompt = `Kamu adalah konsultan bisnis ahli untuk UMKM Indonesia. Analisis gambar produk kerajinan ini dan berikan insight pricing & market.

Deskripsi produk: ${productDescription || "Tidak ada deskripsi"}

Berikan analisis dalam format JSON dengan struktur:
{
  "productName": "nama produk yang teridentifikasi",
  "estimatedPrice": {
    "min": angka dalam rupiah,
    "max": angka dalam rupiah,
    "recommended": angka dalam rupiah
  },
  "marketPosition": "budget/mid-range/premium/luxury",
  "targetAudience": "deskripsi target pasar",
  "competitorInsight": "analisis kompetitor serupa",
  "pricingStrategy": ["3 tips pricing strategy"],
  "improvementSuggestions": ["3 saran peningkatan nilai produk"]
}

PENTING: Berikan hanya JSON valid tanpa markdown code block.`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: imageBase64,
            },
          },
        ],
      },
    ],
  });

  const text = response.text || "";
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

export async function generateBrandIdentity(imageBase64: string, craftStory: string) {
  const prompt = `Kamu adalah brand strategist profesional untuk UMKM Indonesia. Analisis gambar produk kerajinan ini dan cerita pengrajin untuk menciptakan brand identity yang kuat.

Cerita pengrajin: ${craftStory || "Pengrajin lokal dengan keahlian turun-temurun"}

Berikan brand identity dalam format JSON:
{
  "brandNames": ["5 saran nama brand unik dan memorable"],
  "taglines": ["3 tagline yang powerful"],
  "brandStory": "narasi brand 2-3 kalimat",
  "colorPalette": {
    "primary": "#hexcode",
    "secondary": "#hexcode",
    "accent": "#hexcode",
    "background": "#hexcode"
  },
  "brandPersonality": ["3 kata sifat yang menggambarkan brand"],
  "uniqueSellingPoint": "USP utama produk",
  "marketPositioning": "positioning statement"
}

PENTING: Berikan hanya JSON valid tanpa markdown code block.`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: imageBase64,
            },
          },
        ],
      },
    ],
  });

  const text = response.text || "";
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}
