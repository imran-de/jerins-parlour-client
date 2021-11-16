import React from 'react';
import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import icon1 from '../../../Images/Icon/Group 1373.png';
import icon2 from '../../../Images/Icon/Group 1372.png';
import icon3 from '../../../Images/Icon/Group 1374.png';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <Container sx={{ textAlign: 'center' }}>
            <Typography sx={{ mt: 8, mb: 6, textAlign: 'center', fontWeight: 700 }} component="div" variant="h4">
                Our Awesome <span style={{ color: '#f63e7b' }}>Services</span>
            </Typography>
            <Box sx={{ mb: 5 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={6} md={4}>
                        <Card sx={{ textAlign: 'center', boxShadow: 0 }}>
                            <img src={icon1} width="72px" height="72px" alt="" />
                            <CardContent>
                                <Typography sx={{ fontWeight: 600 }} gutterBottom variant="h5" component="div">
                                    Anti Age Face Treatment
                                </Typography>
                                <Typography sx={{ color: "#F63E7B" }} gutterBottom variant="h6" component="div">
                                    $99
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Card sx={{ textAlign: 'center', boxShadow: 1 }}>
                            <img src={icon2} width="72px" height="72px" alt="" />
                            <CardContent>
                                <Typography sx={{ fontWeight: 600 }} gutterBottom variant="h5" component="div">
                                    Hair Color & Styleing
                                </Typography>
                                <Typography sx={{ color: "#F63E7B" }} gutterBottom variant="h6" component="div">
                                    $99
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Card sx={{ textAlign: 'center', boxShadow: 0 }}>
                            <img src={icon3} width="72px" height="72px" alt="" />
                            <CardContent>
                                <Typography sx={{ fontWeight: 600 }} gutterBottom variant="h5" component="div">
                                    Skin Care Treatment
                                </Typography>
                                <Typography sx={{ color: "#F63E7B" }} gutterBottom variant="h6" component="div">
                                    $99
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
            {/* explore more button */}
            <Link to="/services" style={{ textDecoration: 'none' }}>
                <Button sx={{ backgroundColor: '#F63E7B', color: '#fff', px: 4 }} variant="contained">Explore More</Button>
            </Link>
        </Container>
    );
};

export default Services;