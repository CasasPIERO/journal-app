import { TurnedInNot } from '@mui/icons-material';
import { Divider, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"

export const NavList = () => {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TurnedInNot />
              </ListItemIcon>
              <Grid2 container>
                <ListItemText primary={text} />
                <ListItemText secondary="Algun texto random" />
              </Grid2>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
