import { Post } from '../components/Post'
import MainLayout from '../layouts/MainLayout'

export default function Home() {
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
