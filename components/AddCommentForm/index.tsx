import React, { useState } from 'react'

import styles from './AddCommentForm.module.scss'
import { Button, Paper, Typography } from '@material-ui/core'
import Input from '@material-ui/core/Input'

export const AddCommentForm: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  console.log(text)

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
        <Button onClick={() => setText('')} disabled={!text} className={styles.button} color="primary" variant="contained">
          Publish
        </Button>
      )}
    </div>
  )
}
