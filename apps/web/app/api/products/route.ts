// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import {cache} from 'react'

export async function GET() {
  try {
    const response = await fetch('https://dummyjson.com/products/search?q=watch');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return NextResponse.json({data},{status:200});
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, {status:500});
  }
}
