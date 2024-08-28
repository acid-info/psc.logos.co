import styled from '@emotion/styled'

interface SpeakerCardProps {
  initial: string
  name: string
  title: string
  bio: string
  expanded: boolean
  onToggle: () => void
  className?: string
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  initial,
  name,
  title,
  bio,
  expanded,
  onToggle,
  className,
}) => {
  return (
    <CardWrapper className={className}>
      <InitialCircle>{initial}</InitialCircle>
      <CardContent>
        <SpeakerName>{name}</SpeakerName>
        <SpeakerTitle>{title}</SpeakerTitle>
        <SpeakerBio expanded={expanded}>{bio}</SpeakerBio>
        <ReadMoreButton onClick={onToggle}>
          {expanded ? 'Read less' : 'Read more'}
        </ReadMoreButton>
      </CardContent>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`

const InitialCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 256px;
  max-width: 100%;
  width: 256px;
  overflow: hidden;
  color: var(--text-text-primary, #000);
  white-space: nowrap;
  font-size: 18px;
  font-family: Courier, monospace;
  line-height: 24px;
  border: 1px solid rgba(0, 0, 0, 1);
  text-align: center;

  @media (max-width: 991px) {
    margin: 0 auto;
    white-space: initial;
    padding: 100px 0;
  }
`

const CardContent = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
  font-family: 'Space Mono', sans-serif;
  color: rgba(0, 0, 0, 1);
  justify-content: flex-start;
`

const SpeakerName = styled.h3`
  font-size: 18px;
  line-height: 1;
  margin: 0;
`

const SpeakerTitle = styled.p`
  font-size: 14px;
  margin-top: 8px;
`

const SpeakerBio = styled.p<{ expanded: boolean }>`
  font-size: 14px;
  line-height: 20px;
  margin-top: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.expanded ? 'unset' : '3')};
  -webkit-box-orient: vertical;
`

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  text-decoration: underline;
  font-size: 14px;
  line-height: 1;
  margin-top: 16px;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  text-align: left;
`

export default SpeakerCard
