import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

export const SocialLinks: React.FC = () => {
  return (
    <SocialLinksWrapper>
      <h3>Socials:</h3>
      <LinksList>
        <Link href="https://discord.com/invite/logosnetwork" target="_blank">
          Discord
        </Link>
        <Link href="https://www.youtube.com/@LogosNetwork" target="_blank">
          YouTube
        </Link>
        <Link href="https://x.com/Logos_network" target="_blank">
          X
        </Link>
      </LinksList>
    </SocialLinksWrapper>
  )
}

const SocialLinksWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`

const LinksList = styled.ul`
  display: flex;
  margin-top: 24px;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  padding: 0;

  @media (max-width: 991px) {
    white-space: initial;
  }
`
