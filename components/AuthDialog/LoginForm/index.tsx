import React from 'react'

import { Button, TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginFormSchema } from '../../../utils/schemas/loginValidation'

interface LoginFormProps {}

interface IFormInputs {
  email: string
  password: string
}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const formHook = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  })

  const onSubmit = (data: IFormInputs) => console.log(data)
  console.log(formHook.formState.errors)

  return (
    <form onSubmit={formHook.handleSubmit(onSubmit)}>
      <Typography variant="h5">Log in</Typography>
      <TextField
        {...formHook.register('email')}
        name="email"
        label="Email"
        variant="outlined"
        type="email"
        error={!!formHook.formState.errors.email?.message}
        helperText={formHook.formState.errors.email?.message}
        required
      />
      <TextField
        {...formHook.register('password')}
        name="password"
        label="Password"
        type="password"
        variant="outlined"
        error={!!formHook.formState.errors.password?.message}
        helperText={formHook.formState.errors.password?.message}
        required
      />
      <Button type="submit" onClick={() => console.log('login')} className="mb-15" variant="contained" fullWidth>
        Login
      </Button>
    </form>
  )
}
