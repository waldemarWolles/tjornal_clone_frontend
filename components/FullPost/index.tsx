import React from 'react'

import styles from './FullPost.module.scss'
import { Paper, Typography } from '@material-ui/core'
import { AddCommentForm } from '../AddCommentForm'
import { IPost } from '../../utils/api/types'

interface IFullPostProps {
  postData: IPost
}

export const FullPost: React.FC<IFullPostProps> = ({ postData }) => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className={styles.paper} style={{ margin: '0 auto', width: 680 }}>
        <Typography variant="h4" style={{ fontWeight: 500 }}>
          {postData.title}
        </Typography>
        <div>
          {postData?.body?.length >= 1 &&
            postData.body.map((block) => {
              return <Typography key={block.id} dangerouslySetInnerHTML={{ __html: block?.data?.text }} />
            })}
        </div>
        <AddCommentForm postId={postData.id} />
        <Typography>Comment 1</Typography>
        <Typography>Comment 2</Typography>
        <Typography>Comment 3</Typography>
        <Typography>Comment 4</Typography>
      </div>
    </Paper>
  )
}
