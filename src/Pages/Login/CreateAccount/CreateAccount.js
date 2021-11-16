import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const CreateAccount = () => {
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
        //add here password match conditions
        setSuccess(true)
        setMsg('')
        console.log(contactInfo);
    }
    return (
        <Box>
            <Navigation />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={10} md={6} sx={{ mx: 'auto', border: 1, borderColor: 'grey.500', borderRadius: 1, pt: 5, pb: 2 }}>
                        <Typography variant='h5' gutterBottom sx={{ fontWeight: 700, ml: 4 }}>
                            Create an account
                        </Typography>
                        {
                            success ? <Alert severity="success">Congrats!! made admin successfully</Alert>
                                :
                                msg && <Alert severity="error">{msg}</Alert>
                        }
                        <form onSubmit={handleForm}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item sm={11} sx={{ mx: 'auto' }}>
                                        <TextField
                                            sx={{ width: '100%' }}
                                            id="firstName"
                                            label="First Name"
                                            name="firstName"
                                            onChange={handleOnChange}
                                            required
                                            variant="standard" />
                                    </Grid>
                                    <Grid item sm={11} sx={{ mx: 'auto' }}>
                                        <TextField
                                            sx={{ width: '100%' }}
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            onChange={handleOnChange}
                                            required
                                            variant="standard" />
                                    </Grid>
                                    <Grid item sm={11} sx={{ mx: 'auto' }}>
                                        <TextField
                                            sx={{ width: '100%' }}
                                            id="email"
                                            label="Email"
                                            type='email'
                                            required
                                            name="email"
                                            onChange={handleOnChange}
                                            variant="standard" />
                                    </Grid>
                                    <Grid item sm={11} sx={{ mx: 'auto' }}>
                                        <TextField
                                            sx={{ width: '100%' }}
                                            id="password"
                                            label="Password"
                                            type="password"
                                            name="password"
                                            onChange={handleOnChange}
                                            required
                                            variant="standard" />
                                    </Grid>
                                    <Grid item sm={11} sx={{ mx: 'auto' }}>
                                        <TextField
                                            sx={{ width: '100%' }}
                                            id="confirmPassword"
                                            label="Confirm Password"
                                            type='password'
                                            name="confirmPassword"
                                            onChange={handleOnChange}
                                            required
                                            variant="standard" />
                                    </Grid>
                                    <Grid item sm={11} sx={{ mx: 'auto', textAlign: 'center' }}>
                                        <Button sx={{ backgroundColor: '#F63E7B', color: '#fff', width: '100%' }} variant='contained' type="submit">Create an account</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </form>
                        <Typography variant='h6' sx={{ textAlign: 'center', mt: 2 }}>
                            Already have an account? <Link style={{ color: '#f63e7b' }} to="/login">Login</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default CreateAccount;