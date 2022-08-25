import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import { NavItem } from './nav-item';
import { NavLink, useNavigate } from 'react-router-dom';

const items = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard',
  },
  {
    href: '/customers',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Customers'
  },
  {
    href: '/therapist',
    icon: (<ShoppingBagIcon fontSize="small" />),
    title: 'Therapists'
  },
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'Account'
  },
  {
    href: '/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Settings'
  },
  {
    href: '/login',
    icon: (<LockIcon fontSize="small" />),
    title: 'Logout'
  },

];

export const DashboardSidebar = (props) => {
  const { open, onClose, mininize } = props;
  const router = useNavigate();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ px: 9, py:3}}>
            <NavLink
              to="/"
              style={{ textDecoration: "none", cursor: 'pointer' }}
            >
              <Box display={{ alignItems: 'center' }}>
                <img src="/static/images/logo2.png" />
              </Box>
              <Typography
                color="black"
                variant="h5"
                sx={{ fontWeight: 'bold' }}
              >
                Bounce
              </Typography>

            </NavLink>
          </Box>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
              style={{ textDecoration: "none" }}
              color="inherit"
            />
          ))}
        </Box>
      </Box>
    </>
  );
  const contentMin = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NavLink
              to="/"
              style={{ textDecoration: "none", cursor: 'pointer' }}
            >
              <Box display={{ alignItems: 'left' }}>
                <img src="/static/images/smallLogo2.png" />
              </Box>
              <Typography
                color="black"
                variant="h6"
                sx={{ fontWeight: 'bold' }}
              >
                Bounce
              </Typography>
            </NavLink>
          </Box>
        </div>
        {/* <Divider
          sx={{
            borderColor: '#2D3748',
            my: 1
          }}
        /> */}
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              style={{ textDecoration: "none" }}
              color="inherit"
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            // backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: `${ mininize? 100: 280 }`,
            backgroundColor: '#FFFFF',
            fontWeight: 'fontWeightBold',
            textAlign: 'center',
            textTransform: 'none',
            textDecoration: "none",

          }
        }}
        variant="permanent"
      >
        {mininize ? contentMin : content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          // backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: `${ mininize? 100: 280 }`,
          backgroundColor: '#FFFFFF',
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {mininize ? contentMin : content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  mininize: PropTypes.bool
};
