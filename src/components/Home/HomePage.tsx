import { uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ArticlesSection from './ArticlesSection'
import FAQSection from './FAQSection'
import HeroSection from './HeroSection'
import MerchandiseSection from './MerchandiseSection'
import PartnersSection from './PartnersSection'
// import ProgrammeSection from './ProgrammeSection'
import ParticipantsSection from './ParticipantsSection'
// import TicketsSection from './TicketsSection'
import Link from 'next/link'
import AboutLogosSection from './AboutLogosSection'
import AgendasSection from './AgendasSection'
import LightningTalksSection from './LightningTalksSection'
import VideoSection from './VideoSection'

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <HeroSection />
        <VideoSection />
        {/* <EventInfoSection /> */}
        <ParticipantsSection />
        <PartnersSection />
        <AboutLogosSection />
        <AgendasSection />
        {/* <ProgrammeSection /> */}
        <ArticlesSection />
        <MerchandiseSection />
        {/* <LocationSection /> */}
        <FAQSection />
        {/* <TicketsSection /> */}
        <CustomLink href="https://lu.ma/psc1" target="_blank">
          <RegisterButton id="tickets">REGISTER FOR TICKETS</RegisterButton>
        </CustomLink>
        <LightningTalksSection />
      </Main>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  max-width: calc(
    ${uiConfigs.maxContainerWidth}px + var(--container-padding) * 2
  );
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Main = styled.main`
  --main-margin-top: 72px;

  margin-top: calc(var(--main-margin-top));

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`

const RegisterButton = styled.button`
  display: flex;
  padding: 34px 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border: none;
  color: white;
  background: black;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  width: 100%;
  margin-top: 104px;
  cursor: pointer;

  scroll-margin-top: 20px;

  @media (max-width: 768px) {
    padding: 6px 12px;
    margin-top: 56px;
    height: 76px;
    font-size: 12px;
    line-height: 16px;
  }
`

const CustomLink = styled(Link)`
  text-decoration: none;
`

export default HomePage
