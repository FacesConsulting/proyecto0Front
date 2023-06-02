import React, { useState } from 'react'
import { Add } from '@mui/icons-material'
import { Box, Breadcrumbs, Button, Typography } from '@mui/material'
import Link from 'next/link'
import ModalNewDoctor from '@/components/modals/clinic/doctors/ModalNewDoctor'
import NewDoctor from '@/components/form/clinic/doctor/NewDoctor'

const ListDoctors = () => {
  const [viewModal, setViewModal] = useState<boolean>(false)

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <Box>
          <Typography
            variant='h5'
            component={'h2'}
            sx={{ typography: { fontWeight: 600 } }}
            mb={1}>
            Doctores
          </Typography>
          <Breadcrumbs aria-label='breadcrumb' separator='•'>
            <Link href='/'>
              <Typography color={'inherit'}>Inicio</Typography>
            </Link>
            <Link href='/'>Doctor</Link>
            <Typography color='text.primary.ligth'>Lista Doctor</Typography>
          </Breadcrumbs>
        </Box>
        <Box>
          <Button
            startIcon={<Add />}
            variant='contained'
            size='small'
            onClick={() => setViewModal(true)}>
            nuevo
          </Button>
        </Box>
      </Box>
      <div>
        <ModalNewDoctor
          title='Nuevo Doctor'
          open={viewModal}
          state={setViewModal}
        />
      </div>
      <Box>
        <NewDoctor></NewDoctor>
      </Box>
    </>
  )
}

export default ListDoctors
