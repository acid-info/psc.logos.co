import styled from '@emotion/styled'
import Link from 'next/link'
import { useState } from 'react'
import { navItems } from './Navbar'

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
  z-index: 9999;

  @media (min-width: 991px) {
    display: none;
  }
`

const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  cursor: pointer;
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 100px;
`

const NavItem = styled(Link)`
  font-size: 21px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 4.2px;
  margin-left: 16px;
  text-transform: uppercase;

  color: var(--text-color);
  text-decoration: none;
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
        <CloseButton onClick={toggleMenu}>
          <img src="/assets/close-icon.svg" alt="close" />
        </CloseButton>
        <Nav>
          {navItems.map((item, index) => (
            <NavItem onClick={toggleMenu} key={index} href={item.href}>
              {item.name}
            </NavItem>
          ))}
        </Nav>
      </MenuOverlay>
    </>
  )
}

export default HamburgerMenu
