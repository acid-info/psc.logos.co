import { uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import HamburgerMenu from './HamburgerMenu'
import Navbar from './Navbar'

const Container = styled.header<{ showNavbar: boolean }>`
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
  padding-top: ${({ showNavbar }) => (showNavbar ? '0' : '0')};
  margin-top: ${({ showNavbar }) =>
    showNavbar ? `-${uiConfigs.navbarRenderedHeight}px` : '0'};

  @media (max-width: 991px) {
    display: none;
  }
`

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlLogoVisibility = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false)
      } else {
        // Scrolling up
        setShowNavbar(true)
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
      <Container showNavbar={showNavbar}>
        <Navbar />
      </Container>
      <Banner showNavbarFromHeader={showNavbar} />
      <HamburgerMenu />
    </>
  )
}

export default Header
