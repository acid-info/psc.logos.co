export const getWebsiteUrl = () => {
  if (typeof window === 'undefined')
    // return process.env.NEXT_PUBLIC_SITE_URL || 'https://dev.free.technology'
    return 'http://psc.logos.co'

  const url = new URL(window.location.href)
  return url.origin
}
