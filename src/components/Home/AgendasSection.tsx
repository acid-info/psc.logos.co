import { agendaData } from '@/configs/data.configs'
import styled from '@emotion/styled'
import { Section, SectionTitle } from './StyledComponents'

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  h4 {
    font-size: 18px;
    text-transform: uppercase;
    text-overflow: ellipsis;
    min-height: 80px;
  }

  tbody {
    border: 1px dashed #000;
  }
`

const TableHeader = styled.th`
  padding: 10px;
  font-weight: bold;
  text-align: center;
  font-weight: 400;
`

const TableRow = styled.tr``

const TableData = styled.td`
  padding: 24px;
  font-size: 12px;
  height: 190px;
  border-bottom: 1px dashed #000;
`

const TimeSlot = styled.td`
  font-size: 14px;
  padding: 0px 15px 0px 16px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  width: 52px;
  background-color: #fafafa;

  border-bottom: 1px dashed #000;
  border-left: 1px dashed #000;
`

const SpeakerInfo = styled.span`
  font-size: 10px;
  opacity: 0.5;
  margin-top: 5px;
  font-size: 14px;
`

const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  height: 100%;
`

const AgendasSection = () => {
  return (
    <Section id="about-logos">
      <SectionTitle>About</SectionTitle>
      <StyledTable>
        <thead>
          <TableRow>
            <TableHeader></TableHeader>
            <TableHeader>Main Stage</TableHeader>
            <TableHeader></TableHeader>
            <TableHeader>Demo Room</TableHeader>
            <TableHeader></TableHeader>
            <TableHeader>Round Table</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {agendaData.map((item, index) => (
            <TableRow key={index}>
              <TimeSlot>{item.time}</TimeSlot>
              <TableData>
                {item.sessions.mainStage && (
                  <TableContent>
                    <h4>{item.sessions.mainStage.title}</h4>
                    <div>
                      {item.sessions.mainStage.speakers.map((speaker, i) => (
                        <SpeakerInfo key={i}>
                          {speaker}
                          {i !== item.sessions.mainStage.speakers.length - 1 &&
                            ', '}
                        </SpeakerInfo>
                      ))}
                    </div>
                  </TableContent>
                )}
              </TableData>
              <TimeSlot>{item.time}</TimeSlot>
              <TableData>
                {item.sessions.demoRoom && (
                  <TableContent>
                    <h4>{item.sessions.demoRoom.title}</h4>
                    <div>
                      {item?.sessions?.demoRoom?.speakers.map((speaker, i) => (
                        <SpeakerInfo key={i}>
                          {speaker}
                          {item.sessions.demoRoom &&
                            i !== item.sessions.demoRoom.speakers.length - 1 &&
                            ', '}
                        </SpeakerInfo>
                      ))}
                    </div>
                  </TableContent>
                )}
              </TableData>
              <TimeSlot>{item.time}</TimeSlot>
              <TableData>
                {item.sessions.roundTable && (
                  <TableContent>
                    <h4>{item.sessions.roundTable.title}</h4>
                    <div>
                      {item.sessions.roundTable.speakers.map((speaker, i) => (
                        <SpeakerInfo key={i}>
                          {speaker}
                          {item.sessions.roundTable &&
                            i !==
                              item.sessions.roundTable?.speakers?.length - 1 &&
                            ', '}
                        </SpeakerInfo>
                      ))}
                    </div>
                  </TableContent>
                )}
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </Section>
  )
}

export default AgendasSection
