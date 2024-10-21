import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import LightningTalksModal from '../Modals/LightningTalksModal'
import { Section } from './StyledComponents'

const LightningTalksSection: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <LightningTalksModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
      <Section id="lightning-talks">
        <Container>
          <Wrapper>
            <Title>Lightning Talks</Title>
            <Content>
              <Paragraph rehypePlugins={[rehypeRaw]}>
                {`Do you have an alternative governance project you want to share with aligned and empathetic thinkers? Do you need collaborators, feedback, or just a forum to hone your pitch?

Following our open-source principles, Parallel Society Congress offers a space for lightning talks. The goal is to spotlight innovative teams pushing the frontier of the post-nation-state movement.`}
              </Paragraph>
              <Divider></Divider>
              <Paragraph rehypePlugins={[rehypeRaw]}>
                {`We welcome projects in any stage of development from the following areas: cyberstates / network states, charter cities, pop-up communities, SEZs, special administrative zones, network nations, decentralised governance, or the technology needed to support any of the above.

You can present a pitch, a new feature of an established initiative, a project overview, or just a promising idea. Apply below and come share your vision with the community.`}
              </Paragraph>

              <SubmitButton onClick={() => setOpenModal(true)}>
                Submit
              </SubmitButton>
            </Content>
          </Wrapper>
        </Container>
      </Section>
    </>
  )
}

const Container = styled.div`
  a {
    text-decoration: none;
  }

  margin-top: 216px;

  @media (max-width: ${breakpoints.sm}px) {
    margin-top: 156px;
  }
`

const Wrapper = styled.div`
  border-top: 1px dashed #000;
  display: flex;
  min-height: 460px;

  a {
    text-decoration: underline;
    color: var(--text-color);
  }

  a:visited,
  a:hover {
    color: var(--text-color);
  }

  @media (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
    gap: 24px;
    min-height: unset;
    border-top: none;
  }
`

const Title = styled.h2`
  padding-top: 24px;
  font-size: 24px;
  line-height: normal;
  text-transform: uppercase;
  width: 50%;
  border-right: 1px dashed #000;

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    border-right: none;
  }
`

const Content = styled.div`
  width: 50%;
  white-space: pre-wrap;
  padding-top: 24px;
  padding-left: 24px;

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    padding-left: 0;
    border-top: 1px dashed #000;
  }
`

const Paragraph = styled(Markdown)`
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    width: 100%;
  }
`

const Divider = styled.div`
  height: 1px;
  /* border-top: 1px dashed #000; */
  margin: 16px 0;
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

const SubmitButton = styled.button`
  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-transform: uppercase;

  background: black;
  color: white;
  border: none;

  margin-top: 40px;

  cursor: pointer;
`

export default LightningTalksSection
