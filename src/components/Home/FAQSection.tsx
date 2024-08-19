import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Section, SectionTitle } from './StyledComponents'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'What is Nimbus?',
    answer: 'Nimbus is a decentralized platform...',
  },
  {
    question: 'Is Nimbus open source?',
    answer: 'Yes, Nimbus is an open-source project...',
  },
  {
    question: 'Which language is Nimbus written in and why?',
    answer:
      'Nimbus is written in Nim, an efficient, general-purpose systems programming language with a Python-like syntax that compiles to C. Nim allows us to implement Ethereum rapidly and take advantage of the mature C-language tooling in a compilation of machine code, and in the analysis of static code.',
  },
  {
    question: 'What is the release cadence for Nimbus?',
    answer: 'The release cadence for Nimbus is...',
  },
  {
    question: 'What is your process for testing prior to release?',
    answer: 'Our testing process includes...',
  },
  {
    question: 'How do you communicate about upcoming releases?',
    answer: 'We communicate about upcoming releases through...',
  },
  {
    question: 'How many validators can we run per machine?',
    answer: 'The number of validators you can run per machine depends on...',
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
            {openIndex === index && <Answer>{item.answer}</Answer>}
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
  font-family: Space Mono, sans-serif;
  text-align: left;
`

const ToggleIcon = styled.span<{ isOpen: boolean }>`
  font-size: 24px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`

const Answer = styled.div`
  padding: 0 0 28px;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-color);
  font-family: Space Mono, sans-serif;
`

export default FAQSection
