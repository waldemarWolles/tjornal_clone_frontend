import type { NextPage } from 'next'
import MainLayout from '../layouts/MainLayout'
import { Subscriptions } from '../components/Subscriptions'

const SubscriptionsPage: NextPage = () => {
  return (
    <MainLayout fullWidth>
      <Subscriptions />
    </MainLayout>
  )
}

export default SubscriptionsPage
