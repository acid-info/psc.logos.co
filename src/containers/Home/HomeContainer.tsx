import HomePage from '@/components/Home/HomePage'
import styled from '@emotion/styled'

const HomeContainer = () => {
  return (
    <Container>
      <HomePage />
      <HeroImage src="/assets/hero-image.png" alt="Hero" />
      <ParticipantsImage
        src="/assets/participants-image.png"
        alt="Participants"
      />
      <FooterImage src="/assets/footer-image.png" alt="Footer" />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
`

const HeroImage = styled.img`
  position: absolute;
  top: 0px;
  right: 0;

  /* margin-top: 140px;
  margin-right: -200px; */

  /* transform: rotate(-136.809deg); */
  flex-shrink: 0;

  @media (max-width: 991px) {
    width: 200px;
    top: -50px;
  }
`

const ParticipantsImage = styled.img`
  position: absolute;
  top: 2300px;
  left: 0;

  flex-shrink: 0;

  @media (max-width: 1450px) {
    display: none;
  }
`

const FooterImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 600px;
  z-index: -1;

  flex-shrink: 0;

  /* margin-right: -160px; */
  @media (max-width: 1200px) {
    display: none;
  }
`

export default HomeContainer
