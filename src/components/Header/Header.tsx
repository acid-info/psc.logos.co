import { uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import Navbar from './Navbar'

const Container = styled.header<{ showLogo: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  background: white;
  width: 97%;
  max-width: ${uiConfigs.maxContainerWidth}px;

  z-index: 1000;
  transition: all 0.3s ease-in-out;
  padding-top: ${({ showLogo }) => (showLogo ? '40px' : '0')};
  margin-top: ${({ showLogo }) => (showLogo ? '0' : '0')};

  @media (max-width: 991px) {
    display: none;
  }
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
    <>
      <Container showLogo={showLogo}>
        <Navbar />
      </Container>
      <HamburgerMenu />
    </>
  )
}

export default Header
