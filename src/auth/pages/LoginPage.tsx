import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layouts/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login' helperLink={{text: '¿No tienes cuenta? Regístrate', link: '/auth/register'}}>
      <Grid
        container
        direction={'column'}
        spacing={2}
        sx={{ mt: 2 }}
      >
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
          placeholder='Ingrese su contraseña'
          name='password'
        />
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Grid size={6}>
          <Button variant='contained' fullWidth>
              Login
          </Button>
        </Grid>
        <Grid size={6}>
          <Button variant='contained' startIcon={<Google />} fullWidth>
            Google
          </Button>
        </Grid>
      </Grid>
    </AuthLayout>
  )
}
