import styled from '@emotion/styled'
import React from 'react'

const VideoSection: React.FC = () => {
  return (
    <Section>
      <video autoPlay loop muted playsInline controls>
        <source src="/assets/demo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <RSVPButton>RSVP</RSVPButton>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  width: 100%;

  video {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const RSVPButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 114px;

  border: 1px solid var(--text-color);
  color: var(--text-color);
  background-color: var(--background-color);

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  width: 100%;
  cursor: pointer;

  :hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }
`

export default VideoSection
