import HomePage from '@/components/Home/HomePage'
import styled from '@emotion/styled'

const HomeContainer = () => {
  return (
    <Container>
      <HomePage />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
`

export default HomeContainer
