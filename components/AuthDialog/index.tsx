import React from 'react'

import { Button } from '@material-ui/core'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'

interface SimpleDialogProps {
  open: boolean
  onClose: (value: string) => void
}

export const AuthDialog: React.FC<SimpleDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="h5">Log in</Typography>
          <Button className="mb-15" variant="contained" fullWidth>
            Facebook
          </Button>
          <Button className="mb-15" variant="contained" fullWidth>
            Google
          </Button>
          <Button className="mb-15" variant="contained" fullWidth>
            Twitter
          </Button>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
