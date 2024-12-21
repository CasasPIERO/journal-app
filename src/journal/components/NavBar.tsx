import { LogoutOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"

type NavBarProps = {
    handleDrawerToggle: () => void;
    drawerWidth: number;
};

export const NavBar = ({ drawerWidth, handleDrawerToggle }: NavBarProps) => {
  return (
    <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            size='large'
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} >
            Journal App
          </Typography>
          <IconButton
            size='large'
            color="inherit"
          >
            <LogoutOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>
  )
}
