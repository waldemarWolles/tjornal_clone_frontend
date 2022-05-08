import type { NextPage } from 'next'
import MainLayout from '../layouts/MainLayout'
import Ratings from '../components/Ratings'

const RatingsPage: NextPage = () => {
  return (
    <MainLayout fullWidth>
      <Ratings />
    </MainLayout>
  )
}

export default RatingsPage
