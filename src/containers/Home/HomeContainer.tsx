import HomePage from '@/components/Home/HomePage'
import styled from '@emotion/styled'

const HomeContainer = () => {
  return (
    <Container>
      <HomePage />
      <HeroImage src="/assets/hero-image-cut.png" alt="Hero" />
      <FooterImage src="/assets/footer-image-cut.png" alt="Footer" />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
`

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  /* margin-top: 140px;
  margin-right: -200px; */

  /* transform: rotate(-136.809deg); */
  flex-shrink: 0;

  @media (max-width: 991px) {
    width: 200px;
    top: -60px;
  }
`

const FooterImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;

  flex-shrink: 0;

  /* margin-right: -160px; */

  @media (max-width: 991px) {
    width: 180px;
    margin-right: -60px;
  }
`

export default HomeContainer
