import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'
import Modal from './Modal'

const LightningTalksModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(`
- Name / Alias
- Project Link
- Brief Project Description (280 characters)
- Goals of the Project
- Project Stage
- Who from your team will be available to speak on Nov. 11 in Bangkok?
- Contact Information (Email, Telegram)
- Social Media Links
    `)

    alert('Copied to clipboard')
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Container>
        <Header>
          <h2>Submit Your Talk</h2>
          <CloseButton onClick={onClose}>
            <img src="/assets/close.svg" />
          </CloseButton>
        </Header>
        <p>
          Want to present your project at our upcoming event in Bangkok on
          November 11?
          <br />
          <br />
          PREPARE the following details and email them to us at
          <a href="mailto:events@logos.co">events@logos.co</a>:
        </p>
        <ul>
          <li>Name / Alias</li>
          <li>Project Link</li>
          <li>Brief Project Description (280 characters)</li>
          <li>Goals of the Project</li>
          <li>Project Stage</li>
          <li>
            Who from your team will be available to speak on Nov. 11 in Bangkok?
          </li>
          <li>Contact Information (Email, Telegram)</li>
          <li>Social Media Links</li>
        </ul>
        <Buttons>
          <Button color="white" onClick={handleCopy}>
            Copy to clipboard
          </Button>
          <Link href="mailto:events@logos.co">
            <Button color="black">Send email</Button>
          </Link>
        </Buttons>
      </Container>
    </Modal>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  background-color: #fff;
  width: 634px;
  padding: 24px;
  flex-shrink: 0;

  * {
    white-space: pre-wrap;
    line-height: 20px;
  }

  h2 {
    font-size: 24px;
  }

  ul {
    padding: 0;
    margin: 0;
    margin-top: 124px;
    margin-bottom: 58px;

    @media (max-width: ${breakpoints.sm}px) {
      margin-top: 62px;
      margin-bottom: 57px;
    }
  }

  p {
    width: 355px;
    font-size: 14px;
    text-transform: uppercase;
  }

  li {
    font-size: 14px;
    text-transform: uppercase;
    margin-left: 14px;
  }

  & > p > a {
    font-size: 14px;
    text-decoration-line: underline;
    text-transform: uppercase;
    text-decoration: underline;
    margin-left: 8px;
  }

  @media (max-width: ${breakpoints.sm}px) {
    width: calc(100vw - 24px);
    margin: 12px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: ${breakpoints.sm}px) {
    margin-bottom: 57px;
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & > * {
    width: 100%;
  }

  a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
  }
`

const Button = styled.button<{ color: 'white' | 'black' }>`
  background-color: ${({ color }) => (color === 'white' ? '#fff' : '#000')};
  color: ${({ color }) => (color === 'white' ? '#000' : '#fff')};
  padding: 10px 0;
  font-size: 14px;
  border: ${({ color }) =>
    color === 'white' ? '1px solid #000' : '1px solid #fff'};
  text-transform: uppercase;
  width: 100%;
`

const CloseButton = styled.button`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  height: 18px;
`

export default LightningTalksModal
