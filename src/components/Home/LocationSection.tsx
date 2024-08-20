import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { Section, SectionTitle } from './StyledComponents'

const LocationSection: React.FC = () => {
  return (
    <Section id="location">
      <Header>
        <SectionTitle>Location</SectionTitle>
        <Link href="https://maps.app.goo.gl/9Qy53CnTXBSUA9zB8" target="_blank">
          <MapButton>See on map</MapButton>
        </Link>
      </Header>
      <LocationDisplay>Slowcombo, Bangkok</LocationDisplay>
    </Section>
  )
}

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`

const MapButton = styled.button`
  font-size: 12px;
  padding: 6px 12px;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  background-color: var(--background-color);
  cursor: pointer;

  :hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }
`

const LocationDisplay = styled.div`
  border-radius: 999px;
  margin-top: 64px;
  height: 426px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--text-color);
  border: 1px solid var(--text-color);
  @media (max-width: 991px) {
    margin-top: 40px;
    height: 300px;
  }
`

export default LocationSection
