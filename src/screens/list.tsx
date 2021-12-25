import {FC} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Container, IconButton, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

export const ListPage : FC =() =>{

    return (
        
        <>
        <CssBaseline />
        <main>
        <AppBar position="fixed">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
    <Box sx={{my: '3rem'}}> 
    <div>
                main screen2111
            </div>
    </Box>
    </Container>
            
        </main>
    </>)
}