import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DashboardNavbar } from './dashboard-navbar';
import { DashboardSidebar } from './dashboard-sidebar';

const DashboardLayoutRoot = styled('div')(({ theme, $mininize }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: $mininize? 100:250
  }
}));

export const DashboardLayout = (props) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isSidebarMin, setSidebarMin] = useState(false);

  const opclo = ()=>{
    setSidebarOpen(true)
    setSidebarMin(false)
  }
  return (
    <>
      <DashboardLayoutRoot $mininize={isSidebarMin}>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>

      <DashboardNavbar
        onSidebarOpen={() => opclo()}
        onSidebarMin={() => setSidebarMin(!isSidebarMin)}
        mininize={isSidebarMin}
      />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
        mininize={isSidebarMin}
      />
    </>
  );
};
