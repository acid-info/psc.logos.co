import styled from '@emotion/styled'

const backgroundImageUrl = '/assets/background.png'

const HomeContainer = () => {
  return <FullPageBackground></FullPageBackground>
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
  justify-content: center;
  align-items: center;
`

export default HomeContainer
