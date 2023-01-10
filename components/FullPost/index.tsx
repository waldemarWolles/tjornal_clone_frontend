import React, { useEffect, useState } from 'react'

import styles from './FullPost.module.scss'
import { Button, Paper, Typography } from '@material-ui/core'
import { AddCommentForm } from '../AddCommentForm'
import { IComment, IPost } from '../../utils/api/types'
import { Api } from '../../utils/api'

interface IFullPostProps {
  postData: IPost
}

export const FullPost: React.FC<IFullPostProps> = ({ postData }) => {
  const [comments, setComments] = useState<IComment[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const array = await Api().comment.getAll()
        setComments(array)
      } catch (error) {
        console.warn('Fech comments', error)
      }
    })()
  }, [])

  const onAddComment = (comment: IComment) => {
    setComments((prev) => [...prev, comment])
  }

  const onRemoveComment = async (commentId: number) => {
    try {
      await Api().comment.delete(commentId)

      setComments((prev) => prev.filter((comment) => comment.id !== commentId))
    } catch (error) {
      console.warn('DELETING COMMENT FAILED', error)
    }
  }

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
        <AddCommentForm onSuccessAdd={onAddComment} postId={postData.id} />
        {comments
          .filter((comment) => comment.postId === postData.id)
          .map((comment, id) => {
            return (
              <Typography key={comment.id}>
                {comment.text}
                <Button onClick={() => onRemoveComment(comment.id)} variant="outlined">
                  Remove
                </Button>
              </Typography>
            )
          })}
      </div>
    </Paper>
  )
}
