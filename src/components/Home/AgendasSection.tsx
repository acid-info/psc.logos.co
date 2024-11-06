import { agendaData } from '@/configs/data.configs'
import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useState } from 'react'
import { Section, SectionTitle } from './StyledComponents'

type Session = {
  title: string
  speakers: string[]
  startTime: string
  endTime: string
  shrink?: boolean
  highlight?: boolean
  merged?: boolean
  removeBorderRight?: boolean
  gray?: boolean
}

type AgendaColumnProps = {
  sessions: Session[]
  columnKey: string
  mobileSelected: string
  seeMore: boolean
}

const AgendasSection: React.FC = () => {
  const [mobileSelected, setMobileSelected] = useState('mainStage')
  const [seeMore, setSeeMore] = useState(false)

  return (
    <Section id="agenda">
      <SectionTitle>Agenda</SectionTitle>
      <StyledTable>
        <HeaderContainer>
          <div></div>
          <ColumnButton
            isMobileActive={mobileSelected === 'mainStage'}
            onClick={() => setMobileSelected('mainStage')}
          >
            Main Stage
          </ColumnButton>
          <div></div>
          <ColumnButton
            isMobileActive={mobileSelected === 'demoRoom'}
            onClick={() => setMobileSelected('demoRoom')}
          >
            Demo Room
          </ColumnButton>
          <div></div>
          <ColumnButton
            isMobileActive={mobileSelected === 'roundTable'}
            onClick={() => setMobileSelected('roundTable')}
          >
            Round Table
          </ColumnButton>
        </HeaderContainer>
        <Items>
          <SessionColumn
            sessions={agendaData.mainStage}
            columnKey="mainStage"
            mobileSelected={mobileSelected}
            seeMore={seeMore}
          />
          <SessionColumn
            sessions={agendaData.demoRoom}
            columnKey="demoRoom"
            mobileSelected={mobileSelected}
            seeMore={seeMore}
          />
          <SessionColumn
            sessions={agendaData.roundTable}
            columnKey="roundTable"
            mobileSelected={mobileSelected}
            seeMore={seeMore}
          />
          {!seeMore && <Gradient></Gradient>}
        </Items>
        <SeeMoreButton onClick={() => setSeeMore((prev) => !prev)}>
          {seeMore ? 'See Less' : 'See More'}
        </SeeMoreButton>
      </StyledTable>
    </Section>
  )
}

const SessionColumn: React.FC<AgendaColumnProps> = ({
  sessions,
  columnKey,
  mobileSelected,
  seeMore,
  ...props
}) => {
  const groupSessions = (sessions: Session[]) => {
    const groupedSessions: { session: Session; count: number }[] = []

    for (let i = 0; i < sessions.length; i++) {
      if (
        groupedSessions.length > 0 &&
        groupedSessions[groupedSessions.length - 1].session.title ===
          sessions[i].title &&
        JSON.stringify(
          groupedSessions[groupedSessions.length - 1].session.speakers,
        ) === JSON.stringify(sessions[i].speakers) &&
        groupedSessions[groupedSessions.length - 1].session.startTime ===
          sessions[i].startTime &&
        groupedSessions[groupedSessions.length - 1].session.endTime ===
          sessions[i].endTime
      ) {
        groupedSessions[groupedSessions.length - 1].count += 1
      } else {
        groupedSessions.push({ session: sessions[i], count: 1 })
      }
    }
    return groupedSessions
  }

  const groupedSessions = groupSessions(
    seeMore ? sessions : sessions.slice(0, 4),
  )

  return (
    <Column
      {...props}
      mobileSelected={mobileSelected === columnKey ? true : false}
    >
      {groupedSessions.map(({ session, count }, index) => (
        <SessionItem
          key={`${columnKey}-${index}`}
          count={count}
          hasBorderRight={columnKey !== 'roundTable'}
          hasBorderBottom={!(index === groupedSessions.length - 1)}
          mobileRemove={session.title?.length === 0}
          shrink={session.shrink}
          highlight={session.highlight}
          merged={session.merged}
          removeBorderRight={session.removeBorderRight}
          gray={session.gray}
        >
          <TimeSlot
            count={count}
            shrink={session.shrink}
            merged={session.merged}
          >
            {session.shrink
              ? session.startTime
              : session.title?.length > 0
              ? `${session.startTime} - ${session.endTime}`
              : ''}
          </TimeSlot>
          <TableData>
            <TableContent>
              <h4>{session.title}</h4>
              <div>
                {session.speakers.map((speaker, i) => (
                  <SpeakerInfo key={i}>
                    {speaker}
                    {i !== session.speakers.length - 1 && ', '}
                  </SpeakerInfo>
                ))}
              </div>
            </TableContent>
          </TableData>
        </SessionItem>
      ))}
    </Column>
  )
}

const StyledTable = styled.div`
  width: 100%;
  border-collapse: collapse;
  margin-top: 24px;
  position: relative;

  h4 {
    font-size: 18px;
    text-transform: uppercase;
    text-overflow: ellipsis;
    min-height: 80px;
    white-space: pre-wrap;
  }

  @media (max-width: ${breakpoints.sm}px) {
    h4 {
      font-size: 14px;
      min-height: unset;
    }
  }
`

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 52px 1fr 52px 1fr 52px 1fr;

  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
  }
`

const ColumnButton = styled.button<{ isMobileActive: boolean }>`
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 18px;
  border: none;
  background: none;

  @media (max-width: 1024px) {
    background-color: ${({ isMobileActive }) =>
      isMobileActive ? '#000' : 'transparent'};

    color: ${({ isMobileActive }) => (isMobileActive ? '#fff' : '#000')};

    border-radius: 56px;
    font-size: 12px;
    line-height: 16px;
    padding: 10px 16px;
    cursor: pointer;
  }
`

const Items = styled.div`
  display: flex;
  gap: 1px;
  border: 1px dashed #000;
  position: relative;
`

const Column = styled.div<{ mobileSelected: boolean }>`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);

  @media (max-width: 1024px) {
    display: ${({ mobileSelected }) => (mobileSelected ? 'flex' : 'none')};
    width: 100%;
  }
`

const SessionItem = styled.div<{
  count: number
  hasBorderRight: boolean
  hasBorderBottom: boolean
  mobileRemove: boolean
  shrink?: boolean
  highlight?: boolean
  merged?: boolean
  removeBorderRight?: boolean
  gray?: boolean
}>`
  display: flex;
  align-items: center;
  height: ${({ count, shrink }) => (shrink ? 76 : 190 * count)}px;

  border-bottom: ${({ hasBorderBottom }) =>
    hasBorderBottom ? '1px dashed #000' : 'none'};

  border-right: ${({ hasBorderRight, merged, removeBorderRight }) =>
    merged || removeBorderRight
      ? '1px solid #fafafa'
      : hasBorderRight
      ? '1px dashed #000'
      : 'none'};

  background-color: ${({ highlight, gray }) =>
    highlight || gray ? '#fafafa' : '#fff'};

  color: ${({ merged }) => (merged ? '#fafafa' : '#000')};

  @media (max-width: 1024px) {
    border-right: none;
    height: ${({ shrink }) => (shrink ? '76px' : '156px')};

    display: ${({ mobileRemove }) => (mobileRemove ? 'none' : 'flex')};
    color: #000;
  }
`

const TimeSlot = styled.div<{
  count: number
  shrink?: boolean
  merged?: boolean
}>`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  width: 52px;
  height: ${({ count, shrink }) => (shrink ? 75 : 189 * count)}px;
  background-color: #fafafa;

  border-left: ${({ merged }) =>
    merged ? '1px solid #fafafa' : '1px dashed #000'};

  @media (max-width: 1024px) {
    height: ${({ shrink }) => (shrink ? '75px' : '154px')};
    color: #000;
    border-left: 1px dashed #000;
  }
`

const TableData = styled.div`
  font-size: 12px;
  padding: 24px;
  height: 100%;
`

const SpeakerInfo = styled.span`
  font-size: 14px;
  opacity: 0.5;
  text-transform: uppercase;

  @media (max-width: ${breakpoints.sm}px) {
    font-size: 12px;
  }
`

const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const SeeMoreButton = styled.button`
  display: block;
  width: 460px;
  height: 88px;
  background: black;
  color: white;
  border: none;
  font-size: 14px;
  line-height: 20px;
  margin-top: 24px;
  margin-inline: auto;
  padding: 10px 40px;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    height: 44px;
    padding: 6px 12px;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
  }
`

const Gradient = styled.div`
  position: absolute;
  width: calc(100% + 8px);
  left: -4px;
  bottom: -4px;
  height: 750px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 57.5%, #fff 100%);
  z-index: 1000;

  @media (max-width: 1024px) {
    height: 200px;
  }
`

export default AgendasSection
