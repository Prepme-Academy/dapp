import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { BASE_URL } from "@/services";

export async function POST(req: NextRequest) {
  const { emails } = await req.json();
  const authId = req.headers.get("auth-user-id");
  const address = req.headers.get("address");

  try {
    const responsePromises = emails.map((email: string) =>
      axios.post(
        `${BASE_URL}/user/invite`,
        { email },
        {
          headers: {
            "auth-user-id": authId as string,
            Address: address as string,
          },
        }
      )
    );

    const responses = await Promise.all(responsePromises);
    const results = responses.map((res) => res.data);

    return NextResponse.json(results);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to invite user" },
      { status: 500 }
    );
  }
}
