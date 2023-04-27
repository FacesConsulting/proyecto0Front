'use client'

import { Box, Toolbar } from '@mui/material'
import HeaderClinic from '../header/HeaderClinic'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const BoxClinic = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SessionProvider>
        <HeaderClinic />
        <Box component={'main'} sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </SessionProvider>
    </Box>
  )
}

export default BoxClinic
