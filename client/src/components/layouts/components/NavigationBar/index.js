import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import { FONT_FAMILY, FONT_WEIGHT } from '../../../../theme/fonts';
import COLORS from '../../../../theme/colors';
import { NavLink } from "react-router-dom";
import BREAKPOINTS from '../../../../theme/breakpoints';
import {
  NAV_LINKS
} from "../../../constants/links"

const DrawerAppBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h1">
        Menu
      </Typography>
      <Divider sx={{
        borderColor: COLORS.palette.white
      }}
      />
      <List>
        {NAV_LINKS.map((item) => (
          <ListItem key={item.name}
            disablePadding
            sx={{ margin: "0px auto 10px", width: "fit-content" }}>
            <ListItemButton
              sx={{
                textAlign: 'center', color: COLORS.palette.white
              }}
              component={NavLink}
              to={item.href}
              style={({ isActive }) => {
                return {
                  borderBottom: !isActive ? '2px solid transparent' : `2px solid ${COLORS.accent}`,
                }
              }}>
              {item.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav" position="sticky" sx={{
        right: "auto",
        left: "auto",
        maxWidth: BREAKPOINTS.lg
      }}>
        <Toolbar sx={{ display: "flex", justifyContent: 'space-between' }}>
          <Typography
            variant="h1"
          >
            SelfCare
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {NAV_LINKS.map((item) => (
              <Button key={item.name} to={item.href} component={NavLink}
                sx={{
                  color: COLORS.palette.white,
                  fontFamily: FONT_FAMILY.raleway,
                  fontWeight: FONT_WEIGHT.semiBold,
                  position: 'relative',
                  textDecoration: 'none',
                  margin: "0 10px",
                }}
                style={({ isActive }) => {
                  return {
                    borderBottom: !isActive ? '2px solid transparent' : `2px solid ${COLORS.accent}`,
                    borderTop: !isActive ? '2px solid transparent' : `2px solid ${COLORS.accent}`,
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, padding: "0px" }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "60%", maxWidth: "300px", bgcolor: COLORS.primary },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}


export default DrawerAppBar;