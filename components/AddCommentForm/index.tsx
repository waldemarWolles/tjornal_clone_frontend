import React, { useState } from 'react'

import styles from './AddCommentForm.module.scss'
import { Button, Paper, Typography } from '@material-ui/core'
import Input from '@material-ui/core/Input'
import { Api } from '../../utils/api'
import { useAppSelector } from '../../redux/hooks'
import { selectUserData } from '../../redux/slices/user'
import { IComment } from '../../utils/api/types'

interface IAddCommentFormProps {
  postId: number
  onSuccessAdd: (comment: IComment) => void
}

export const AddCommentForm: React.FC<IAddCommentFormProps> = ({ postId, onSuccessAdd }) => {
  const isAuth = useAppSelector(selectUserData)
  const [clicked, setClicked] = useState<boolean>(false)
  const [text, setText] = useState<string>('')

  const onAddComment = async () => {
    try {
      const comment = await Api().comment.create({
        postId,
        text,
      })
      onSuccessAdd(comment)

      setClicked(false)
      setText('')
    } catch (error) {
      console.warn('onAddComment', error)
    }
  }

  if (!isAuth) {
    return null
  }

  return (
    <div className={styles.formContainer}>
      <Input
        value={text}
        onFocus={() => setClicked(true)}
        minRows={clicked ? 5 : 1}
        onChange={(e) => setText(e.target.value)}
        classes={{ root: styles.fieldRoot }}
        placeholder="Write a comment"
        fullWidth
        multiline
      />
      {clicked && (
        <Button onClick={onAddComment} disabled={!text} className={styles.button} color="primary" variant="contained">
          Publish
        </Button>
      )}
    </div>
  )
}
