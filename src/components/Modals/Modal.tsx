import styled from '@emotion/styled'
import { FC, ReactNode } from 'react'

// These are your styled components
const ModalWrapper = styled.div<{
  zIndex: number
  noOverlay: boolean
  opacity?: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; // This is the important one
  width: 100%;
  height: 100%;
  background-color: ${({ noOverlay, opacity }) =>
    noOverlay
      ? 'transparent'
      : opacity
      ? `rgba(0, 0, 0, ${opacity})`
      : 'rgba(0, 0, 0, 0.5)'};
  z-index: 9999;
`

const ModalContent = styled.div`
  z-index: 10000;
`

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose?: any
  zIndex?: number
  noOverlay?: boolean
  opacity?: string
}

// This is your modal component
const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  zIndex = 0,
  noOverlay = false,
  opacity,
}) => {
  if (!isOpen) {
    return null
  }

  return (
    <ModalWrapper
      zIndex={zIndex}
      onClick={onClose}
      noOverlay={noOverlay}
      opacity={opacity}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
