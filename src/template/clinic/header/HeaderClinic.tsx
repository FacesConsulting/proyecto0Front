import { Menu } from '@mui/icons-material'
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material'
import { useState } from 'react'
import NavbarClinic from '../navbar/NavbarClinic'

const HeaderClinic = () => {
  const [open, setOpen] = useState<boolean>(false)
  const drawerWidth = 240
  return (
    <>
      <AppBar
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color='inherit'
            size='large'
            edge='start'
            onClick={() => setOpen(true)}
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}>
            <Menu />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            {process.env.NEXT_PUBLIC_COMPANY_NAME}
          </Typography>
        </Toolbar>
      </AppBar>

      <Hidden mdDown>
        <Drawer
          variant='permanent'
          open={open}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box'
            }
          }}
          onClose={() => setOpen(false)}>
          <Toolbar />
          <NavbarClinic />
        </Drawer>
      </Hidden>

      <Hidden mdUp>
        <Drawer
          variant='temporary'
          open={open}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box'
            }
          }}
          onClose={() => setOpen(false)}>
          <Toolbar />
          <NavbarClinic />
        </Drawer>
      </Hidden>
    </>
  )
}

export default HeaderClinic
