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
      <Link href="https://maps.app.goo.gl/9Qy53CnTXBSUA9zB8" target="_blank">
        <LocationDisplay></LocationDisplay>
      </Link>
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

const LocationDisplay = styled.img`
  margin-top: 64px;
  width: 100%;
  padding-top: 38%;
  margin-top: 64px;

  color: var(--text-color);
  background-image: url('/assets/map-desktop.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (max-width: 500px) {
    padding-top: 80%;
    background-image: url('/assets/map-mobile.svg');
    margin-top: 32px;
  }
`

export default LocationSection
