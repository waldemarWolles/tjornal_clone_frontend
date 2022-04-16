import React from 'react'

import { Button, Paper, Typography } from '@material-ui/core'
import Image from 'next/image'
import styles from './SideBarMenu.module.scss'
import LocalFireDepartmentIcon from '@material-ui/icons/Whatshot'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'

export const SideBarMenu: React.FC = () => {
  return (
    <div className={styles.sideBarMenu}>
      <ul>
        <li>
          <Button>
            <LocalFireDepartmentIcon />
            Line
          </Button>
        </li>
        <li>
          <Button>
            <AccessTimeIcon />
            Recent
          </Button>
        </li>
        <li>
          <Button>
            <TrendingUpIcon />
            Rating TJ
          </Button>
        </li>
        <li>
          <Button>
            <FormatListBulletedIcon />
            Subscriptions
          </Button>
        </li>
      </ul>
    </div>
  )
}
