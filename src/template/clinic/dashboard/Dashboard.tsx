'use client'
import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { getSession } from 'next-auth/react'
const Dashboard = () => {
  useEffect(() => {
    (async () => {
      const session = await getSession()
      console.log(session)
    })()
  }, [])
  return (
    <Box>
      <Typography variant='h4' component={'h2'}>
        Dashboard
      </Typography>
    </Box>
  )
}

export default Dashboard
