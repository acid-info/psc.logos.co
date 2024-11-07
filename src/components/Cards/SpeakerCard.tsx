import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'

interface SpeakerCardProps {
  initial: string
  name: string
  profileImage?: string
  title: string
  org: string
  bio: string
  expanded: boolean
  onToggle: () => void
  noSeeMore?: boolean
  className?: string
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  initial,
  name,
  profileImage,
  title,
  org,
  bio,
  expanded,
  onToggle,
  noSeeMore,
  className,
}) => {
  return (
    <CardWrapper className={className}>
      <ImageContainer>
        {profileImage ? (
          <img src={profileImage} alt={name} loading="lazy" />
        ) : (
          initial
        )}
      </ImageContainer>
      <CardContent>
        <SpeakerName>{name}</SpeakerName>
        <SpeakerTitle>{title}</SpeakerTitle>
        <SpeakerOrg titleLines={title.includes('\n') ? 1 : 2}>{org}</SpeakerOrg>
        <SpeakerBio expanded={expanded}>{bio}</SpeakerBio>
        {noSeeMore ? null : (
          <ReadMoreButton onClick={onToggle}>
            {expanded ? 'Read less' : 'Read more'}
          </ReadMoreButton>
        )}
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

  @media (max-width: 991px) {
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.sm}px) {
    min-width: unset;
  }
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  font-size: 18px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 991px) {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    height: auto;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`

const CardContent = styled.div`
  flex: 1;
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
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`

const SpeakerTitle = styled.p`
  font-size: 12px;
  line-height: 24px;
  border: 1px dashed #000;
  white-space: pre-wrap;
  padding: 8px;
  box-sizing: border-box;
  max-height: 64px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  flex-shrink: 0;

  @media (max-width: 768px) {
    -webkit-line-clamp: 3;
    max-height: unset;
  }
`

const SpeakerOrg = styled(SpeakerTitle)<{ titleLines?: number }>`
  border-top: none;
  display: flex;
  align-items: center;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 40px;
  max-height: 64px;
  height: ${({ titleLines }) => (titleLines === 1 ? '40px' : '64px')};

  @media (max-width: 768px) {
    height: unset;
  }
`

const SpeakerBio = styled.p<{ expanded: boolean }>`
  font-size: 14px;
  line-height: 20px;
  margin-top: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.expanded ? 'unset' : '4')};
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
