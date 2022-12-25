import React, { useState } from 'react'

import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Dialog from '@material-ui/core/Dialog'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { MainForm } from './MainForm'

interface SimpleDialogProps {
  open: boolean
  onClose: (value: string) => void
}

export type FormTypes = 'main' | 'login' | 'register'

export const AuthDialog: React.FC<SimpleDialogProps> = ({ open, onClose }) => {
  const [formType, setFormType] = useState<FormTypes>('main')

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
          {formType === 'main' && <MainForm onChangeForm={setFormType} />}
          {formType === 'login' && <LoginForm />}
          {formType === 'register' && <RegisterForm />}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
