import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { BASE_URL } from "@/services";

export async function PATCH(req: NextRequest) {
  const payload = await req.json();
  const authId = req.headers.get("auth-id");
  const address = req.headers.get("address");

  try {
    const response = await axios.patch(`${BASE_URL}/user/onboard`, payload, {
      headers: {
        "ngrok-skip-browser-warning": "true",
        "auth-user-id": authId as string,
        Address: address as string,
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to onboard user" },
      { status: 500 }
    );
  }
}
