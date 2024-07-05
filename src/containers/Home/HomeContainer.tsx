import Info from '@/components/Info'
import StyledTable from '@/components/Table'
import styled from '@emotion/styled'

const backgroundImageUrl = '/assets/background.png'

const HomeContainer = () => {
  return (
    <FullPageBackground>
      <Container>
        <HeroImage src="/assets/logos.svg" alt="logos" />
        <Title>PARALLEL SOCIETY CONGRESS</Title>
        <StyledTable />
        <Info />
      </Container>
    </FullPageBackground>
  )
}

const FullPageBackground = styled.div`
  width: 100vw;
  height: 1859px;
  margin: 0;
  background-image: url(${backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding-bottom: 20px;
  }
`

const Container = styled.div`
  max-width: 1072px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 174px auto 0 auto;

  @media screen and (max-width: 1120px) {
    padding-inline: 16px;
  }

  @media screen and (max-width: 768px) {
    margin: 52px auto 0 auto;
    padding: 0 16px;
  }
`

const HeroImage = styled.img`
  margin: 0 auto;
  width: 137px;
  height: 149px;

  @media screen and (max-width: 768px) {
    width: 93px;
    height: 96px;
  }
`

const Title = styled.h1`
  font-size: 92px;
  font-style: normal;
  font-weight: 400;
  line-height: 84px;
  max-width: 904px;
  margin-top: 230px;

  @media screen and (max-width: 768px) {
    font-size: 58px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-top: 100px;
  }
`

export default HomeContainer
