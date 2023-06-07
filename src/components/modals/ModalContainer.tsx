import { Close } from '@mui/icons-material'
import { Box, Divider, IconButton, Modal, Typography } from '@mui/material'
import React from 'react'

interface ModalContainerProps {
  title: string
  open: boolean
  state: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
  size: string
}
/**
 *
 * @param size Recibe un string | sm | md | lg | xl |
 * @returns
 */
const ModalContainer = ({
  title,
  open,
  state,
  children,
  size
}: ModalContainerProps) => {
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
    <Modal
      open={open}
      onClose={() => state(false)}
      aria-labelledby={`modal-modal-${title}`}
      aria-describedby='modal-modal-description'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        p: 3,
        overflow: 'scroll'
      }}>
      <Box
        sx={{
          minWidth: '250px',
          width: {
            xs: '100%',
            sm: '100%',
            md: '80%',
            lg: sizeModal(size)
          },
          maxWidth: '1140px',
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 1,
          p: 2
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2
          }}>
          <Typography id={`modal-modal-${title}`} variant='h6' component='h2'>
            {title}
          </Typography>
          <IconButton onClick={() => state(false)}>
            <Close />
          </IconButton>
        </Box>
        <Divider />
        <Box mt={2}>{children}</Box>
      </Box>
    </Modal>
  )
}

export default ModalContainer
