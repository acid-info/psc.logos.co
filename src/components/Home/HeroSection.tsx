import styled from '@emotion/styled'

const HeroSection = () => {
  return (
    <Container>
      <KeyVisual src="/assets/key-visual.svg" alt="key-visual" />
      <Title>
        PARALLEL
        <br />
        SOCIETY <MobileBreak />
        CONGRESS
      </Title>
      <Subtitle>Building beyond the nation state</Subtitle>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 88px;

  a {
    text-decoration: none;
  }

  @media (max-width: 991px) {
    margin-bottom: 16px;
    margin-top: 64px;
  }
`

const KeyVisual = styled.img`
  width: 49px;
  height: 51px;
  flex-shrink: 0;

  @media (max-width: 991px) {
    width: 38px;
    height: 39px;
  }
`

const Title = styled.h1`
  font-size: 46px;
  line-height: 1;
  margin-top: 24px;
  letter-spacing: 0.02em !important;
  font-weight: 400;
  margin-bottom: 24px;

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 1.2;
    margin-top: 36px;
  }
`

const Subtitle = styled.h2`
  font-family: 'Space Mono';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1.82px;
  text-transform: uppercase;
`

const MobileBreak = styled.br`
  display: none;

  @media (max-width: 500px) {
    display: block;
  }
`

export default HeroSection
