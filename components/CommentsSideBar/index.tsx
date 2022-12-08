/* eslint-disable @next/next/link-passhref */
import React, { useState } from 'react'

import { Button, Typography } from '@material-ui/core'
import styles from './CommentsSideBar.module.scss'
import AvatarIcon from '@material-ui/icons/PermIdentity'
import Link from 'next/link'
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'

const comments = [
  { text: 'Liadasdasdasdasdasdne ', icon: <AvatarIcon /> },
  { text: 'Messaasdasdasdasdasdasges', icon: <AvatarIcon /> },
  { text: 'Ratidasdasdasdasdasdng TJ', icon: <AvatarIcon /> },
  { text: 'Subasdasdasdasdasdasdscriptions', icon: <AvatarIcon /> },
]

type Comment = {
  text: string
  id: number
  createdAt: string
  user: {
    fullName: string
    avatarUrl: string
  }
}

interface PropsType {
  items?: Comment[]
}

export const CommentsSideBar: React.FC<PropsType> = ({ items }) => {
  const [visible, setVisible] = useState(true)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return visible ? (
    <div className={styles.commentsSideBar}>
      <Typography onClick={toggleVisible} variant="h6" className={styles.title}>
        Comments
        <ArrowRightIcon width={15} height={10} />
      </Typography>

      <ul>
        {comments.map((obj, id) => {
          return (
            <li key={id}>
              <Link href={''}>
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
  ) : (
    <div onClick={toggleVisible} className={styles.commentsHiddenSideBar}>
      <ArrowLeftIcon width={15} height={10} />
    </div>
  )
}
