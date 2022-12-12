import React, { useState } from 'react'

import { Button, TextField } from '@material-ui/core'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface Props {}

export const RegisterForm: React.FC<Props> = ({}) => {
  return (
    <form>
      <Typography variant="h5">Register</Typography>
      <TextField label="Name" variant="outlined" type="text" />
      <TextField label="Email" variant="outlined" type="email" />
      <TextField label="Password" type="password" variant="outlined" />
      <Button onClick={() => console.log('register')} className="mb-15" variant="contained" fullWidth>
        Submit
      </Button>
    </form>
  )
}
