import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid2
        container
        spacing={2}
    >
        <Grid2
            size={12}
            container
            justifyContent="space-between"
            alignItems="center"
            direction={'row'}
        >
            <Typography variant="h5">Nuevo registro</Typography>
            <Button startIcon={<SaveOutlined />}>
                Guardar
            </Button>
        </Grid2>
        <Grid2 size={12}>
            <TextField 
                label="Título"
                fullWidth
                variant="filled"
            />
        </Grid2>
        <Grid2 size={12}>
            <TextField 
                fullWidth
                variant="filled"
                multiline
                minRows={5}
            />
        </Grid2>
        <ImageGallery />
    </Grid2>
  )
}
