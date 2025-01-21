import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { BASE_URL } from "@/services";

type Params = Promise<{ examId: string | number }>;

export async function POST(req: NextRequest, segmentData: { params: Params }) {
  const { examId } = await segmentData.params;
  const authUserId = req.headers.get("auth-user-id");
  const address = req.headers.get("address");

  try {
    const response = await axios.post(
      `${BASE_URL}/exam/start/${examId}`,
      {},
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
      { error: "Failed to start exam" },
      { status: 500 }
    );
  }
}
