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
`

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  /* margin-top: 140px;
  margin-right: -200px; */

  /* transform: rotate(-136.809deg); */
  flex-shrink: 0;
`

const FooterImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;

  flex-shrink: 0;

  scale: 1.1;

  margin-bottom: -40px;
  /* margin-right: -160px; */
`

export default HomeContainer
