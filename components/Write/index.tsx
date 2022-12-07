import { Paper, Tab, Table, TableCell, TableHead, TableBody, TableRow, Tabs, Typography, Button, TextField } from '@material-ui/core'
import { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import CheckIcon from '@material-ui/icons/Check'
import styles from './Write.module.scss'
import clsx from 'clsx'
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
