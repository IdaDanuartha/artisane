import { NextRequest, NextResponse } from "next/server";
import { generateBrandIdentity } from "@/lib/gemini";

export async function POST(request: NextRequest) {
  try {
    const { image, story } = await request.json();

    if (!image) {
      return NextResponse.json(
        { error: "Image is required" },
        { status: 400 }
      );
    }

    const result = await generateBrandIdentity(image, story || "");

    return NextResponse.json(result);
  } catch (error) {
    console.error("Brand generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate brand identity" },
      { status: 500 }
    );
  }
}
