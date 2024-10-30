import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { InfraLinks } from './InfraLink'
import { LegalLinks } from './LegalLinks'
import { SocialLinks } from './SocialLinks'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <TopSection>
        <Copyright>Parallel Society Congress</Copyright>
        <SocialLinks />
        <ContactInfo>
          <h3>Partnership requests:</h3>
          <EmailLink href="mailto:events@logos.co">events@logos.co</EmailLink>
        </ContactInfo>
      </TopSection>
      <BottomSection>
        <BusinessUnits>
          <div>
            Built by{' '}
            <Link href="https://free.technology/" target="_blank">
              IFT
            </Link>
          </div>
          <div>
            Organised by{' '}
            <Link href="https://logos.co/" target="_blank">
              Logos
            </Link>
          </div>
        </BusinessUnits>
        <LegalLinks />
        <InfraLinks />
      </BottomSection>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 66px;

  a {
    text-decoration: underline;
    line-height: 20px;
    color: #000;
    font-size: 14px;
    width: fit-content;
  }

  a:visited,
  a:active {
    color: #000;
  }

  ul {
    margin-bottom: 0;
  }

  h3 {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 96px;
  }
`

const TopSection = styled.section`
  border-top: 1px dashed #000;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  width: 100%;
  color: #000;
  padding-top: 16px;
  padding-bottom: 66px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`

const Copyright = styled.p`
  line-height: 20px;
  font-size: 14px;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const EmailLink = styled.a`
  align-self: flex-start;
  margin-top: 24px;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`

const BottomSection = styled.section`
  padding-top: 16px;
  padding-bottom: 66px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border-top: 1px dashed #000;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`

const BusinessUnits = styled.div`
  color: #000;
  font-size: 14px;
  width: 50%;
`

// const MobileLineBreak = styled.br`
//   @media (min-width: 768px) {
//     display: none;
//   }
// `

export default Footer
