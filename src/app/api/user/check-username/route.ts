import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { BASE_URL } from '@/services';

export async function POST(req: NextRequest) {
  const { username } = await req.json();

  try {
    const response = await axios.post(`${BASE_URL}/user/check-username`, {
      username,
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to check username' }, { status: 500 });
  }
}