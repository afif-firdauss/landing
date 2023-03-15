import React from 'react';
import logo from '../assets/logo.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

export default function Header() {
  return (
    <header style={{ marginBottom: '16px' }} id="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='transparent'>
          <Container maxWidth="xl">
          <Toolbar>
            <img src={logo} height={32} alt="company" />
          </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </header>
  )
}
