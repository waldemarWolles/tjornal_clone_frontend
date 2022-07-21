import React from 'react'

import { IconButton, Paper, Typography } from '@material-ui/core'
import Image from 'next/image'
import styles from './Post.module.scss'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ShareIcon from '@material-ui/icons/Share'
import clsx from 'clsx'
import Link from 'next/link'

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} className={clsx('p-20 mb-30', styles.content)} classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href="/news/test-123">
          <a>White House releases in-space servicing strategy</a>
        </Link>
      </Typography>
      <Typography className="mt-15 mb-15">
        COLORADO SPRINGS — A new federal strategy seeks to coordinate activities among agencies and interaction with the private sector to
        advance work making and repairing spacecraft in space. The White House’s Office of Science and Technology Policy (OSTP) released a
        national strategy for what it calls in-space servicing, assembly and manufacturing (ISAM) April 4. The document, released with
        little fanfare by the administration, establishes a set of goals for supporting the development of technologies and services ranging
        from refueling and repairing satellites to building new spacecraft in orbit. “We see this inflection point where, at least for us,
        sustaining U.S.”
      </Typography>
      <Image
        width={640}
        height={427}
        src="https://nypost.com/wp-content/uploads/sites/2/2022/03/Space-sex-feature.jpg?quality=75&strip=all"
        alt=""
      />
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
