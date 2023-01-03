import { Button, TextField } from '@material-ui/core'
import styles from './Write.module.scss'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { OutputData } from '@editorjs/editorjs'
import { Api } from '../../utils/api'

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false })

interface WriteProps {
  defaultTitle?: string
}
const Write: React.FC<WriteProps> = ({ defaultTitle }) => {
  const [title, setTitle] = useState('')
  const [blocks, setBlocks] = useState<OutputData['blocks']>([])

  const onAddPost = async () => {
    try {
      const post = await Api().post.create({
        title,
        body: blocks,
      })
      console.log(post)
    } catch (error) {
      console.warn('Create post', error)
    }
  }

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <TextField value={title} onChange={(e) => setTitle(e.target.value)} className={styles.titleInput} placeholder="Title" />

      <div className={styles.editor}>
        <Editor onChange={(arr) => setBlocks(arr)} />
      </div>

      <Button onClick={onAddPost} variant="contained" className={styles.penButton}>
        Publish
      </Button>
    </div>
  )
}

export default Write
