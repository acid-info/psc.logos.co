import styled from '@emotion/styled'
import React from 'react'
import { Section, SectionTitle } from './StyledComponents'

interface ProgrammeItem {
  date: string
  venue: string
  location: string
  time: string
}

const programmeData: ProgrammeItem[] = [
  {
    date: 'Aug 4',
    venue: '69DB',
    location: 'Slowcombo, Bangkok',
    time: '20:00 - 21:00',
  },
  {
    date: 'Aug 6',
    venue: '69DB',
    location: 'Slowcombo, Bangkok',
    time: '20:00 - 21:00',
  },
  {
    date: 'Aug 7',
    venue: '69DB',
    location: 'Slowcombo, Bangkok',
    time: '20:00 - 21:00',
  },
]

const ProgrammeSection: React.FC = () => {
  return (
    <Section id="programme">
      <SectionTitle>Programme</SectionTitle>
      <List>
        {programmeData.map((item, index) => (
          <AccordionItem key={index}>
            <ItemInfo>
              <FirstGroup>
                <span>{item.date}</span>
                <span>{item.venue}</span>
              </FirstGroup>
              <SecondGroup>
                <span>{item.location}</span>
                <Time>{item.time}</Time>
              </SecondGroup>
            </ItemInfo>
          </AccordionItem>
        ))}
      </List>
    </Section>
  )
}

const List = styled.div`
  margin-top: 64px;
  width: 100%;
  font-size: 24px;
  color: var(--text-color);
  line-height: 1;

  @media (max-width: 991px) {
    margin-top: 40px;
    font-size: 18px;
  }
`

const AccordionItem = styled.div`
  border-bottom: 1px solid var(--text-color);
  display: flex;
  min-height: 64px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 991px) {
    width: 100%;
  }
`

const FirstGroup = styled.div`
  display: flex;
  gap: 48px;
  margin-right: 48px;

  span {
    white-space: nowrap;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 8px;

    & > span:last-of-type {
      font-size: 14px;
    }
  }
`

const SecondGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > span {
    margin-right: auto;
    white-space: nowrap;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 8px;
    text-align: right;
    margin-left: auto;
    width: unset;

    & > div:last-of-type {
      font-size: 14px;
    }
  }
`

const Time = styled.div`
  @media (max-width: 991px) {
    width: 100%;
  }
`

export default ProgrammeSection
