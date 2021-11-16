import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';

const bg = {
    backgroundColor: '#fff', border: 'none'
}

const Contact = () => {
    const [contactInfo, setContactInfo] = useState({})
    const [success, setSuccess] = useState(false)
    const [msg, setMsg] = useState('')

    const handleOnChange = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newContactInfo = { ...contactInfo }
        newContactInfo[filed] = value;
        setContactInfo(newContactInfo);
    }
    const handleForm = e => {
        e.preventDefault();
        setSuccess(true)
        setMsg('')
        console.log(contactInfo);
    }
    return (
        <Box sx={{ backgroundColor: '#fff8f5', my: 5 }}>
            <Container>
                <Typography sx={{ pt: 8, textAlign: 'center', fontWeight: 700 }} component="div" variant="h4">
                    Let us handle your
                    project, professionally.
                </Typography>
                <Box container sx={{ flexGrow: 1, py: 10 }}>
                    {
                        success ? <Alert severity="success">Congrats!! made admin successfully</Alert>
                            :
                            msg && <Alert severity="error">{msg}</Alert>
                    }
                    <form onSubmit={handleForm}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid container sm={12} md={6} spacing={2} sx={{ mx: 'auto' }}>
                                    <Grid item sm={6} md={6}>
                                        <TextField style={bg}
                                            sx={{ width: '100%', m: 1 }}
                                            id="firstName"
                                            label="First Name"
                                            name="firstName"
                                            onChange={handleOnChange}
                                            required
                                            variant="outlined" />
                                    </Grid>
                                    <Grid item sm={6} md={6}>
                                        <TextField style={bg}
                                            sx={{ width: '100%', m: 1 }}
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            onChange={handleOnChange}
                                            required
                                            variant="outlined" />
                                    </Grid>
                                    <Grid item sm={6} md={6}>
                                        <TextField style={bg}
                                            sx={{ width: '100%', m: 1 }}
                                            id="email"
                                            label="Email"
                                            type='email'
                                            required
                                            name="email"
                                            onChange={handleOnChange}
                                            variant="outlined" />
                                    </Grid>
                                    <Grid item sm={6} md={6}>
                                        <TextField style={bg}
                                            sx={{ width: '100%', m: 1 }}
                                            id="phone"
                                            label="Phone Number"
                                            name="phone"
                                            onChange={handleOnChange}
                                            required
                                            variant="outlined" />
                                    </Grid>
                                    <Grid item sm={12} md={12}>
                                        <TextField style={bg}
                                            sx={{ width: '100%', m: 1 }}
                                            id="message"
                                            label="Message"
                                            name="message"
                                            multiline
                                            rows={2}
                                            onChange={handleOnChange}
                                            required
                                            variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                        <Button sx={{ backgroundColor: '#F63E7B', color: '#fff', px: 4 }} variant='contained' type="submit">Send Message</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>


                    </form>
                </Box>
            </Container>
        </Box >
    );
};

export default Contact;