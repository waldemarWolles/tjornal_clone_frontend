import { NextPage } from 'next'
import React from 'react'
import { Settings } from '../../components/Settings'
import MainLayout from '../../layouts/MainLayout'

const ProfilePage: NextPage = () => {
  return (
    <MainLayout fullWidth={true}>
      <Settings />
    </MainLayout>
  )
}

export default ProfilePage
