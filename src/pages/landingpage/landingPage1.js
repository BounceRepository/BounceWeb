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


export default function LandingPage1() {
  const router = useNavigate()

  return (
    <>
      <Helmet>
        <title>Welcome | Bounce</title>
      </Helmet>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '80%',
          backgroundColor:"#FDEBDF"
        }}
      >
        {/* <Grid className="left-pane" item md={4} xs={12}> */}
        <Container maxWidth="sm" sx={{ backgroundImage: `url(/static/images/backgr2.jpg)` }}>
        <Typography
                color="#EF873D"
                variant="h6"
                sx={{  alignItems:"right", mt: 2  }}
              >              <NavLink
              to="/welcome"
              underline="none"
            >
              <Link
                to="/welcome"
                variant="subtitle2"
                underline="none"
                sx={{
                  cursor: 'pointer'
                }}
              >
                Skip
              </Link>
            </NavLink>

              </Typography>
            <Box>
              <Typography
                color="#583B29"
                variant="h4"
                sx={{ fontWeight: 'bold' }}
              >
                Get Instant Consult From Your Preferred Therapist 
              </Typography>
              <Typography
                color="#583B29"
                variant="h6"
              >
                Now you can speak to your preferred doctor within 1 minute through chat/voice call/ video call.
              </Typography>
              <Box display={{ alignItems: 'center'}}>
                <img src="/static/images/bgImage2.png" />
                <NavLink to="/login"><Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#EF873D',
                  color: '#fff',
                  borderRadius: 2,
                  marginBottom:1,
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
