import styled from '@emotion/styled'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <Container>
      <KeyVisual src="/assets/key-visual.svg" alt="key-visual" />
      <Title>
        PARALLEL SOCIETY <MobileBreak />
        CONGRESS
      </Title>
      <Subtitle>Building beyond the nation state</Subtitle>
      <Descriptoin>
        As nation states lose their grasp, innovation emerges to imagine
        alternatives. Tap into the next wave of leaders, builders, and pioneers
        on the most important frontier of all. Expect activations, talks and
        workshops on building network states, pop-up communities, charter
        cities, decentralised governance and the technology that sustains it.
      </Descriptoin>
      <CTAContainer>
        <Info>Bangkok, Nov 11, 2024</Info>
        <Link href="https://lu.ma/psc1" target="_blank">
          <CTA>CLAIM YOUR SPOT</CTA>
        </Link>
      </CTAContainer>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 84px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 564px;

  a {
    text-decoration: none;
  }

  @media (max-width: 991px) {
    margin-bottom: 56px;
  }
`

const KeyVisual = styled.img`
  width: 55px;
  height: 57px;
  margin: 0 auto;

  @media (max-width: 991px) {
    width: 50px;
    height: 52px;
  }
`

const Title = styled.h1`
  font-size: 46px;
  line-height: 1;
  margin-top: 40px;
  letter-spacing: 0.02em !important;
  font-weight: 400;
  text-align: center;

  @media (max-width: 991px) {
    font-size: 30px;
    line-height: 1.2;
    margin-top: 36px;
  }
`

const Subtitle = styled.h2`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1.82px;
  text-transform: uppercase;
  text-align: center;

  margin-top: 24px;

  @media (max-width: 991px) {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 1.56px;
  }
`

const Descriptoin = styled.p`
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 32px;

  @media (max-width: 991px) {
    font-size: 12px;
    line-height: 20px;
  }
`

const MobileBreak = styled.br`
  display: none;

  @media (max-width: 500px) {
    display: block;
  }
`

const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  margin-inline: 16px;

  @media (max-width: 991px) {
    margin-top: 32px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-inline: 0;
    width: 100%;
    flex-grow: 1;
    & > * {
      flex-grow: 1;
      width: 100%;
    }
  }
`

const Info = styled.div`
  display: flex;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 40px;
  white-space: nowrap;
  font-size: 14px;
  line-height: 20px;

  border-top: 1px dashed #000;
  border-bottom: 1px dashed #000;
  border-left: 1px dashed #000;

  @media (max-width: 768px) {
    border-right: 1px dashed #000;
    border-bottom: none;
  }
`

const CTA = styled.button`
  display: flex;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #fff;
  background-color: #000;
  border: 1px solid #000;
  height: 40px;
  white-space: nowrap;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export default HeroSection
