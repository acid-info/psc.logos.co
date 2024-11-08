import styled from '@emotion/styled'
import React, { useState } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Section, SectionTitle } from './StyledComponents'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'What should I expect at the event?',
    answer:
      "Parallel Society Congress is not another crypto conference. The main stage will host inspiring and illuminating talks; the demo room and round table will feature interactive workshops, demos, and learning; and engaging activations will animate each of the venue's three floors.\n\nThe spacious ground floor area will be open to hang out, network, eat, and drink while you connect with potential collaborators for your alternate-future-building project. We encourage you to engage with the activities you're most passionate about.",
  },
  {
    question:
      'How far is the venue from the Queen Sirikit Convention Centre (DevCon)?',
    answer:
      'The venue is approximately 10 minutes by taxi without traffic and 10 minutes by MRT underground train.',
  },
  {
    question: 'How do I register for tickets?',
    answer:
      'All registration and ticketing will take place through our <a href="https://lu.ma/psc1" target="_blank">Luma page.</a>',
  },
  {
    question: 'Is there parking on site?',
    answer:
      'No. However, you can park your vehicle at Samyan Mitrtown mall for an affordable day rate.',
  },
  {
    question: 'What public transport is close to the venue?',
    answer:
      'Samyan MRT station is five minutes away by foot. Use Exit 2 and follow the crowd through the left tunnel for ease of walk.\nFrom the Siam BTS station, the venue is only 10 minutes away via a motorcycle taxi.',
  },
  {
    question: 'Will there be food?',
    answer:
      'We will have local street food stalls at lunchtime and in the early evening. Drinks are available for the duration of the event and local craft beer from 17:00.',
  },
  {
    question: 'What if I have special dietary requests?',
    answer:
      'Upon getting your ticket please notify us, and we will do our best to accommodate. We have some vegetarian options, but we need to pre-order, so please confirm if you require them.',
  },
]

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section id="faqs">
      <SectionTitle>FAQ</SectionTitle>
      <FAQList>
        {faqData.map((item, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <ToggleIcon isOpen={openIndex === index}>
                {openIndex === index ? (
                  <img src="/assets/minus.svg" alt="minus" />
                ) : (
                  <img src="/assets/plus.svg" alt="plus" />
                )}
              </ToggleIcon>
            </Question>
            {openIndex === index && (
              <Answer rehypePlugins={[rehypeRaw]}>{item.answer}</Answer>
            )}
          </FAQItem>
        ))}
      </FAQList>
    </Section>
  )
}

const FAQList = styled.div`
  margin-top: 24px;
  width: 100%;

  @media (max-width: 991px) {
    margin-top: 16px;
  }
`

const FAQItem = styled.div`
  border-bottom: 1px dashed var(--text-color);
`

const Question = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 32px 0;
  color: var(--text-color);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  font-size: 24px;
  font-weight: 400;
  line-height: 32px;

  span {
    margin-right: 16px;
  }

  @media (max-width: 991px) {
    font-size: 18px;
    line-height: 28px;
  }
`

const ToggleIcon = styled.span<{ isOpen: boolean }>`
  font-size: 24px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`

const Answer = styled(Markdown)`
  padding: 0 0 28px;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-color);
  white-space: pre-wrap;

  a {
    color: var(--text-color);
    text-decoration: underline;
  }

  @media (max-width: 991px) {
    font-size: 14px;
    line-height: 24px;
  }
`

export default FAQSection
