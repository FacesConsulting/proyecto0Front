import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Avatar, Box, IconButton, Menu, MenuItem } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'

const options = ['Ninguno', 'Editar', 'ver Paciente']
const ITEM_HEIGHT = 48

function UserCard({ doctor }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Grid item xs={4}>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Avatar variant='circular'></Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant='subtitle1'
                  style={{ fontWeight: 600 }}
                  component='div'
                >
                  {doctor.name}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  component='div'
                >
                  {doctor.profession}
                </Typography>
                <Typography
                  gutterBottom
                  variant='subtitle2'
                  style={{ fontWeight: 400, marginTop: '0.5rem' }}
                  component='div'
                >
                  <LocationOnIcon fontSize='small' /> {doctor.location}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <IconButton
                aria-label='more'
                id='long-button'
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup='true'
                onClick={handleClick}
              >
                <MoreVertOutlinedIcon />
              </IconButton>
              <Menu
                id='long-menu'
                MenuListProps={{
                  'aria-labelledby': 'long-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch'
                  }
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === 'Pyxis'}
                    onClick={handleClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default function ComplexGrid () {
  const [doctors] = useState([
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
        {doctors.map((doctor, index) => (
          <UserCard key={index} doctor={doctor} />
        ))}
      </Grid>
    </Box>
  )
}
