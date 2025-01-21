import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { BASE_URL } from "@/services";

export async function GET(req: NextRequest) {
  const authUserId = req.headers.get("auth-user-id");
  const address = req.headers.get("address");

  try {
    const response = await axios.get(`${BASE_URL}/exam/streaks/week-view`, {
      headers: {
        "auth-user-id": authUserId as string,
        Address: address as string,
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch weekly streak" },
      { status: 500 }
    );
  }
}
