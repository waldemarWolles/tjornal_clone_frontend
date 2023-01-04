import React from 'react'

import { IconButton, Paper, Typography } from '@material-ui/core'
import Image from 'next/image'
import styles from './Post.module.scss'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ShareIcon from '@material-ui/icons/Share'
import clsx from 'clsx'
import Link from 'next/link'

interface IPostProps {
  title: string
  id: number
  description: string
  imageUrl?: string
}

export const Post: React.FC<IPostProps> = ({ title, description, imageUrl, id }) => {
  return (
    <Paper elevation={0} className={clsx('p-20 mb-30', styles.content)} classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href={`/news/${id}`}>
          <a>{title}</a>
        </Link>
      </Typography>
      <Typography className="mt-15 mb-15">{description}</Typography>
      {imageUrl && <Image width={640} height={427} src={imageUrl} alt="post_image" />}
      <ul className={styles.actions}>
        <li>
          <IconButton>
            <ModeCommentOutlinedIcon />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <BookmarkBorderOutlinedIcon />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </li>
      </ul>
    </Paper>
  )
}
