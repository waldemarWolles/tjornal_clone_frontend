/* eslint-disable @next/next/link-passhref */
import React, { useState } from 'react'

import { Button, Typography } from '@material-ui/core'
import styles from './CommentsSideBar.module.scss'
import AvatarIcon from '@material-ui/icons/PermIdentity'
import Link from 'next/link'
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import { useComments } from '../../hooks/useComments'

export const CommentsSideBar: React.FC = () => {
  const { comments } = useComments()
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
        {comments.map((comment, id) => {
          return (
            <li key={id}>
              <Link href={`/profile/${comment.user.id}`}>
                <a>
                  <Button>
                    {comment.user.fullName}
                    {comment.text}
                  </Button>
                </a>
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
