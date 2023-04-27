'use client'
import { Box, Typography } from '@mui/material'

const page = ({ params }: { params: { id: string } }) => {
  return (
    <Box>
      <Typography variant='h4' component={'h2'}>
        Dashboard
      </Typography>
    </Box>
  )
}

export default page
