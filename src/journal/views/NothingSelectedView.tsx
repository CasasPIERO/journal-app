import { StarOutline } from "@mui/icons-material"
import { Grid2, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid2
        container
        justifyContent="center"
        alignItems="center"
        direction={'column'}
        sx={{
            backgroundColor: 'primary.main',
            height: 'calc(100vh - 120px)',
        }}
    >
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
        <Typography variant="h5" color="white" textAlign={'center'}>
            Seleccione o cree una entrada
        </Typography>
    </Grid2>
  )
}
