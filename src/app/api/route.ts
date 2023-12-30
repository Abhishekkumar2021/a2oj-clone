import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
  return new NextResponse("You can access the api at /api/endpoint")
}

