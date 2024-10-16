import styled from '@emotion/styled'
import React from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Section, SectionTitle } from './StyledComponents'

const AboutLogosSection: React.FC = () => {
  const [expanded, setExpanded] = React.useState<'psc' | 'logos' | null>(null)

  const handleExpandClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement
    if (target.tagName === 'A') {
      return
    }

    setExpanded((prev) => {
      if (prev === 'psc') {
        return 'logos'
      } else if (prev === 'logos') {
        return 'psc'
      } else {
        return 'psc'
      }
    })
  }

  return (
    <Section id="about-logos">
      <Container>
        <Row>
          <SectionTitle>About</SectionTitle>
        </Row>
        <Wrapper>
          <Paragraph rehypePlugins={[rehypeRaw]} expanded={expanded === 'psc'}>
            {`Parallel Society Congress

​The first Parallel Society Congress is an invitation to discuss some of the most pressing questions we face as a civilisation. What will succeed the waning 400-year-old nation-state technology? How can we unlock the value latent in inefficient governance and its institutions? Is this how crypto can live up to its initial promise?

Inspired by Eastern European dissidents living under repressive regimes, instead of fighting a rigged system head-on, we are creating state-of-the-art technology, alternative media, autonomous physical communities, and parallel educational institutions that operate independently of centralised authorities – protecting human societies through technology and innovation.

​To support this nascent coalition, our partners will host activations, talks, and workshops. ​Join us at the bleeding edge to build free and prosperous alternatives for humanity.
`}
          </Paragraph>
          <MobileReadMoreWithMargin onClick={handleExpandClick}>
            Read more
          </MobileReadMoreWithMargin>
          <Paragraph
            rehypePlugins={[rehypeRaw]}
            expanded={expanded === 'logos'}
          >
            {`Logos
            
Logos is a cultural movement to reimagine the future of human governance beyond the nation state. Rooted in the blockchain revolution, Logos is building a decentralised, politically neutral technology stack that supports the creation of parallel institutions and self-sovereign digital communities.

Our vision is to bring greater freedom and prosperity by providing the next generation of governing services, public goods, and social institutions to anyone with an internet connection.

​Read our <a href="https://logos.co/manifesto/" target="_blank">Manifesto</a> for a deeper dive into our ideals and technology.`}
          </Paragraph>
          <MobileReadMore onClick={handleExpandClick}>Read more</MobileReadMore>
        </Wrapper>
      </Container>
    </Section>
  )
}

const Container = styled.div`
  a {
    text-decoration: none;
  }
`

const Wrapper = styled.div`
  border: 1px dashed #000;
  padding: 24px;
  display: flex;
  gap: 32px;
  min-height: 460px;

  a {
    text-decoration: underline;
    color: var(--text-color);
  }

  a:visited,
  a:hover {
    color: var(--text-color);
  }

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 24px;
    min-height: unset;
  }
`

const Paragraph = styled(Markdown)<{ expanded: boolean }>`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 50%;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    width: 100%;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;

    -webkit-line-clamp: ${(props) => (props.expanded ? 'unset' : '8')};
    -webkit-box-orient: vertical;
  }
`

const Button = styled.button`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

const MobileButton = styled(Button)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    height: 44px;
    padding: 6px 12px;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 8px;

    align-self: stretch;
  }
`

const MobileReadMore = styled.p`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-decoration-line: underline;
    text-overflow: ellipsis;
  }
`

const MobileReadMoreWithMargin = styled(MobileReadMore)`
  margin-bottom: 24px;
`

export default AboutLogosSection
