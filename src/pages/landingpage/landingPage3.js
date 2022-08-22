import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../../icons/facebook';
import { Google as GoogleIcon } from '../../icons/google';
import { NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Logo } from '../../icons/logo';
import { Apple } from '../../icons/apple';
import { makeStyles } from '@mui/styles';


export default function LandingPage3() {
    const router = useNavigate()

    return (
        <>
            <Helmet>
                <title>Disclaimer | Bounce</title>
            </Helmet>
            <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '80%',
                    backgroundColor: "#FDEBDF"
                }}
            >
                {/* <Grid className="left-pane" item md={4} xs={12}> */}
                <Container maxWidth="sm" sx={{ backgroundColor:"white" }}>
                    <Box display={{ alignItems: 'center' }}>
                        <img src="/static/images/logo.jpg" />
                    </Box>

                    <Box>
                        <Typography
                            color="#583B29"
                            variant="h4"
                            sx={{ fontWeight: 'bold' }}
                        >
                            Disclaimer:
                        </Typography>
                        <Typography
                            color="#583B29"
                            variant="h6"
                        >
                            This is an early demo to only show how the app would look like while showing the basic functions. This prototype is NOT demonstrating the final version.
                        </Typography>
                        <Typography
                            color="#583B29"
                            variant="h4"
                            sx={{ fontWeight: 'bold', marginTop:3 }}
                        >
                            Instructions:
                        </Typography>
                        <Typography
                            color="#583B29"
                            variant="h6"
                        >
                            Click on the buttons and actions as you would on a regular app.
                            Clicking anywhere on the phone will highlight the possible actions in a blue box. For the purpose of this demonstration, you will be using the application as “Bounce”.
                        </Typography>
                        <Box display={{ alignItems: 'center' }}>
                           <NavLink to="/login"> <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{
                                    backgroundColor: '#EF873D',
                                    color: '#fff',
                                    borderRadius: 2,
                                    marginBottom: 6,
                                    marginTop:3,
                                    ':hover': {
                                        backgroundColor: '#F86903',
                                        color: '#fff',
                                        borderRadius: 2
                                    },
                                }}
                            >
                                Get Started
                            </Button></NavLink>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>)
}
