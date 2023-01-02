import { Button, TextField } from '@material-ui/core'
import styles from './Write.module.scss'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { OutputData } from '@editorjs/editorjs'

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false })

interface WriteProps {
  defaultTitle?: string
}
const Write: React.FC<WriteProps> = ({ defaultTitle }) => {
  const [title, setTitle] = useState('')
  const [blocks, setBlocks] = useState<OutputData['blocks']>([])
  console.log(blocks)

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <TextField value={title} onChange={(e) => setTitle(e.target.value)} className={styles.titleInput} placeholder="Title" />

      <div className={styles.editor}>
        <Editor onChange={(arr) => setBlocks(arr)} />
      </div>

      <Button variant="contained" className={styles.penButton}>
        Publish
      </Button>
    </div>
  )
}

export default Write
