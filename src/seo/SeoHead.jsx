import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PAGE_SEO, buildGraph } from './config'
import {
  SITE_URL,
  absoluteUrl,
  getLangFromPath,
  getPageKey,
  localizePath,
  markdownUrl
} from './paths'

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    Object.entries(attrs).forEach(([key, value]) => {
      if (key !== 'content') el.setAttribute(key, value)
    })
    document.head.appendChild(el)
  }
  if (attrs.content != null) el.setAttribute('content', attrs.content)
}

function upsertLink(rel, href, extra = {}) {
  const extraKey = extra.hreflang
    ? `[hreflang="${extra.hreflang}"]`
    : extra.type
      ? `[type="${extra.type}"]`
      : extra.hreflang === undefined && extra.type === undefined
        ? ':not([hreflang]):not([type])'
        : ''
  let el = document.head.querySelector(`link[rel="${rel}"]${extraKey}`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
  Object.entries(extra).forEach(([key, value]) => el.setAttribute(key, value))
}

const SeoHead = () => {
  const location = useLocation()

  useEffect(() => {
    const lang = getLangFromPath(location.pathname)
    const pageKey = getPageKey(location.pathname)
    const seo = PAGE_SEO[lang][pageKey]
    const path = location.pathname.replace(/\/+$/, '') || '/'
    const canonical = absoluteUrl(path)
    const enPath = localizePath(path, 'en')
    const mkPath = localizePath(path, 'mk')
    const ogLocale = lang === 'mk' ? 'mk_MK' : 'en_US'
    const ogLocaleAlt = lang === 'mk' ? 'en_US' : 'mk_MK'

    document.title = seo.title
    document.documentElement.lang = lang === 'mk' ? 'mk' : 'en'

    upsertMeta('meta[name="description"]', { name: 'description', content: seo.description })
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: seo.keywords })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    })
    upsertMeta('meta[name="author"]', { name: 'author', content: 'RGsoft' })
    upsertMeta('meta[name="geo.region"]', { name: 'geo.region', content: 'MK-85' })
    upsertMeta('meta[name="geo.placename"]', { name: 'geo.placename', content: 'Skopje' })
    upsertMeta('meta[name="geo.position"]', { name: 'geo.position', content: '42.035;21.53' })
    upsertMeta('meta[name="ICBM"]', { name: 'ICBM', content: '42.035, 21.53' })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'RGsoft' })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: `${SITE_URL}/og-image.png` })
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' })
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: ogLocale })
    upsertMeta('meta[property="og:locale:alternate"]', { property: 'og:locale:alternate', content: ogLocaleAlt })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: `${SITE_URL}/og-image.png` })

    upsertLink('canonical', canonical)
    upsertLink('describedby', `${SITE_URL}/llms.txt`)
    upsertLink('alternate', markdownUrl(path, lang), { type: 'text/markdown' })
    upsertLink('alternate', absoluteUrl(enPath), { hreflang: 'en' })
    upsertLink('alternate', absoluteUrl(mkPath), { hreflang: 'mk' })
    upsertLink('alternate', absoluteUrl(enPath), { hreflang: 'x-default' })

    const graph = buildGraph({
      lang,
      pageKey,
      path,
      title: seo.title,
      description: seo.description
    })
    let jsonLd = document.getElementById('rgsoft-jsonld')
    if (!jsonLd) {
      jsonLd = document.createElement('script')
      jsonLd.type = 'application/ld+json'
      jsonLd.id = 'rgsoft-jsonld'
      document.head.appendChild(jsonLd)
    }
    jsonLd.textContent = JSON.stringify(graph)
  }, [location.pathname])

  return null
}

export default SeoHead
