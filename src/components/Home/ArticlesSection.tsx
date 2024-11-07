import styled from '@emotion/styled'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Section, SectionTitle } from './StyledComponents'

interface Article {
  image?: string
  title: string
  date: string
  author: string
  excerpt: string
  tags: string[]
  href: string
}

const articlesData: Article[] = [
  {
    image: '/assets/articles/a-genealogy-of-logos.webp',
    title: 'From Offline to Online Piracy: A Genealogy of Logos',
    date: '23 Jan 2024',
    author: '',
    excerpt:
      'Considering the origins of Logos, the rationale behind each protocol of its technology stack, and its potential to reshape the social order',
    tags: [],
    href: 'https://press.logos.co/article/a-genealogy-of-logos',
  },
  {
    image: '/assets/articles/building-judicial-system-for-internet-age.png',
    title: 'Building a Judicial System for the Internet Age',
    date: '2 Nov 2023',
    author: '',
    excerpt:
      'In this paper, we introduce Kleros, a decision-making protocol which uses blockchain and crowdsourcing for adjudicating claims.',
    tags: [],
    href: 'https://medium.com/kleros/kleros-a-decentralized-justice-protocol-for-the-internet-38d596a6300d',
  },
  {
    image: '/assets/articles/what-is-polycentric-law.webp',
    title: 'What Is Polycentric Law?',
    date: '20 Oct 2024',
    author: '',
    excerpt:
      'Polycentric law simply extends that observation from commercial services to government ones. Just as competition makes life better for those who seek banking, cleaning, and pet care services, it can benefit those seeking fair and efficient legal systems.',
    tags: [],
    href: 'https://press.logos.co/article/what-is-polycentric-law',
  },
  {
    image:
      '/assets/articles/how-to-ethically-build-public-goods-infrastructure.png',
    title: 'How To Ethically Build Public Goods Infrastructure',
    date: '2 Nov 2023',
    author: '',
    excerpt:
      'Adhering to our principles is not an easy route, but it is necessary for ethically building public goods',
    tags: [],
    href: 'https://press.logos.co/article/how-to-ethically-build-public-goods-infrastructure',
  },
]

const MAX_ARTICLES = 4

const ArticlesSection: React.FC = () => {
  const [showSeeMore, setShowSeeMore] = React.useState(false)
  const [count, setCount] = useState(MAX_ARTICLES)

  useEffect(() => {
    setShowSeeMore(articlesData.length > MAX_ARTICLES)
  }, [])

  const handleSeeMore = () => {
    setCount(articlesData.length)
    setShowSeeMore(false)
  }

  return (
    <Section id="articles">
      <SectionTitle>Articles</SectionTitle>
      <ArticleList>
        {articlesData.slice(0, count).map((article, index) => (
          <ArticleItem key={index}>
            {article.image && (
              <CustomLink href={article.href} target="_blank">
                <ArticleImage
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                />
              </CustomLink>
            )}
            <ArticleContent>
              <CustomLink href={article.href} target="_blank">
                <ArticleTitle>{article.title}</ArticleTitle>
              </CustomLink>
              <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
            </ArticleContent>
          </ArticleItem>
        ))}
      </ArticleList>
      {showSeeMore && (
        <SeeMoreButton onClick={handleSeeMore}>See more</SeeMoreButton>
      )}
    </Section>
  )
}

const ArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 54px 16px;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 16px;
  }
`

const ArticleItem = styled.article`
  min-width: 240px;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: var(--text-color);
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    min-width: unset;
  }
`

const CustomLink = styled(Link)`
  display: flex;
  flex-direction: column;
`

const ArticleImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

const ArticleContent = styled.div``

const ArticleTitle = styled.h3`
  font-size: 20px;
  font-style: normal;
  line-height: 32px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }
`

const ArticleExcerpt = styled.p`
  font-size: 12px;
  font-style: normal;
  line-height: 20px;
`

// const TagList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 16px;
// `

// const Tag = styled.span`
//   font-size: 12px;
//   color: var(--text-color);
//   padding: 4px 8px;
//   border: 1px solid var(--text-color);
//   font-family: Helvetica, sans-serif;
// `

const SeeMoreButton = styled.button`
  display: block;
  margin: 80px auto 0;
  padding: 10px 40px;
  font-size: 14px;
  color: var(--text-color);
  background: none;
  border: 1px solid var(--text-color);
  cursor: pointer;

  &:hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

export default ArticlesSection
