import { NextPage } from 'next'
import React from 'react'
import { Profile } from '../../components/Profile'
import MainLayout from '../../layouts/MainLayout'

const ProfilePage: NextPage = () => {
  return (
    <MainLayout>
      <Profile />
    </MainLayout>
  )
}

export default ProfilePage
