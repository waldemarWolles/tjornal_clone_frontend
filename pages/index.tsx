import type { NextPage } from 'next'
import { Post } from '../components/Post'
import MainLayout from '../layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout fullWidth={false}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  )
}

export default Home
