import React from 'react'

import { Button, Divider, Paper, TextField, Typography } from '@material-ui/core'
import styles from './Settings.module.scss'
import clsx from 'clsx'

export const Settings: React.FC = () => {
  return (
    <Paper elevation={0} className={clsx('p-20 mb-30', styles.content)} classes={{ root: styles.paper }}>
      <Typography variant="h3">Main Settings</Typography>
      <Divider className="mt-20 mb-30" />
      <form action="">
        <TextField className="mb-15" label="Nickname" variant="outlined" size="small" fullWidth required />
        <TextField className="mb-15" label="Email" variant="outlined" size="small" fullWidth required />
        <Divider className="mt-20 mb-30" />
        <Button color="primary" variant="contained">
          Save
        </Button>
      </form>
    </Paper>
  )
}
