import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'

interface BannerContainerProps {
  showNavbarFromHeader: boolean
}

const BannerContainer = styled.div<BannerContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: ${({ showNavbarFromHeader }) =>
    showNavbarFromHeader
      ? '0'
      : uiConfigs.navbarRenderedHeight
      ? `${uiConfigs.navbarRenderedHeight}px`
      : '60px'};
  left: 0;
  width: 100%;
  background: black;
  color: white;
  padding: 14px 0;
  z-index: 999;
  transition: top 0.3s ease-in-out;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.14px;
  text-align: center;

  a {
    color: white;
    margin-left: 0.5em;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }

  @media (max-width: 991px) {
    top: 0 !important;
  }

  @media (max-width: ${breakpoints?.sm ? `${breakpoints.sm}px` : '768px'}) {
    font-size: 12px;
    line-height: 16px;
    padding: 10px 0;
    a {
      margin-left: 0.3em;
    }
  }
`

interface BannerProps {
  showNavbarFromHeader: boolean
}

const Banner: React.FC<BannerProps> = ({ showNavbarFromHeader }) => {
  return (
    <BannerContainer showNavbarFromHeader={showNavbarFromHeader}>
      <span>Who&apos;s ready for round 2?</span>
      <a href="https://psf.logos.co" target="_blank" rel="noopener noreferrer">
        psf.logos.co
      </a>
    </BannerContainer>
  )
}

export default Banner
