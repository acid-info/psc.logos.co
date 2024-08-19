import { uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Container = styled.header<{ showLogo: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  background: white;
  width: 100%;
  max-width: ${uiConfigs.maxContainerWidth}px;

  z-index: 1000;
  transition: all 0.3s ease-in-out;
  padding-top: ${({ showLogo }) => (showLogo ? '48px' : '0')};
  margin-top: ${({ showLogo }) => (showLogo ? '0' : '-124px')};
`

const Logo = styled.img<{ showLogo: boolean }>`
  width: 69px;
  height: 75px;
  flex-shrink: 0;
  margin-bottom: 48px;
  opacity: ${({ showLogo }) => (showLogo ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`

const Header = () => {
  const [showLogo, setShowLogo] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlLogoVisibility = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowLogo(false)
      } else {
        // Scrolling up
        setShowLogo(true)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlLogoVisibility)
      return () => {
        window.removeEventListener('scroll', controlLogoVisibility)
      }
    }
  }, [lastScrollY])

  return (
    <Container showLogo={showLogo}>
      <Logo src="/assets/logos.svg" alt="Logo" showLogo={showLogo} />
      <Navbar />
    </Container>
  )
}

export default Header
