// pages/api/coupons.js
import { NextResponse } from 'next/server';

export async function GET() {
  // Define the available coupons
    const coupons = [
      { code: "SAVE10", type: "percent", value: 10 },  
      { code: "FLAT50", type: "fixed", value: 50 },    
      { code: "WELCOME20", type: "percent", value: 20 }, 
      { code: "SUMMER25", type: "fixed", value: 25 },  
    ];
  
    // Return the coupons as a JSON response
    return NextResponse.json({data:coupons},{status:200});
  }
  