import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { BASE_URL } from '@/services';

export async function POST(req: NextRequest) {
  const payload = await req.json();

  try {
    const response = await axios.post(`${BASE_URL}/user/create`, payload);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}