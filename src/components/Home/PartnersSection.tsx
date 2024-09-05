import styled from '@emotion/styled'
import React from 'react'
import { Section, SectionTitle } from './StyledComponents'

interface Partner {
  logo: string
  name: string
}

const partnersData: Partner[] = [
  {
    logo: '/assets/partners/ift.svg',
    name: 'IFT',
  },
  {
    logo: '/assets/partners/logos.svg',
    name: 'Logos',
  },
  {
    logo: '/assets/partners/build.svg',
    name: 'Build Cities',
  },
  {
    logo: '/assets/partners/charter-cities-institute.svg',
    name: 'Charter Cities Institute',
  },
  {
    logo: '/assets/partners/funding-the-commons.svg',
    name: 'Funding the Commons',
  },
  {
    logo: '/assets/partners/kleros.svg',
    name: 'Kleros',
  },
  {
    logo: '/assets/partners/codex.svg',
    name: 'Codex',
  },
  {
    logo: '/assets/partners/keycard.svg',
    name: 'Keycard',
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 64px;

  @media (max-width: 991px) {
    margin-top: 40px;
    display: flex;
    overflow-x: auto;
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
  text-align: center;
  font-family: Courier;
`

export default PartnersSection
