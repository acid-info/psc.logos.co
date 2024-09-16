import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Section, SectionTitle } from './StyledComponents'

interface MerchandiseItem {
  image: string
  name: string
  price: string
}

const merchandiseData: MerchandiseItem[] = [
  {
    image: '/assets/products/stickers/Sticker_1.jpg',
    name: 'Sticker 1',
    price: '$10.00',
  },
  {
    image: '/assets/products/stickers/Sticker_2.jpg',
    name: 'Sticker 2',
    price: '$10.00',
  },
  {
    image: '/assets/products/stickers/Sticker_3.jpg',
    name: 'Sticker 3',
    price: '$10.00',
  },
  {
    image: '/assets/products/stickers/Sticker_4.jpg',
    name: 'Sticker 4',
    price: '$10.00',
  },
  {
    image: '/assets/products/stickers/Sticker_5.jpg',
    name: 'Sticker 5',
    price: '$10.00',
  },
  {
    image: '/assets/products/tees/Tee_1_Back.jpg',
    name: 'Tee 1',
    price: '$10.00',
  },
  {
    image: '/assets/products/tees/Tee_2_Back.jpg',
    name: 'Tee 2',
    price: '$10.00',
  },
  {
    image: '/assets/products/tees/Tee_3_Back.jpg',
    name: 'Tee 3',
    price: '$10.00',
  },
  {
    image: '/assets/products/tees/Tee_ALL_fronts.jpg',
    name: 'Tee All Fronts',
    price: '$10.00',
  },
  {
    image: '/assets/products/tees/Tee_ORANGE_Back.jpg',
    name: 'Tee Orange',
    price: '$10.00',
  },
  {
    image: '/assets/products/tees/Tee_PURPLE_Back.jpg',
    name: 'Tee Purple',
    price: '$10.00',
  },
  {
    image: '/assets/products/hats/buckethat_1.jpg',
    name: 'Bucket Hat 1',
    price: '$10.00',
  },
  {
    image: '/assets/products/hats/Cap_1.jpg',
    name: 'Cap 1',
    price: '$10.00',
  },
  {
    image: '/assets/products/hats/Cap_2.jpg',
    name: 'Cap 2',
    price: '$10.00',
  },
]

const MerchandiseSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false)
  return (
    <Section id="merchandise">
      <Header>
        <SectionTitle>Merchandise</SectionTitle>
        <SeeMoreButton onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? 'Show less' : 'Show more'}
        </SeeMoreButton>
      </Header>
      <ProductList>
        {merchandiseData
          .slice(0, showAll ? merchandiseData.length : 4)
          .map((item, index) => (
            <ProductItem key={index}>
              <ProductImage src={item.image} alt={item.name} />
              <ProductInfo>
                <ProductName>{item.name}</ProductName>
                {/* <ProductPrice>{item.price}</ProductPrice> */}
              </ProductInfo>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            </ProductItem>
          ))}
      </ProductList>
    </Section>
  )
}

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`

const SeeMoreButton = styled.button`
  font-size: 12px;
  color: var(--text-color);
  padding: 6px 12px;
  border: 1px solid var(--text-color);
  background: none;
  cursor: pointer;

  :hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }
`

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 64px;

  @media (max-width: 991px) {
    margin-top: 40px;
    grid-template-columns: repeat(2, 1fr);
  }
`

const ProductItem = styled.div`
  flex: 1 1 calc(25% - 16px);
  min-width: 240px;
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    flex: 1 1 calc(50% - 16px);
    min-width: unset;
  }
`

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`

const ProductInfo = styled.div`
  margin-top: 16px;
`

const ProductName = styled.div`
  font-size: 20px;
  color: var(--text-color);
`

const ProductPrice = styled.div`
  font-size: 12px;
  color: var(--text-color);
  margin-top: 4px;
`

const ComingSoonBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  line-height: 24px;

  padding: 0 12px;
  font-size: 14px;

  margin-top: 32px;
  width: fit-content;
  height: 34px;
`

export default MerchandiseSection
