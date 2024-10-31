import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default function WorldDebt() {
  const [debt, setDebt] = useState(72748553737909)

  //   async function fetchDebtData() {
  //     try {
  //       const response = await fetch(
  //         'https://api.worldbank.org/v2/country/all/indicator/DT.DOD.DECT.CD?format=json&date=2022:2023&per_page=500',
  //       )
  //       const data = await response.json()

  //       const debtData = data[1]

  //       // Calculate the total debt by summing up the values
  //       const totalDebt = debtData.reduce((sum, country) => {
  //         return sum + (country.value || 0)
  //       }, 0)

  //       setDebt(totalDebt)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }

  //   useEffect(() => {
  //     fetchDebtData()
  //   }, [])

  useEffect(() => {
    if (debt === null) return

    const interval = setInterval(() => {
      setDebt(
        // increase 0.00000000005% of the debt every 2 seconds
        debt + debt * 0.0000000000005,
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [debt])

  return (
    <Background>
      <Content>
        <h1>World Debt Clock</h1>
        <p>${numberWithCommas(debt).split('.')[0]}</p>
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
    font-size: 52px;
    text-align: center;
  }

  p {
    font-size: 60px;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
  }
`

const Content = styled.div``
