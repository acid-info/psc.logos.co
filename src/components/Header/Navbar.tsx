import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Location', href: '#location' },
  { name: 'Programme', href: '#programme' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Merchandise', href: '#merchandise' },
  { name: 'Partners', href: '#partners' },
  { name: 'Articles', href: '#articles' },
  { name: 'Tickets', href: '#tickets' },
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
