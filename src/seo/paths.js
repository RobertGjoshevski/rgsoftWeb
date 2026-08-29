export const SITE_URL = 'https://rgsoft.org'
export const DEFAULT_LANG = 'en'
export const SUPPORTED_LANGS = ['en', 'mk']

const TRAILING_SLASH = /\/+$/

export function normalizePath(pathname = '/') {
  if (!pathname || pathname === '/') return '/'
  const trimmed = pathname.replace(TRAILING_SLASH, '')
  return trimmed || '/'
}

export function getLangFromPath(pathname = '/') {
  const path = normalizePath(pathname)
  if (path === '/mk' || path.startsWith('/mk/')) return 'mk'
  return 'en'
}

export function stripLangPrefix(pathname = '/') {
  const path = normalizePath(pathname)
  if (path === '/mk') return '/'
  if (path.startsWith('/mk/')) return path.slice(3) || '/'
  return path
}

export function localizePath(pathname = '/', lang = 'en') {
  const bare = stripLangPrefix(pathname)
  if (lang === 'mk') return bare === '/' ? '/mk' : `/mk${bare}`
  return bare
}

export function absoluteUrl(pathname = '/') {
  const path = normalizePath(pathname)
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

export function markdownUrl(pathname = '/', lang = 'en') {
  const bare = stripLangPrefix(pathname)
  if (bare === '/') {
    return lang === 'mk' ? `${SITE_URL}/mk/index.md` : `${SITE_URL}/index.md`
  }
  return lang === 'mk' ? `${SITE_URL}/mk${bare}.md` : `${SITE_URL}${bare}.md`
}

export const PAGE_KEYS = {
  '/': 'home',
  '/app-development': 'appDevelopment',
  '/website-development': 'websiteDevelopment',
  '/about': 'about',
  '/privacy': 'privacy'
}

export function getPageKey(pathname = '/') {
  return PAGE_KEYS[stripLangPrefix(pathname)] || 'home'
}
