import styled from '@emotion/styled'
import React from 'react'

const VideoSection: React.FC = () => {
  return (
    <Section>
      <video autoPlay loop muted playsInline controls>
        <source src="/assets/demo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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

export default VideoSection
