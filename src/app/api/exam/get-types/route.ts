import { NextResponse } from "next/server";
import axios from "axios";
import { BASE_URL } from "@/services";

export async function GET() {
  try {
    const response = await axios.get(`${BASE_URL}/exam/types`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to get exam types" },
      { status: 500 }
    );
  }
}
