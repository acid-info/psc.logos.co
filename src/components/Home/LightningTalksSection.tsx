import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import clsx from 'clsx'
import React, { useState } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import LightningTalksModal from '../Modals/LightningTalksModal'
import { Section } from './StyledComponents'

const presentationData = [
  {
    src: '/assets/lightning-talks/liberland.svg',
    alt: 'Liberland',
    name: 'Liberland',
  },
  {
    src: '/assets/lightning-talks/zuitzerland.svg',
    alt: 'Zuitzerland',
    name: 'Zuitzerland',
    isLong: true,
  },
  {
    src: '/assets/lightning-talks/gelephu-mindfulness-city.svg',
    alt: 'Gelephu Mindfulness City',
    name: 'Gelephu Mindfulness City',
  },
  {
    src: '/assets/lightning-talks/registry-chain.svg',
    alt: 'RegistryChain',
    name: 'RegistryChain',
  },
  {
    src: '/assets/lightning-talks/zu-grama.svg',
    alt: 'Zu-grama',
    name: 'Zu-grama',
    isLong: true,
  },
  { src: '/assets/lightning-talks/4seas.svg', alt: '4Seas', name: '4Seas' },
]

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
          <Title>Lightning Talks</Title>
          <Wrapper>
            <Content>
              <Paragraph rehypePlugins={[rehypeRaw]}>
                {`Do you have an alternative governance project you want to share with aligned and empathetic thinkers? Do you need collaborators, feedback, or just a forum to hone your pitch?

Following our open-source principles, Parallel Society Congress offers a space for lightning talks. The goal is to spotlight innovative teams pushing the frontier of the post-nation-state movement.`}
              </Paragraph>
              <Paragraph rehypePlugins={[rehypeRaw]}>
                {`We welcome projects in any stage of development from the following areas: cyberstates / network states, charter cities, pop-up communities, SEZs, special administrative zones, network nations, decentralised governance, or the technology needed to support any of the above.

You can present a pitch, a new feature of an established initiative, a project overview, or just a promising idea. Apply below and come share your vision with the community.`}
              </Paragraph>
            </Content>
          </Wrapper>
          <PresentedBy>
            <p className="title">Presentations by:</p>
            <div className="grid">
              {presentationData.map(({ src, alt, name, isLong }) => (
                <div key={name} className="grid-item">
                  <div
                    className={clsx(
                      'grid-img-container',
                      isLong && 'long-image',
                    )}
                  >
                    <img src={src} alt={alt} />
                  </div>
                  <p>{name}</p>
                </div>
              ))}
            </div>
          </PresentedBy>
          <SubmitButton onClick={() => setOpenModal(true)}>Submit</SubmitButton>
        </Container>
      </Section>
    </>
  )
}

const Container = styled.div`
  a {
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.sm}px) {
    margin-top: 156px;
  }
`

const Wrapper = styled.div`
  display: flex;
  margin-top: 24px;

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

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    border-right: none;
  }
`

const Content = styled.div`
  display: flex;
  gap: 16px;
  white-space: pre-wrap;

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    padding-left: 0;
    flex-direction: column;
  }
`

const Paragraph = styled(Markdown)`
  font-size: 16px;
  line-height: 24px;
  width: 50%;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    width: 100%;
  }
`

// const Divider = styled.div`
//   height: 1px;
//   /* border-top: 1px dashed #000; */
//   margin: 16px 0;
// `

const PresentedBy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .title {
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
  }

  .grid {
    border-top: 1px dashed #000;
    border-bottom: 1px dashed #000;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    row-gap: 8px;
    column-gap: 40px;

    padding-block: 16px;

    @media (max-width: ${breakpoints.sm}px) {
      overflow-x: auto;
      grid-template-columns: repeat(3, 1fr);
      overflow-y: hidden;

      column-gap: 8px;
      row-gap: 14px;

      .grid {
        padding-block: 6px;
      }
    }
  }

  .long-image {
    width: 110px;
  }

  .grid-img-container {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  .grid-item {
    height: 64px;
    padding: 14px 8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    p {
      font-size: 14px;
      line-height: 16px;
      margin-left: 32px;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    @media (max-width: ${breakpoints.sm}px) {
      width: 267px;

      flex-shrink: 0;

      p {
        width: auto;
      }
    }
  }
`

// const MobileReadMore = styled.p`
//   display: none;

//   @media (max-width: 768px) {
//     display: block;
//     font-size: 14px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 20px;
//     text-decoration-line: underline;
//     text-overflow: ellipsis;
//   }
// `

// const MobileReadMoreWithMargin = styled(MobileReadMore)`
//   margin-bottom: 24px;
// `

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 460px;
  height: 88px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-transform: uppercase;

  background: black;
  color: white;
  border: none;

  margin: 64px auto 0;

  cursor: pointer;
`

export default LightningTalksSection
