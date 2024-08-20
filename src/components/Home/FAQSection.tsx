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
    question: 'How far is the venue from the Queens Convention Centre?',
    answer:
      'The venue is approximately 10 minutes by taxi and 20 minutes by MRT.',
  },
  {
    question: 'How do I register for tickets?',
    answer:
      'All registration and ticketing will take place through our <a href="https://lu.ma/87inb10a" target="_blank">Luma page.</a>',
  },
  {
    question: 'Is there disabled access?',
    answer: 'Yes',
  },
  {
    question: 'Is there parking on site?',
    answer: 'No',
  },
  {
    question: 'What public transport is close to the venue?',
    answer: 'The Samyan MRT station is 5 minutes away by foot.',
  },
  {
    question: 'Will there be food?',
    answer:
      'We will have local street food stalls  at lunch time and in the early evening. Drinks available for the duration of the event and local craft beer from 17:00 pm.',
  },
  {
    question: 'What if I have special dietary requests?',
    answer:
      'When purchasing your ticket please notify us and we will do our best to accommodate.',
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
              {item.question}
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
  margin-top: 64px;
  width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const FAQItem = styled.div`
  border-bottom: 1px solid var(--text-color);
`

const Question = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 28px 0;
  font-size: 24px;
  color: var(--text-color);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

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
