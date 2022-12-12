import React from 'react'

import { Button, TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginFormSchema } from '../../../utils/schemas/loginValidation'
import { FormField } from '../../FormField'

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
    <FormProvider {...formHook}>
      <form onSubmit={formHook.handleSubmit(onSubmit)}>
        <Typography variant="h5">Log in</Typography>
        <FormField name="email" label="Email" />
        <FormField name="password" label="Password" />
        <Button
          disabled={!formHook.formState.isValid}
          type="submit"
          onClick={() => console.log('login')}
          className="mb-15"
          variant="contained"
          fullWidth
        >
          Login
        </Button>
      </form>
    </FormProvider>
  )
}
