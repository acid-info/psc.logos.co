import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

export const navItems = [
  { name: 'Collaborators', href: '#collaborators' },
  { name: 'Participants', href: '#participants' },
  { name: 'About', href: '#about-logos' },
  { name: 'Agenda', href: '#agenda' },
  { name: 'Articles', href: '#articles' },
  // { name: 'Location', href: '#location' },
  // { name: 'Programme', href: '#programme' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Lightning Talks', href: '#lightning-talks' },
]

const Navbar: React.FC = () => {
  return (
    <Nav>
      {navItems.map((item, index) => (
        <NavItem key={index} href={item.href}>
          {item.name}
        </NavItem>
      ))}
      <Link href="https://lu.ma/psc1" target="_blank">
        <TicketButton>TICKETS</TicketButton>
      </Link>
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

  a {
    text-decoration: none;
  }
`

const NavItem = styled(Link)`
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 2.6px;
  text-decoration: none;
  color: var(--text-color);
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: var(--text-color);
    text-decoration: underline;
  }
`

const TicketButton = styled.button`
  display: flex;
  padding: 6px 28px;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  background: white;

  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  cursor: pointer;
`

export default Navbar
