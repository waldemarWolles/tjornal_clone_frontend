/* eslint-disable @next/next/link-passhref */
import React from 'react'

import { Button } from '@material-ui/core'
import styles from './SideBarMenu.module.scss'
import LocalFireDepartmentIcon from '@material-ui/icons/Whatshot'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import MessageIcon from '@material-ui/icons/Message'
import Link from 'next/link'

const menu = [
  { text: 'Line ', icon: <LocalFireDepartmentIcon />, path: '/' },
  { text: 'Messages', icon: <MessageIcon />, path: '/messages' },
  { text: 'Rating TJ', icon: <TrendingUpIcon />, path: '/ratings' },
  { text: 'Subscriptions', icon: <FormatListBulletedIcon />, path: '/subscriptions' },
]

export const SideBarMenu: React.FC = () => {
  return (
    <div className={styles.sideBarMenu}>
      <ul>
        {menu.map((obj) => {
          return (
            <li key={obj.path}>
              <Link href={obj.path}>
                <Button>
                  {obj.icon}
                  {obj.text}
                </Button>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
