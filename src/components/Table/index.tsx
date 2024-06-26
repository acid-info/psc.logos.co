import styled from '@emotion/styled'

const TableContainer = styled.div`
  width: 100%;
  margin-top: 120px;
  font-family: 'Andale Mono', Courier, monospace;
  color: #ffffff;
  font-size: 14px;
  border-top: 1px solid #ffffff;
  line-height: 20px;
  letter-spacing: 1.82px;

  @media screen and (max-width: 768px) {
    margin-top: 37px;
  }
`

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #ffffff;
`

const TableLabel = styled.div`
  text-transform: uppercase;
`

const TableValue = styled.div``

const StyledTable = () => {
  return (
    <TableContainer>
      <TableRow>
        <TableLabel>Location:</TableLabel>
        <TableValue>Slowcombo, Bangkok</TableValue>
      </TableRow>
      <TableRow>
        <TableLabel>Date:</TableLabel>
        <TableValue>November 11, 2024</TableValue>
      </TableRow>
    </TableContainer>
  )
}

export default StyledTable
