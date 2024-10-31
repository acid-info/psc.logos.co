import styled from '@emotion/styled'

export default function WorldDebt() {
  async function fetchDebtData() {
    try {
      const response = await fetch(
        'https://api.worldbank.org/v2/country/all/indicator/DT.DOD.DECT.CD?format=json&date=2022:2023&per_page=500',
      )
      const data = await response.json()

      const debtData = data[1]

      const excludeRegions: string[] = []

      console.log('debtData', debtData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  return (
    <Background>
      <Content>
        <h1>World Debt Clocks</h1>
      </Content>
    </Background>
  )
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 36px;
    text-align: center;
  }
`

const Content = styled.div``
