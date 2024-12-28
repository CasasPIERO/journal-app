import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { AuthLayout } from '../layouts/AuthLayout';

export const RegisterPage = () => {

  const { name, email, password, onInputChange } = useForm({
    name: '',
    email: '',
    password: ''
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      email,
      password
    });
  }

  return (
    <AuthLayout title='Register' helperLink={{ text: '¿Ya tienes cuenta? Ingresar', link: '/auth/login' }}>
      <form onSubmit={onSubmit}>
        <Grid
          container
          direction={'column'}
          spacing={2}
          sx={{ mt: 2 }}
        >
          <TextField
            required
            label='Name'
            type='text'
            placeholder='Nombre'
            name='name'
            value={name}
            onChange={onInputChange}
          />
          <TextField
            required
            label='Email'
            type='email'
            placeholder='correo@gmail.com'
            name='email'
            value={email}
            onChange={onInputChange}
          />
          <TextField
            required
            label='Password'
            type='password'
            placeholder='Contraseña'
            name='password'
            value={password}
            onChange={onInputChange}
          />
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Grid size={12}>
            <Button variant='contained' fullWidth type='submit'>
                Login
            </Button>
          </Grid>
        </Grid>
      </form>
      
    </AuthLayout>
  )
}
