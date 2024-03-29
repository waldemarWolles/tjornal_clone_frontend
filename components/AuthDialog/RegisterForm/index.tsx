import { Button, TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterFormSchema } from '../../../utils/schemas/registerValidation'
import { FormField } from '../../FormField'
import { ICreateUserDto } from '../../../utils/api/types'
import { setCookie } from 'nookies'
import { useState } from 'react'
import Alert from '@material-ui/lab/Alert'
import { useAppDispatch } from '../../../redux/hooks'
import { setuserData } from '../../../redux/slices/user'
import { Api } from '../../../utils/api'

interface Props {}

interface IFormInputs {
  fullName: string
  email: string
  password: string
}

export const RegisterForm: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState('')
  const formHook = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  })

  const onSubmit = async (dto: ICreateUserDto) => {
    try {
      const data = await Api().user.register(dto)
      console.log(data)
      setCookie(null, 'tj_token', data.token, {
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
        <Typography variant="h5">Register</Typography>
        <FormField name="fullName" label="FullName" />
        <FormField name="email" label="Email" />
        <FormField name="password" label="Password" />
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <Button
          disabled={!formHook.formState.isValid || formHook.formState.isSubmitting}
          type="submit"
          onClick={() => console.log('register')}
          className="mb-15"
          variant="contained"
          fullWidth
        >
          Register
        </Button>
      </form>
    </FormProvider>
  )
}
