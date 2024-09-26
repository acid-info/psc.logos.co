import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { Section, SectionTitle } from './StyledComponents'

const TicketsSection: React.FC = () => {
  return (
    <Section id="tickets">
      <Content>
        <SectionTitle>Tickets</SectionTitle>
        <Subtitle>
          Don&apos;t miss out! Be the first to experience <br />
          an unforgettable event. Get your tickets now!
        </Subtitle>
      </Content>
      <CustomLink href={'https://lu.ma/psc1'} target="_blank">
        <BuyTicketsButton>Buy Tickets</BuyTicketsButton>
      </CustomLink>
    </Section>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Subtitle = styled.p`
  color: var(--text-color);
  font-size: 18px;
  line-height: 24px;
  margin-top: 16px;
  text-align: left;
  font-weight: 400;
`

const BuyTicketsButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 64px;
  height: 114px;
  font-size: 16px;
  color: var(--text-color);
  background: none;
  border: 1px solid var(--text-color);
  cursor: pointer;

  &:hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const CustomLink = styled(Link)`
  text-decoration: none;
`

export default TicketsSection
