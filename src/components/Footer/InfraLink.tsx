import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

export const InfraLinks: React.FC = () => {
  return (
    <InfraLinksWrapper>
      <h3>Infrastructure:</h3>
      <LinksList>
        <Link href="https://waku.org/" target="_blank">
          Waku
        </Link>
        <Link href="https://nimbus.team/" target="_blank">
          Nimbus
        </Link>
        <Link href="https://codex.storage/" target="_blank">
          Codex
        </Link>
        <Link href="https://nomos.tech/" target="_blank">
          Nomos
        </Link>
        <Link href="https://keycard.tech" target="_blank">
          Keycard
        </Link>
        <Link href="https://logos.co/" target="_blank">
          Logos
        </Link>
      </LinksList>
    </InfraLinksWrapper>
  )
}

const InfraLinksWrapper = styled.nav`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: #000;
  white-space: nowrap;
  font-size: 14px;
`

const LinksList = styled.ul`
  align-self: flex-start;
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
