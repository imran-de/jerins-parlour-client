import React from 'react';
import { Box } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';
import bannerImg from '../../../Images/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png';
const BannerMiddle = () => {
    return (
        <Box sx={{ backgroundColor: '#fff8f5', my: 5 }}>
            <Container>
                <Box container sx={{ flexGrow: 1, py: 10 }}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={bannerImg} style={{ width: '100%', maxWidth: '478px', maxHeight: '478px', marginBottom: '25px' }} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Box>
                                <Typography variant="h4" sx={{
                                    fontFamily: " 'Poppins', sans-serif",
                                    fontWeight: 600
                                }} component="div">
                                    Let us handle your
                                </Typography>
                                <Typography sx={{
                                    fontFamily: " 'Poppins', sans-serif",
                                    fontWeight: 600
                                }} variant="h4" gutterBottom component="div">
                                    screen <span style={{ color: '#f63e7b' }}>Professionally</span>.
                                </Typography>
                                <Typography variant="p" gutterBottom component="div" sx={{ mb: 4 }}>
                                    With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Typography variant='h5' style={{ color: '#f63e7b', fontWeight: 600 }}>
                                            500+
                                        </Typography>
                                        <Typography variant='p'>
                                            Happy Customer
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant='h5' style={{ color: '#f63e7b', fontWeight: 600 }}>
                                            16+
                                        </Typography>
                                        <Typography variant='p'>
                                            Total Service
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Box >
    );
};

export default BannerMiddle;