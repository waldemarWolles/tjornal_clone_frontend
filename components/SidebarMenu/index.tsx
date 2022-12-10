/* eslint-disable @next/next/link-passhref */
import React from 'react'

import { Button } from '@material-ui/core'
import styles from './SideBarMenu.module.scss'
import LocalFireDepartmentIcon from '@material-ui/icons/Whatshot'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import MessageIcon from '@material-ui/icons/Message'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menu = [
  { text: 'Line ', icon: <LocalFireDepartmentIcon />, path: '/' },
  { text: 'Messages', icon: <MessageIcon />, path: '/messages' },
  { text: 'Rating TJ', icon: <TrendingUpIcon />, path: '/ratings' },
  { text: 'Subscriptions', icon: <FormatListBulletedIcon />, path: '/subscriptions' },
]

export const SideBarMenu: React.FC = () => {
  const router = useRouter()

  console.log(router)

  return (
    <div className={styles.sideBarMenu}>
      <ul>
        {menu.map((obj) => {
          return (
            <li key={obj.path}>
              <Link href={obj.path}>
                <a>
                  <Button variant={router.asPath === obj.path ? 'contained' : 'text'}>
                    {obj.icon}
                    {obj.text}
                  </Button>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
