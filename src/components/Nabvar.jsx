import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Switch,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeMode } from '../context/ThemeContext.jsx';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'EXCHANGE RATES', path: '/exchangerate' },
  { label: 'ABOUT', path: '/about' },
  { label: 'ERROR PAGE', path: '/error' },
];

const Navbar = () => {
  const theme = useTheme();
  const { toggleTheme, mode } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((item) => (
          <ListItem button key={item.label} component={Link} to={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ px: 2, py: 1 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>Toggle Theme</Typography>
        <Switch
          checked={mode === 'dark'}
          onChange={toggleTheme}
          color="default"
        />
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="primary" elevation={2}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Loan Calculator
          </Typography>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {navLinks.map((item) => (
                <Typography
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 300 }}
                >
                  {item.label}
                </Typography>
              ))}
              <Switch
                checked={mode === 'dark'}
                onChange={toggleTheme}
                color="default"
              />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
