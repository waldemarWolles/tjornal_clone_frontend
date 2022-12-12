import { Button, TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterFormSchema } from '../../../utils/schemas/registerValidation'
import { FormField } from '../../FormField'

interface Props {}

interface IFormInputs {
  name: string
  email: string
  password: string
}

export const RegisterForm: React.FC<Props> = ({}) => {
  const formHook = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  })

  const onSubmit = (data: IFormInputs) => console.log(data)
  console.log(formHook.formState.errors)

  return (
    <FormProvider {...formHook}>
      <form onSubmit={formHook.handleSubmit(onSubmit)}>
        <Typography variant="h5">Register</Typography>
        <FormField name="name" label="Name" />
        <FormField name="email" label="Email" />
        <FormField name="password" label="Password" />
        <Button
          disabled={!formHook.formState.isValid}
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
