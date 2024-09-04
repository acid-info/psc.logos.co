import { uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ArticlesSection from './ArticlesSection'
import EventInfoSection from './EventInfoSection'
import FAQSection from './FAQSection'
import HeroSection from './HeroSection'
import LocationSection from './LocationSection'
import MerchandiseSection from './MerchandiseSection'
import PartnersSection from './PartnersSection'
// import ProgrammeSection from './ProgrammeSection'
import ParticipantsSection from './SpeakersSection'
// import TicketsSection from './TicketsSection'
import AboutLogosSection from './AboutLogosSection'
import VideoSection from './VideoSection'

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <HeroSection />
        <VideoSection />
        <EventInfoSection />
        <ParticipantsSection />
        <PartnersSection />
        <AboutLogosSection />
        {/* <ProgrammeSection /> */}
        <ArticlesSection />
        <MerchandiseSection />
        <LocationSection />
        <FAQSection />
        {/* <TicketsSection /> */}
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
  --main-margin-top: 94px;

  margin-top: calc(var(--main-margin-top));

  @media (max-width: 991px) {
    margin-top: 100px;
  }
`

export default HomePage
