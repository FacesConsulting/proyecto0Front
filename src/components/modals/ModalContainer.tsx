import { Box } from '@mui/material'
import React from 'react'

interface ModalContainerProps {
  children: React.ReactNode
  size: string
}
/**
 *
 * @param size Recibe un string | sm | md | lg | xl |
 * @returns
 */
const ModalContainer = ({ children, size }: ModalContainerProps) => {
  const sizeModal = (size: string) => {
    switch (size) {
      case 'sm':
        return '300px'
      case 'lg':
        return '800px'
      case 'xl':
        return '1140px'
      default:
        return '500px'
    }
  }

  return (
    <Box
      sx={{
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: (theme) => (theme.breakpoints.up('md') ? sizeModal(size) : '100%'),
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 1,
        p: 2
      }}>
      {children}
    </Box>
  )
}

export default ModalContainer
