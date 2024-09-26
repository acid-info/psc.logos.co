import styled from '@emotion/styled'
import Link from 'next/link'

const EventInfoSection = () => {
  const copyLocation = () => {
    navigator.clipboard.writeText('Bangkok, Slowcombo')

    alert('Location copied to clipboard')
  }

  return (
    <Container>
      <Link href="https://lu.ma/psc1" target="_blank">
        <RSVPButton>RSVP</RSVPButton>
      </Link>
      <TableContainer>
        <TableSection>
          <TableContent>
            Bangkok, Slowcombo
            <CopyButton onClick={copyLocation}>
              <img src="/assets/copy.svg" alt="copy-icon" />
            </CopyButton>
          </TableContent>
        </TableSection>
        <TableSection>
          <TableContent>November 11, 2024</TableContent>
        </TableSection>
      </TableContainer>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 48px;

  a {
    text-decoration: none;
  }

  @media (max-width: 991px) {
    margin-bottom: 16px;
    margin-top: 64px;
  }
`

const TableContainer = styled.div`
  display: flex;
  margin-top: 72px;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
    margin-top: 40px;
  }
`

const TableSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

const TableContent = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  letter-spacing: 1px;
  padding: 16px 0;
  letter-spacing: 1.82px;
  text-transform: uppercase;
  border-top: 1px solid black;
  width: 100%;

  @media (max-width: 991px) {
    &:first-of-type {
      border-top: none;
    }
  }
`

const RSVPButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 74px;

  border: 1px solid var(--text-color);
  color: var(--text-color);
  background-color: var(--background-color);

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 72px;

  width: 100%;
  cursor: pointer;

  :hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }

  @media (max-width: 991px) {
    height: 72px;
    font-size: 12px;
    margin-top: 64px;
  }
`

const CopyButton = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export default EventInfoSection
