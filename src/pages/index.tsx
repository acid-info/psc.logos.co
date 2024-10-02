import { SEO } from '@/components/SEO'
import HomeContainer from '@/containers/Home/HomeContainer'
import useUTMSource from '../../hooks/useUTMSource'

export default function HomePage() {
  useUTMSource()

  return (
    <>
      <SEO />
      <HomeContainer />
    </>
  )
}
