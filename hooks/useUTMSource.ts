import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useUTMSource = () => {
  const router = useRouter()
  const { utm_source } = router.query

  useEffect(() => {
    if (utm_source) {
      const links = document.querySelectorAll<HTMLAnchorElement>(
        'a[href^="https://lu.ma/psc1"]',
      )

      links.forEach((link) => {
        if (link && link.href) {
          const url = new URL(link.href)
          url.searchParams.set('utm_source', utm_source as string)
          link.href = url.toString()
        }
      })
    }
  }, [utm_source])
}

export default useUTMSource
