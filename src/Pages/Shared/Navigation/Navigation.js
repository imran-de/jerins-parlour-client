import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import logo from '../../../Images/jerinsLogo.png';
import { useHistory } from 'react-router';

const Navigation = () => {
    const history = useHistory();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ boxShadow: 0, backgroundColor: 'rgba(0,0,0,.01)', color: '#474747' }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img src={logo} width="127px" height="48px" alt="" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {/* title */}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Typography sx={{ minWidth: 100 }}>Home</Typography>
                        <Typography sx={{ minWidth: 100 }}>Our Portfolio</Typography>
                        <Typography sx={{ minWidth: 100 }}>Our Team</Typography>
                        <Typography sx={{ minWidth: 100 }}>Contact Us</Typography>
                        <Typography sx={{ minWidth: 100 }}>
                            <Button onClick={() => history.push('/login')} sx={{ backgroundColor: '#F63E7B', color: '#fff', px: 2 }} variant="contained">Login</Button>
                        </Typography>

                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;