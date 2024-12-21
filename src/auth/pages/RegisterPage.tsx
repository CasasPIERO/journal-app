import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { AuthLayout } from '../layouts/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register' helperLink={{ text: '¿Ya tienes cuenta? Ingresar', link: '/auth/login' }}>
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
        />
        <TextField
          required
          label='Email'
          type='email'
          placeholder='correo@gmail.com'
          name='email'
        />
        <TextField
          required
          label='Password'
          type='password'
          placeholder='Contraseña'
          name='password'
        />
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Grid size={12}>
          <Button variant='contained' fullWidth>
              Login
          </Button>
        </Grid>
      </Grid>
    </AuthLayout>
  )
}
