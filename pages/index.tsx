import { NextPage } from 'next'
import { Post } from '../components/Post'
import MainLayout from '../layouts/MainLayout'
import { Api } from '../utils/api'
import { IPost } from '../utils/api/types'

interface IHomeProps {
  posts: IPost[]
}

const Home: NextPage<IHomeProps> = ({ posts }) => {
  console.log(posts)

  return (
    <MainLayout fullWidth={false}>
      {posts?.map((post, id) => {
        return <Post key={post.id} title={post.title} id={post.id} description={post.description} />
      })}
    </MainLayout>
  )
}

export const getServerSideProps = async (ctx) => {
  try {
    const posts = await Api().post.getAll()

    return {
      props: {
        posts,
      },
    }
  } catch (error) {
    console.log(error)
  }

  return { props: { posts: null } }
}

export default Home
