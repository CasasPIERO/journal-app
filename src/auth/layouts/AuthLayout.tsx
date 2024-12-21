import { Link as RouterLink } from 'react-router';

import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

type AuthLayoutProps = {
    children: React.ReactNode;
    title: string;
    helperLink?: {
        text: string;
        link: string;
    };
};

export const AuthLayout = ({ children, title, helperLink }: AuthLayoutProps) => {
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ minHeight: '100vh', bgcolor: 'primary.main' }}
    >
      <Grid
        sx={
          {
            bgcolor: '#fff',
            borderRadius: 1,
            p: 4,
            width: '100%',
            maxWidth: 400,
          }
        }
        className='box-shadow'
      >
        <Typography variant='h4' align='center' gutterBottom>
          {title}
        </Typography> 
        <form>
          {children}
        </form>
        { helperLink && (
            <Grid display="flex" justifyContent="flex-end" sx={{ mt: 2}}>
                <Link component={RouterLink} to={helperLink.link}>
                    {helperLink.text}
                </Link>
            </Grid>
        )}
      </Grid>
    </Grid>
  )
}
