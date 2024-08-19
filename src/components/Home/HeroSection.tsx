import styled from '@emotion/styled'

const Container = styled.div`
  margin-bottom: 118px;
`

const KeyVisual = styled.img`
  width: 92px;
  height: 95px;
  flex-shrink: 0;
`

const Heading = styled.h1`
  font-size: 84px;
  line-height: 1;
  margin-top: 56px;

  @media (max-width: 767px) {
    font-size: 32px;
  }
`

const HeroSection = () => {
  return (
    <Container>
      <KeyVisual src="/assets/key-visual.svg" alt="key-visual" />
      <Heading>
        PARALLEL
        <br />
        SOCIETY CONGRESS
      </Heading>
    </Container>
  )
}

export default HeroSection
