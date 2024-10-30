import { agendaData } from '@/configs/data.configs'
import styled from '@emotion/styled'
import { Section, SectionTitle } from './StyledComponents'

type Session = {
  title: string
  speakers: string[]
  startTime: string
  endTime: string
}

type AgendaColumnProps = {
  sessions: Session[]
  columnKey: string
}

const AgendasSection: React.FC = () => {
  return (
    <Section id="agenda">
      <SectionTitle>Agenda</SectionTitle>
      <StyledTable>
        <Items>
          <SessionColumn
            sessions={agendaData.mainStage}
            columnKey="mainStage"
          />
          <SessionColumn sessions={agendaData.demoRoom} columnKey="demoRoom" />
          <SessionColumn
            sessions={agendaData.roundTable}
            columnKey="roundTable"
          />
        </Items>
      </StyledTable>
    </Section>
  )
}

const SessionColumn: React.FC<AgendaColumnProps> = ({
  sessions,
  columnKey,
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

  const groupedSessions = groupSessions(sessions)

  return (
    <Column>
      {groupedSessions.map(({ session, count }, index) => (
        <SessionItem
          key={`${columnKey}-${index}`}
          count={count}
          hasBorderRight={columnKey !== 'roundTable'}
          hasBorderBottom={!(index === groupedSessions.length - 1)}
        >
          <TimeSlot count={count}>
            {session.title?.length > 0
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

  h4 {
    font-size: 18px;
    text-transform: uppercase;
    text-overflow: ellipsis;
    min-height: 80px;
  }
`

const Items = styled.div`
  display: flex;
  gap: 1px;
  border: 1px dashed #000;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
`

const SessionItem = styled.div<{
  count: number
  hasBorderRight: boolean
  hasBorderBottom: boolean
}>`
  display: flex;
  align-items: center;
  height: ${({ count }) => 190 * count}px;
  border-bottom: ${({ hasBorderBottom }) =>
    hasBorderBottom ? '1px dashed #000' : 'none'};
  border-right: ${({ hasBorderRight }) =>
    hasBorderRight ? '1px dashed #000' : 'none'};
`

const TimeSlot = styled.div<{ count: number }>`
  font-size: 14px;
  padding: 0 16px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  width: 52px;
  height: ${({ count }) => 189 * count}px;
  background-color: #fafafa;

  border-left: 1px dashed #000;
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
`

const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export default AgendasSection
