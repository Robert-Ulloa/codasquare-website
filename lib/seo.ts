export const siteUrl = 'https://codasquare.com'
export const siteName = 'CODA for Square'

export function pageMeta(title: string, description: string, path: string) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${siteName}`, description, url: path },
    twitter: { title: `${title} | ${siteName}`, description },
  }
}
