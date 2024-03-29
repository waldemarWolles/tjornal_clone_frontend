import type { GetServerSideProps, NextPage } from 'next'
import MainLayout from '../../layouts/MainLayout'
import Write from '../../components/Write'
import { Api } from '../../utils/api'
import { IPost } from '../../utils/api/types'

interface IWritePageProps {
  post: IPost
}

const WritePage: NextPage<IWritePageProps> = ({ post }) => {
  return (
    <MainLayout className="main-layout-white" fullWidth hideMenu hideComments>
      <Write data={post} defaultTitle="DEFAUTL VALUE" />
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx?.params?.id

    const post = await Api(ctx).post.getOne(+id!)
    const user = await Api(ctx).user.getMe()

    if (post?.user?.id !== user.id) {
      return {
        props: {},
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

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

export default WritePage
