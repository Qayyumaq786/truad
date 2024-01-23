// Login.js

import React, { useState } from 'react';
import firebase from '../FirebaseFiles/firebase';
import { useNavigate } from "react-router-dom";


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert } from '@mui/material';



const defaultTheme = createTheme();


export default function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(formData.email, formData.password);
            Alert('Your UserName And Password Was Right Click On Ok To Login');
            navigate("/dashboard");

        } catch (error) {
            console.error('Login error:', error.message);
            alert("Invalid UserName Or Password");
        }
    };

    return (

        <div  >
            <Container component="main" maxWidth="xs" sx={{ boxShadow: "10px 10px 5px gray" }}>

                <Box
                    sx={{
                        marginTop: 15,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: "15% 0%"
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <img src="https://media.licdn.com/dms/image/C4E0BAQGQTzZN8EqC9w/company-logo_200_200/0/1630642218004?e=1714003200&v=beta&t=eqAFTfpV4wyyrkNAdGjWuifp_6KR1JPfv91rCK1nssY" style={{ height: "50px" }} alt="" />

                    </Avatar>
                    <h1 >
                        Welcome to TruAd
                    </h1>
                    <Typography component="h1" variant="h5" sx={{ marginTop: "10" }}>
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>

                            <Grid item>
                                <Link href="/signUp" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}
