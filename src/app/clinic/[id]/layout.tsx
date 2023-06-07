// import { authOptions } from '@/pages/api/auth/[...nextauth]'
import BoxClinic from '@/template/clinic/box/BoxClinic'
import React from 'react'

interface IProps {
  children: React.ReactNode
}

export default function ClinicLayout ({
  children // will be a page or nested layout
}: IProps) {
  return <BoxClinic>{children}</BoxClinic>
}
