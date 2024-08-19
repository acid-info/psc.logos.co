import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { Section, SectionTitle } from './StyledComponents'

interface Article {
  image: string
  title: string
  date: string
  author: string
  excerpt: string
  tags: string[]
  href: string
}

const articlesData: Article[] = [
  {
    image: '/assets/article-1.png',
    title: 'Device Pairing in Js-waku and Go-waku',
    date: 'Apr 24 2023',
    author: 'beachbum',
    excerpt:
      'Arcu ac viverra fringilla nibh. Tincidunt sit netus malesuada mattis aliquet amet. Aliquam montes odio mattis at aenean eget non ultrices dolor. Est nulla duis eget in amet pellentesque. Et eu eros consequat.',
    tags: ['tag', 'tag', 'tag'],
    href: 'https://press.logos.co/podcasts/hashing-it-out/devcon-7-south-east-asia',
  },
  {
    image: '/assets/article-2.png',
    title:
      'Waku Privacy and Anonymity Analysis Part I: Definitions and Waku Relay',
    date: 'Apr 24 2023',
    author: 'beachbum',
    excerpt:
      'Arcu ac viverra fringilla nibh. Tincidunt sit netus malesuada mattis aliquet amet. Aliquam montes odio mattis at aenean eget non ultrices dolor. Est nulla duis eget in amet pellentesque. Et eu eros consequat.',
    tags: ['tag', 'tag', 'tag'],
    href: 'https://press.logos.co/podcasts/hashing-it-out/devcon-7-south-east-asia',
  },
  {
    image: '/assets/article-3.png',
    title:
      'Waku Privacy and Anonymity Analysis Part I: Definitions and Waku Relay',
    date: 'Apr 24 2023',
    author: 'beachbum',
    excerpt:
      'Arcu ac viverra fringilla nibh. Tincidunt sit netus malesuada mattis aliquet amet. Aliquam montes odio mattis at aenean eget non ultrices dolor. Est nulla duis eget in amet pellentesque. Et eu eros consequat.',
    tags: ['tag', 'tag', 'tag'],
    href: 'https://press.logos.co/podcasts/hashing-it-out/devcon-7-south-east-asia',
  },
  {
    image: '/assets/article-4.png',
    title: 'Opinion: Pseudo-ethics in the Surveillance Tech Industry',
    date: 'Apr 24 2023',
    author: 'beachbum',
    excerpt:
      'Arcu ac viverra fringilla nibh. Tincidunt sit netus malesuada mattis aliquet amet. Aliquam montes odio mattis at aenean eget non ultrices dolor. Est nulla duis eget in amet pellentesque. Et eu eros consequat.',
    tags: ['tag', 'tag', 'tag'],
    href: 'https://press.logos.co/podcasts/hashing-it-out/devcon-7-south-east-asia',
  },
]

const ArticlesSection: React.FC = () => {
  return (
    <Section id="articles">
      <SectionTitle>Articles</SectionTitle>
      <ArticleList>
        {articlesData.map((article, index) => (
          <ArticleItem key={index}>
            <Link href={article.href} target="_blank">
              <ArticleImage src={article.image} alt={article.title} />
            </Link>
            <ArticleContent>
              <Link href={article.href} target="_blank">
                <ArticleTitle>{article.title}</ArticleTitle>
              </Link>
              <ArticleMeta>
                <ArticleDate>{article.date}</ArticleDate>
                <ArticleAuthor>by {article.author}</ArticleAuthor>
              </ArticleMeta>
              <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
              <TagList>
                {article.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </TagList>
            </ArticleContent>
          </ArticleItem>
        ))}
      </ArticleList>
      <SeeMoreButton>See more</SeeMoreButton>
    </Section>
  )
}

const ArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 64px 16px;
  margin-top: 64px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 40px;
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

  @media (max-width: 991px) {
    flex: 1 1 100%;
    min-width: unset;
  }
`

const ArticleImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`

const ArticleContent = styled.div`
  margin-top: 16px;
`

const ArticleTitle = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
`

const ArticleMeta = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  font-size: 14px;
  font-family: Helvetica, sans-serif;
`

const ArticleDate = styled.span``

const ArticleAuthor = styled.span``

const ArticleExcerpt = styled.p`
  margin-top: 16px;
  font-size: 14px;
  line-height: 20px;
`

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`

const Tag = styled.span`
  font-size: 12px;
  color: var(--text-color);
  padding: 4px 8px;
  border: 1px solid var(--text-color);
  font-family: Helvetica, sans-serif;
`

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
