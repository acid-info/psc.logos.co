import styled from '@emotion/styled'
import React from 'react'
import { Section, SectionTitle } from './StyledComponents'

interface Partner {
  logo: string
  name: string
}

const partnersData: Partner[] = [
  {
    logo: '/assets/partner-1.svg',
    name: 'Brand',
  },
  {
    logo: '/assets/partner-2.svg',
    name: 'Brand',
  },
  {
    logo: '/assets/partner-3.svg',
    name: 'Brand',
  },
]

const PartnersSection: React.FC = () => {
  return (
    <Section id="partners">
      <SectionTitle>Partners</SectionTitle>
      <PartnerList>
        {partnersData.map((partner, index) => (
          <PartnerItem key={index}>
            <LogoContainer>
              <Logo src={partner.logo} alt={partner.name} />
            </LogoContainer>
            <PartnerName>{partner.name}</PartnerName>
          </PartnerItem>
        ))}
      </PartnerList>
    </Section>
  )
}

const PartnerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 64px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const PartnerItem = styled.div`
  flex: 1 1 calc(33.333% - 16px);
  min-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 991px) {
    flex: 1 1 calc(50% - 16px);
  }
`

const LogoContainer = styled.div`
  border-radius: 999px;
  border: 1px solid var(--text-color);
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Logo = styled.img`
  max-width: 60%;
  max-height: 60%;
  object-fit: contain;
`

const PartnerName = styled.div`
  margin-top: 16px;
  font-size: 18px;
  color: var(--text-color);
  font-family: Space Mono, sans-serif;
`

export default PartnersSection
