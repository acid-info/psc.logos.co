import styled from '@emotion/styled'
import { useState } from 'react'
import Navbar from './Navbar'

const HamburgerIcon = styled.div`
  display: none;
  position: fixed;
  top: 15px;
  left: 15px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 1100;

  @media (max-width: 991px) {
    display: block;
  }

  div {
    width: 100%;
    height: 4px;
    background-color: black;
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
  }
`

const MenuOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  @media (max-width: 991px) {
    display: none;
  }
`

const CloseButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
`

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <HamburgerIcon onClick={toggleMenu}>
        <img src="/assets/mobile-menu.svg" alt="mobile-menu" />
      </HamburgerIcon>
      <MenuOverlay isOpen={isOpen}>
        <CloseButton onClick={toggleMenu}>&times;</CloseButton>
        <Navbar />
      </MenuOverlay>
    </>
  )
}

export default HamburgerMenu
