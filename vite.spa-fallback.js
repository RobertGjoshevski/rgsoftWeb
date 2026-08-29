import fs from 'node:fs'
import path from 'node:path'

const SPA_PATHS = [
  'about',
  'app-development',
  'website-development',
  'privacy',
  'mk',
  'mk/about',
  'mk/app-development',
  'mk/website-development',
  'mk/privacy'
]

export function spaFallbackPlugin() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const dist = path.resolve('dist')
      const index = path.join(dist, 'index.html')
      if (!fs.existsSync(index)) return
      const html = fs.readFileSync(index, 'utf8')
      fs.writeFileSync(path.join(dist, '404.html'), html)
      fs.writeFileSync(path.join(dist, '.nojekyll'), '')
      for (const route of SPA_PATHS) {
        const dir = path.join(dist, route)
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), html)
      }
    }
  }
}
