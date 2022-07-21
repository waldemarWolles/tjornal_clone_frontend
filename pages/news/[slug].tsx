import { Paper, Typography } from '@material-ui/core'
import type { NextPage } from 'next'
import { FullPost } from '../../components/FullPost'
import MainLayout from '../../layouts/MainLayout'

const RatingsPage: NextPage = () => {
  return (
    <MainLayout fullWidth>
      <FullPost />
    </MainLayout>
  )
}

export default RatingsPage
