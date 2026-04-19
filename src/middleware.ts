import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['uz', 'ru', 'en', 'tj']

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl

    // Exclude static files and API routes from middleware redirect
    if (
        pathname.startsWith('/_next') ||
        pathname.includes('/api/') ||
        pathname.match(/\.(.*)$/)
    ) {
        return NextResponse.next()
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    request.nextUrl.pathname = `/uz${pathname === '/' ? '' : pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
