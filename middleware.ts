import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware (request: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  console.log({ session })

  return NextResponse.next()
}
