import { useMemo } from 'react';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layouts/AuthLayout';
import { useAppDispatch, useAppSelector, useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';

export const LoginPage = () => {

  const { status } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      email,
      password
    });
    dispatch(checkingAuthentication(email, password));
  }

  const onGoogleSignIn = () => {
    console.log('Google login');
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title='Login' helperLink={{text: '¿No tienes cuenta? Regístrate', link: '/auth/register'}}>
      <form onSubmit={onSubmit}>
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
            onChange={onInputChange}
            value={email}
          />
          <TextField
            required
            label='Password'
            type='password'
            placeholder='Ingrese su contraseña'
            name='password'
            onChange={onInputChange}
            value={password}
          />
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Grid size={6}>
            <Button
              variant='contained'
              fullWidth
              type='submit'
              disabled={isAuthenticating}
            >
                Login
            </Button>
          </Grid>
          <Grid size={6}>
            <Button
              variant='contained'
              startIcon={<Google />}
              fullWidth
              onClick={onGoogleSignIn}
              disabled={isAuthenticating}
            >
              Google
            </Button>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
