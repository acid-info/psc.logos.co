import styled from '@emotion/styled'
import Link from 'next/link'
import React, { useEffect } from 'react'
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
    image: '/assets/articles/why-build-a-network-state.webp',
    title: 'Why Build a Network State?: An Introduction',
    date: '3 Mar 2024',
    author: 'Jarrad Hope',
    excerpt:
      'Voluntary, non-territorial governance services would lead to greater freedom, accountability, and a more peaceful future',
    tags: [],
    href: 'https://press.logos.co/article/why-build-a-network-state',
  },
  {
    image: '/assets/articles/logos-network-aug-2024.webp',
    title: 'State of the Logos Network: August 2024',
    date: '5 Sep 2024',
    author: 'Logos',
    excerpt: 'Your roundup of recent developments from the Logos ecosystem',
    tags: [],
    href: 'https://press.logos.co/article/logos-network-aug-2024',
  },
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
  {
    title: 'Building a Judicial System for the Internet Age',
    date: '2 Nov 2023',
    author: '',
    excerpt:
      'In this paper, we introduce Kleros, a decision-making protocol which uses blockchain and crowdsourcing for adjudicating claims.',
    tags: [],
    href: 'https://medium.com/kleros/kleros-a-decentralized-justice-protocol-for-the-internet-38d596a6300d',
  },
]

const MAX_ARTICLES = 4

const ArticlesSection: React.FC = () => {
  const [showSeeMore, setShowSeeMore] = React.useState(false)

  useEffect(() => {
    setShowSeeMore(articlesData.length > MAX_ARTICLES)
  }, [])

  return (
    <Section id="articles">
      <SectionTitle>Articles</SectionTitle>
      <ArticleList>
        {articlesData.map((article, index) => (
          <ArticleItem key={index}>
            {article.image && (
              <CustomLink href={article.href} target="_blank">
                <ArticleImage src={article.image} alt={article.title} />
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
      {showSeeMore && <SeeMoreButton>See more</SeeMoreButton>}
    </Section>
  )
}

const ArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 64px 16px;
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
