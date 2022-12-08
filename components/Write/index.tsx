import { Button, TextField } from '@material-ui/core'
import styles from './Write.module.scss'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false })

interface WriteProps {
  title?: string
}
const Write: React.FC<WriteProps> = ({ title }) => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <TextField className={styles.titleInput} placeholder="Title" defaultValue={title} />

      <div className={styles.editor}>
        <Editor />
      </div>

      <Button variant="contained" className={styles.penButton}>
        Publish
      </Button>
    </div>
  )
}

export default Write
