// Signup.js

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
import { grey } from '@mui/material/colors';


const defaultTheme = createTheme();

export default function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
            await firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password);
            alert('Account created successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            })
            navigate("/");
        } catch (error) {
            console.error('Signup error:', error.message);
        }
    }

    return (
        <div style={{backgroundImage:"linear-gradient(to right bottom, rgb(0, 0, 153), rgba(255,0,0,1))" ,height:"100vh" ,display:"flex" ,justifyContent:"center",alignItems:"center"}}>

        <Container component="main" maxWidth="xs"   sx={{ boxShadow: "1px 1px 20px black", backgroundColor: "rgb(66, 73, 84)" , position: 'relative',borderRadius:"10px" ,color:"white" }} >

            <Box
                sx={{
                    // marginTop: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: "15% 0%"
                }}
            >
               <Avatar
            sx={{
              m: 1,
              bgcolor: "secondary.main",
              width: "100px", 
              height: "100px", 
              "& img": {
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                borderRadius: "50%", 
              },
            }}
          >
            <img
              src="https://media.licdn.com/dms/image/C4E0BAQGQTzZN8EqC9w/company-logo_200_200/0/1630642218004?e=1714003200&v=beta&t=eqAFTfpV4wyyrkNAdGjWuifp_6KR1JPfv91rCK1nssY"
              alt=""
            />
          </Avatar>
                <Typography component="h1" variant="h5" sx={{fontWeight:"bold"}}>
                    Sign-Up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Container>
        </div>

    );
}
