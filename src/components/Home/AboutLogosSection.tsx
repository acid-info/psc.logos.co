import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { Section, SectionTitle } from './StyledComponents'

const AboutLogosSection: React.FC = () => {
  return (
    <Section id="about-logos">
      <Container>
        <SectionTitle>About Logos</SectionTitle>
        <Subtitle>
          Logos is a cultural movement to reimagine the future of human
          governance beyond the nation state. Rooted in the blockchain
          revolution, Logos is building a decentralised, politically neutral
          technology stack that supports the creation of parallel institutions
          and self-sovereign digital communities.
        </Subtitle>
        <Paragraph>
          Our vision is to bring greater freedom and prosperity by providing the
          next generation of governing services, public goods, and social
          institutions to anyone with an internet connection.
          <br />
          <br />
          ​Read our Manifesto for a deeper dive into our ideals and technology.
        </Paragraph>
        <Link href="https://logos.co/manifesto/" target="_blank">
          <Button>Manifesto</Button>
        </Link>
      </Container>
    </Section>
  )
}

const Container = styled.div`
  a {
    text-decoration: none;
  }
`

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  margin-top: 64px;
  margin-bottom: 32px;

  @media (max-width: 991px) {
    font-size: 20px;
    line-height: 28px;

    margin-top: 36px;
    margin-bottom: 24px;
  }
`

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 991px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const Button = styled.button`
  display: block;
  margin-top: 32px;
  padding: 10px 40px;
  font-size: 14px;
  color: var(--text-color);
  background: none;
  border: 1px solid var(--text-color);
  cursor: pointer;

  &:hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }

  @media (max-width: 991px) {
    margin-top: 24px;
  }
`

export default AboutLogosSection
