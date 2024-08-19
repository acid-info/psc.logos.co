import styled from '@emotion/styled'

export const Section = styled.section`
  margin-top: 120px;
  width: 100%;
  scroll-margin-top: 80px;

  @media (max-width: 991px) {
    margin-top: 80px;
  }
`

export const SectionTitle = styled.h2`
  font-size: 48px;
  letter-spacing: 10px;
  line-height: 56px;
  text-transform: uppercase;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 991px) {
    font-size: 28px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 5.88px;
  }
`
