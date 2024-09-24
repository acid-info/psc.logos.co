import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

export const LegalLinks: React.FC = () => {
  return (
    <LegalLinksWrapper>
      <h3>Legal:</h3>
      <LinksList>
        <Link href="https://logos.co/terms" target="_blank">
          Terms of Use
        </Link>
        <Link href="https://logos.co/privacy-policy" target="_blank">
          Privacy Policy
        </Link>
        <Link href="https://logos.co/security" target="_blank">
          Security
        </Link>
      </LinksList>
    </LegalLinksWrapper>
  )
}

const LegalLinksWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  color: #000;
  font-size: 14px;
`

const LinksList = styled.ul`
  display: flex;
  margin-top: 24px;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  padding: 0;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`
