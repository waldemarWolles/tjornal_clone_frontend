import type { NextPage } from 'next'
import MainLayout from '../layouts/MainLayout'
import Write from '../components/Write'

const WritePage: NextPage = () => {
  return (
    <MainLayout className="main-layout-white" fullWidth hideMenu hideComments>
      <Write defaultTitle="DEFAUTL VALUE" />
    </MainLayout>
  )
}

export default WritePage
