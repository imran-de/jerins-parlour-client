import React from 'react';
import { Box } from '@mui/system';
import Navigation from '../../Shared/Navigation/Navigation';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import bannerImg from '../../../Images/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';

const LandingPageBanner = () => {
    return (
        <Box sx={{ backgroundColor: '#fff8f5' }}>
            <Navigation />
            {/* main banner */}
            <Container>
                <Box container sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Box>
                                <Typography variant="h3" sx={{
                                    fontFamily: " 'Poppins', sans-serif",
                                    fontWeight: 700
                                }} component="div">
                                    BEAUTY SALON
                                </Typography>
                                <Typography sx={{
                                    fontFamily: " 'Poppins', sans-serif",
                                    fontWeight: 700
                                }} variant="h3" gutterBottom component="div">
                                    FOR EVERY WOMEN
                                </Typography>
                                <Typography variant="p" gutterBottom component="div" sx={{ width: '75%', mb: 4 }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                                </Typography>
                                <Link to="/contact" style={{ textDecoration: 'none' }}>
                                    <Button sx={{ backgroundColor: '#F63E7B', color: '#fff', px: 3 }} variant="contained">Get an Appointment</Button>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={bannerImg} style={{ width: '100%', maxWidth: '478px', maxHeight: '478px', marginBottom: '25px' }} alt="" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box >
    );
};

export default LandingPageBanner;