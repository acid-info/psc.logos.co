import Info from '@/components/Info'
import StyledTable from '@/components/Table'
import styled from '@emotion/styled'

const backgroundImageUrl = '/assets/background-reduced.png'

const HomeContainer = () => {
  return (
    <FullPageBackground>
      <Container>
        <HeroImage src="/assets/key-visual.svg" alt="logos" />
        <Title>PARALLEL SOCIETY CONGRESS</Title>
        <StyledTable />
        <Info />
      </Container>
    </FullPageBackground>
  )
}

const FullPageBackground = styled.div`
  width: 100vw;
  height: auto;
  padding-bottom: 280px;
  margin: 0;
  background-image: url(${backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding-bottom: 80px;
  }
`

const Container = styled.div`
  max-width: 1072px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 116px auto 0 auto;

  @media screen and (max-width: 1120px) {
    padding-inline: 16px;
  }

  @media screen and (max-width: 768px) {
    margin: 68px auto 0 auto;
    padding: 0 16px;
  }
`

const HeroImage = styled.img`
  margin: 0 auto;
  width: 91px;
  height: 94px;

  @media screen and (max-width: 768px) {
    width: 56px;
    height: 58px;
  }
`

const Title = styled.h1`
  font-size: 84px;
  font-style: normal;
  font-weight: 400;
  line-height: 84px;
  max-width: 904px;
  margin-top: 205px;

  @media screen and (max-width: 768px) {
    font-size: 58px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-top: 127px;
  }
`

export default HomeContainer
