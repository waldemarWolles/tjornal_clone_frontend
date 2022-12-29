import type { GetServerSideProps, NextPage } from 'next'
import { Post } from '../components/Post'
import MainLayout from '../layouts/MainLayout'
import { wrapper } from '../redux/store'
import { parseCookies } from 'nookies'
import { UserApi } from '../utils/api'
import { setuserData } from '../redux/slices/user'

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
