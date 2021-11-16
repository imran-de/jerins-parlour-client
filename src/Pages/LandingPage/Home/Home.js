import { Box } from '@mui/system';
import React from 'react';
import Contact from '../../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import BannerMiddle from '../BannerMiddle/BannerMiddle';
import LandingPageBanner from '../LandingPageBanner/LandingPageBanner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <Box>
            <LandingPageBanner />
            <Services />
            <BannerMiddle />
            <Reviews />
            <Contact />

            <Footer />
        </Box>
    );
};

export default Home;