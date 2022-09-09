import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../../icons/facebook';
import { Google as GoogleIcon } from '../../icons/google';
import { NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Logo } from '../../icons/logo';
import { Apple } from '../../icons/apple';
import { makeStyles } from '@mui/styles';
import api from '../../utils/api';

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  button: {
    backgroundColor: '#EF873D',
    color: '#fff',
    borderRadius: 8,
    '&:hover': {
      backgroundColor: '#F86903',
      color: '#fff',
      borderRadius: 8
    },
  },
  input: {
    backgroundColor: "#FAD6BD"
  }
})


export default function Login() {
  const classes = useStyles()
  const router = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup
        .string()
        .max(255)
        .required(
          'Username is required'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required')
    }),
    onSubmit: async() => {
      const response = await api.Auth.login(formik.values.username, formik.values.password);
      console.log({ response })
      if (response.success) {
        api.Auth.saveAuthData(response.data)
        router('/dashboard');

      }
    }
  });

const gotodash = ()=>{
  router('/dashboard');
}

  return (
    <>
      <Helmet>
        <title>Login | Bounce</title>
      </Helmet>
      <Grid
      container
        // component="main"
        sx={{
          // alignItems: 'center',
          // display: 'flex',
          // flexGrow: 1,
          minHeight: '100vh',
          // backgroundColor:"#f1f4fb",
          // position:"relative"
        }}
      >
        <Grid  container item md={4} xs={12} lg={4}>
        <Container maxWidth="sm" >
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 4 }}>
              <Box display={{ alignItems: 'center' }} onClick={gotodash}>
                <img src="/static/images/logo2.png" />
              </Box>
              <Typography
                color="#111b21"
                variant="h5"
                // sx={{ fontWeight: 'bold' }}
              >
                Login
              </Typography>
            </Box>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={6}
                md={6}
              >
                <Button
                  sx={{backgroundColor:"#f1f1f1", color:"black"}}
                  fullWidth
                  startIcon={<FacebookIcon />}
                  onClick={formik.handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Facebook
                </Button>
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
              >
                <Button
                  fullWidth
                  sx={{backgroundColor:"#f1f1f1", color:"black"}}
                  startIcon={<GoogleIcon />}
                  onClick={formik.handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Google
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                Or 
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.username && formik.errors.username)}
              fullWidth
              helperText={formik.touched.username && formik.errors.username}
              label="Username"
              margin="normal"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="username"
              // variant="outlined"
              // ref="username"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              variant="outlined"
              // ref="password"
            />
            <Box sx={{ py: 2 }}>
              <Button
                className={classes.button}
                // color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#3b36db',
                  color: '#fff',
                  borderRadius: 8,
                  ':hover': {
                    backgroundColor: '#302f41',
                    color: '#fff',
                    borderRadius: 8
                  },
                }}
              >
                Login
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Don&apos;t have an account?
              {' '}
              <NavLink
                to="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  New Account
                </Link>
              </NavLink>
            </Typography>
          </form>
        </Container>
        </Grid>
        <Grid container
          display={{ xs: "none", lg: "block", backgroundColor:"#f1f4fb",height: "100%", width:"100%"
        }} item md={8} xs={12} lg={8} >
          <Box sx={{ my: 12.5, mx: 25,  alignItems: 'center'}}>
          <img src="/static/images/loginpics2.png" />
          </Box>
        </Grid>
      </Grid>
    </>)
}
