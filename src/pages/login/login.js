import React, { useEffect, useState } from 'react'
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



  return (
    <>
      <Helmet>
        <title>Login | Bounce</title>
      </Helmet>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '80%',
        }}
      >
        {/* <Grid className="left-pane" item md={4} xs={12}> */}
        <Container maxWidth="sm" sx={{ backgroundImage: `url(/static/images/bg2.jpg)` }}>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 4 }}>
              <Typography
                color="#583B29"
                variant="h4"
                sx={{ fontWeight: 'bold' }}
              >
                Welcome Back!
              </Typography>
              <Box display={{ alignItems: 'center' }}>
                <img src="/static/images/login2.png" />
              </Box>
            </Box>
            <TextField
              sx={{ backgroundColor: "#FAD6BD" }}
              error={Boolean(formik.touched.username && formik.errors.username)}
              fullWidth
              helperText={formik.touched.username && formik.errors.username}
              label="Username"
              margin="normal"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="username"
              variant="outlined"
              // ref="username"
            />
            <TextField
              sx={{ backgroundColor: "#FAD6BD" }}
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
                  backgroundColor: '#EF873D',
                  color: '#fff',
                  borderRadius: 8,
                  ':hover': {
                    backgroundColor: '#F86903',
                    color: '#fff',
                    borderRadius: 8
                  },
                }}
              >
                Login
              </Button>
            </Box>
            <Grid
              container
              spacing={1}
              alignItems='center'
              justifyContent='center'
              maxWidth='md'
            >
              <Grid
                item
                xs={1}
                md={1}
              >
                <FacebookIcon />
              </Grid>
              <Grid
                item
                xs={1}
                md={1}
              >
                <GoogleIcon />
              </Grid>
              <Grid
                item
                xs={1}
                md={1}
              >
                <Apple />
              </Grid>
            </Grid>
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
        {/* </Grid> */}
        {/* <Grid className="right-pane"
          display={{ xs: "none", lg: "block", alignItems: 'center', fontSize:"large"
        }} item md={9} xs={12} sx={{ my: 10, mx: 25 }}>
          <img src="/static/images/login.jpg" />
        </Grid> */}
      </Box>
    </>)
}
