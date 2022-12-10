import type { NextPage } from 'next'
import MainLayout from '../layouts/MainLayout'
import { Messages } from '../components/Messages'

const MessagesPage: NextPage = () => {
  return (
    <MainLayout fullWidth>
      <Messages />
    </MainLayout>
  )
}

export default MessagesPage
