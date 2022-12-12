import React, { useState } from 'react'

import { Button, TextField } from '@material-ui/core'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import { useForm } from 'react-hook-form'
import { LoginFormSchema } from '../../utils/schemas/loginValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { MainForm } from './MainForm'

interface SimpleDialogProps {
  open: boolean
  onClose: (value: string) => void
}

export type FormTypes = 'main' | 'login' | 'register'

export const AuthDialog: React.FC<SimpleDialogProps> = ({ open, onClose }) => {
  const formHook = useForm({
    resolver: yupResolver(LoginFormSchema),
  })
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
