import { Button, TextField } from '@material-ui/core'
import styles from './Write.module.scss'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { OutputData } from '@editorjs/editorjs'
import { Api } from '../../utils/api'
import { IPost } from '../../utils/api/types'
import { useRouter } from 'next/router'

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false })

interface IWriteProps {
  defaultTitle?: string
  data?: IPost
}
const Write: React.FC<IWriteProps> = ({ defaultTitle, data }) => {
  const router = useRouter()
  const [title, setTitle] = useState(data?.title || defaultTitle || '')
  const [blocks, setBlocks] = useState<OutputData['blocks']>(data?.body || [])

  const onAddPost = async () => {
    try {
      const obj = {
        title,
        body: blocks,
      }
      if (!data) {
        const post = await Api().post.create(obj)
        await router.push(`/write/${post.id}`)
      } else {
        await Api().post.update(data.id, obj)
      }
    } catch (error) {
      console.warn('Create post', error)
    }
  }

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <TextField value={title} onChange={(e) => setTitle(e.target.value)} className={styles.titleInput} placeholder="Title" />

      <div className={styles.editor}>
        <Editor initialBlocks={data?.body} onChange={(arr) => setBlocks(arr)} />
      </div>

      <Button onClick={onAddPost} variant="contained" className={styles.penButton}>
        Publish
      </Button>
    </div>
  )
}

export default Write
