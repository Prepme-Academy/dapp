import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { BASE_URL } from "@/services";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const authId = req.headers.get("auth-id");
  const address = req.headers.get("address");

  try {
    const response = await axios.post(
      `${BASE_URL}/user/invite`,
      {
        email,
      },
      {
        headers: {
          "auth-user-id": authId as string,
          Address: address as string,
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to invite user" },
      { status: 500 }
    );
  }
}
