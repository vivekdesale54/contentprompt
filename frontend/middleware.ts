import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { supabase } from './src/app/supabase-client';

export async function middleware(req: NextRequest) {
  const { data: { session } } = await supabase.auth.getSession()

  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/auth', req.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
}
