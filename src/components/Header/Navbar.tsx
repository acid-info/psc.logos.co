import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Speakers', href: '#participants' },
  { name: 'Partners', href: '#partners' },
  { name: 'About', href: '#about-logos' },
  { name: 'Articles', href: '#articles' },
  { name: 'Merchandise', href: '#merchandise' },
  // { name: 'Location', href: '#location' },
  // { name: 'Programme', href: '#programme' },
  { name: 'FAQs', href: '#faqs' },
]

const Navbar: React.FC = () => {
  return (
    <Nav>
      {navItems.map((item, index) => (
        <NavItem key={index} href={item.href}>
          {item.name}
        </NavItem>
      ))}
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: white;
  padding: 16px 0;

  transition: padding 0.3s ease-in-out;
`

const NavItem = styled(Link)`
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 2.6px;
  text-decoration: none;
  color: var(--text-color);
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: var(--text-color);
    text-decoration: underline;
  }
`

export default Navbar
