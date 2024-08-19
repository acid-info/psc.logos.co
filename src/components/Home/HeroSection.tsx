import styled from '@emotion/styled'

const Container = styled.div`
  margin-bottom: 118px;

  @media (max-width: 991px) {
    margin-bottom: 58px;
  }
`

const KeyVisual = styled.img`
  width: 92px;
  height: 95px;
  flex-shrink: 0;

  @media (max-width: 991px) {
    width: 54px;
    height: 53px;
  }
`

const Heading = styled.h1`
  font-size: 84px;
  line-height: 1;
  margin-top: 56px;

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 1.2;
    margin-top: 36px;
  }
`

const MobileBreak = styled.br`
  display: none;

  @media (max-width: 500px) {
    display: block;
  }
`

const HeroSection = () => {
  return (
    <Container>
      <KeyVisual src="/assets/key-visual.svg" alt="key-visual" />
      <Heading>
        PARALLEL
        <br />
        SOCIETY <MobileBreak />
        CONGRESS
      </Heading>
    </Container>
  )
}

export default HeroSection
