import { Paper, Typography } from '@material-ui/core'
import type { GetServerSideProps, NextPage } from 'next'
import { FullPost } from '../../components/FullPost'
import MainLayout from '../../layouts/MainLayout'
import { Api } from '../../utils/api'
import { IPost } from '../../utils/api/types'

interface IRatingsPageProps {
  post: IPost
}

const RatingsPage: NextPage<IRatingsPageProps> = ({ post }) => {
  return (
    <MainLayout fullWidth hideComments>
      <FullPost postData={post} />
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx?.params?.id
    const post = await Api(ctx).post.getOne(+id!)

    return {
      props: {
        post,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}

export default RatingsPage
