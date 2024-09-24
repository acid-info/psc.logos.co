import styled from '@emotion/styled'
import React from 'react'
import { Section, SectionTitle } from './StyledComponents'

interface Partner {
  logo: string
  name: string
}

const partnersData: Partner[] = [
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
    logo: '/assets/partners/kleros.svg',
    name: 'Kleros',
  },
  {
    logo: '/assets/partners/funding-the-commons.svg',
    name: 'Funding the Commons',
  },
  {
    logo: '/assets/partners/codex.svg',
    name: 'Codex',
  },
  {
    logo: '/assets/partners/keycard.svg',
    name: 'Keycard',
  },
  {
    logo: '/assets/partners/ift.svg',
    name: 'IFT',
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
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 24px;
  padding-bottom: 56px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 16px;
  }
`

const PartnerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogoContainer = styled.div`
  border-radius: 999px;
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
  line-height: 24px;
`

export default PartnersSection
