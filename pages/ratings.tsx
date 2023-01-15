import type { NextPage } from 'next'
import MainLayout from '../layouts/MainLayout'
import Ratings from '../components/Ratings'
import { Api } from '../utils/api'
import { IResponseUserDto } from '../utils/api/types'

interface IRatingsPageProps {
  users: IResponseUserDto[]
}

const RatingsPage: NextPage<IRatingsPageProps> = ({ users }) => {
  return (
    <MainLayout fullWidth>
      <Ratings users={users} />
    </MainLayout>
  )
}

export const getServerSideProps = async () => {
  try {
    const users = await Api().user.getAll()
    console.log(users)

    return {
      props: {
        users,
      },
    }
  } catch (error) {
    console.log(error)
  }

  return { props: { users: null } }
}

export default RatingsPage
