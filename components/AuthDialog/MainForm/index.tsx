import React from 'react'

import { Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { FormTypes } from '..'

interface MainFormProps {
  onChangeForm: (value: FormTypes) => void
}

export const MainForm: React.FC<MainFormProps> = ({ onChangeForm }) => {
  return (
    <>
      <Typography variant="h5">Chose how to login</Typography>
      <Button className="mb-15" variant="contained" fullWidth>
        Facebook
      </Button>
      <Button className="mb-15" variant="contained" fullWidth>
        Google
      </Button>
      <Button className="mb-15" variant="contained" fullWidth>
        Twitter
      </Button>
      <Button onClick={() => onChangeForm('login')} className="mb-15" variant="contained" fullWidth>
        Login
      </Button>
      <Button onClick={() => onChangeForm('register')} className="mb-15" variant="contained" fullWidth>
        Register
      </Button>
    </>
  )
}
