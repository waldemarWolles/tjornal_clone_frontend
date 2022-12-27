/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/jsx-no-comment-textnodes */
import clsx from 'clsx'
import type { NextPage } from 'next'
import Head from 'next/head'
import { CommentsSideBar } from '../components/CommentsSideBar'
import { Header } from '../components/Header'
import { SideBarMenu } from '../components/SidebarMenu'

type Props = {
  fullWidth?: boolean
  hideMenu?: boolean
  hideComments?: boolean
  className?: string
}

const MainLayout: NextPage<Props> = ({ children, fullWidth, hideMenu, hideComments, className }) => {
  return (
    <div>
      <Header />
      <div className={className}>
        {!hideMenu && (
          <div className="leftSide">
            <SideBarMenu />
          </div>
        )}
        <div className={clsx('content', `${fullWidth && 'full-width'}`)}>{children}</div>
        {!hideComments && (
          <div className="rightSide">
            <CommentsSideBar />
          </div>
        )}
      </div>
    </div>
  )
}

export default MainLayout
