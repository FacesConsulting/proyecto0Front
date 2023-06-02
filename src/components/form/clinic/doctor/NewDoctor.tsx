import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Avatar, Box, IconButton } from '@mui/material'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'

function UserCard ({ doctor }) {
  return (
    <Grid item xs={4}>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff'
        }}>
        <Grid container spacing={2}>
          <Grid item display='flex' justifyContent='center' alignItems='center'>
            <Avatar variant='circular'></Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant='subtitle1'
                  style={{ fontWeight: 600 }}
                  component='div'>
                  {doctor.name}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  component='div'>
                  {doctor.profession}
                </Typography>
                <Typography
                  gutterBottom
                  variant='subtitle2'
                  style={{ fontWeight: 400 }}
                  component='div'>
                  <FmdGoodIcon fontSize='small' /> {doctor.location}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <IconButton>
                <MoreVertOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default function ComplexGrid () {
  const [doctor] = useState([
    {
      name: 'Ronald Jacobs',
      profession: 'Cardiologo',
      location: 'United States, México'
    },
    {
      name: 'Ronald Jacobs',
      profession: 'Cardiologo',
      location: 'United States, México'
    },
    {
      name: 'Ronald Jacobs',
      profession: 'Cardiologo',
      location: 'United States, México'
    },
    {
      name: 'Ronald Jacobs',
      profession: 'Cardiologo',
      location: 'United States, México'
    },
    {
      name: 'Ronald Jacobs',
      profession: 'Cardiologo',
      location: 'United States, México'
    },
    {
      name: 'Ronald Jacobs',
      profession: 'Cardiologo',
      location: 'United States, México'
    },
    {
      name: 'Ronald Jacobs',
      profession: 'Cardiologo',
      location: 'United States, México'
    },
    {
      name: 'Ronald Jacobs',
      profession: 'Cardiologo',
      location: 'United States, México'
    },
    {
      name: 'Ronald Jacobs',
      profession: 'Cardiologo',
      location: 'United States, México'
    }
  ])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {doctor.map((doctor, index) => (
          <UserCard key={index} doctor={doctor} />
        ))}
      </Grid>
    </Box>
  )
}
