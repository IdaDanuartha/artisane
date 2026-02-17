import { NextRequest, NextResponse } from "next/server";
import { analyzeProductPricing } from "@/lib/gemini";

export async function POST(request: NextRequest) {
  try {
    const { image, description } = await request.json();

    if (!image) {
      return NextResponse.json(
        { error: "Image is required" },
        { status: 400 }
      );
    }

    console.log("Starting pricing analysis...");
    console.log("Image length:", image.length);

    const result = await analyzeProductPricing(image, description || "");

    console.log("Analysis result:", JSON.stringify(result).substring(0, 200));

    return NextResponse.json(result);
  } catch (error) {
    console.error("Pricing analysis error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to analyze product: ${errorMessage}` },
      { status: 500 }
    );
  }
}
