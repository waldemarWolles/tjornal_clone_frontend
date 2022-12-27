import React, { useState } from 'react'

import { Button, TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginFormSchema } from '../../../utils/schemas/loginValidation'
import { FormField } from '../../FormField'
import { ILoginDto } from '../../../utils/api/types'
import { UserApi } from '../../../utils/api'
import { setCookie } from 'nookies'
import { Alert } from '@material-ui/lab'
import { useAppDispatch } from '../../../redux/hooks'
import { setuserData } from '../../../redux/slices/user'

interface LoginFormProps {}

interface IFormInputs {
  email: string
  password: string
}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState('')
  const formHook = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  })

  const onSubmit = async (dto: ILoginDto) => {
    try {
      const data = await UserApi.login(dto)
      console.log(data)
      setCookie(null, 'authToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      setErrorMessage('')
      dispatch(setuserData(data))
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.message)
      }
    }
  }

  return (
    <FormProvider {...formHook}>
      <form onSubmit={formHook.handleSubmit(onSubmit)}>
        <Typography variant="h5">Log in</Typography>
        <FormField name="email" label="Email" />
        <FormField name="password" label="Password" />
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <Button
          disabled={!formHook.formState.isValid || formHook.formState.isSubmitting}
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
