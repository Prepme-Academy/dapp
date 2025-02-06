import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { BASE_URL } from "@/services";

type Params = Promise<{ attemptId: string | number }>;

export async function POST(req: NextRequest, segmentData: { params: Params }) {
  const { attemptId } = await segmentData.params;
  const authUserId = req.headers.get("auth-user-id");
  const address = req.headers.get("address");
  const data = await req.json();

  try {
    const response = await axios.post(
      `${BASE_URL}/exam/submit/${attemptId}`,
      data,
      {
        headers: {
          "auth-user-id": authUserId as string,
          Address: address as string,
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to submit exam" },
      { status: 500 }
    );
  }
}
