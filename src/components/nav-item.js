import PropTypes from 'prop-types';
import { Box, Button, ListItem } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

export const NavItem = (props) => {
    const { href, icon, title, ...others } = props;
    const router = useNavigate();
    const active = href ? (router.pathname === href) : false;

    return (
        <ListItem
            disableGutters
            sx={{
                display: 'flex',
                mb: 0.5,
                py: 0,
                px: 2,
                textDecoration: "none"
            }}
            {...others}
        >
            <NavLink
                to={href}
                style={{ textDecoration: "none", cursor: 'pointer' }}
                color='#FFFFF'

            >
                <Button
                    component="a"
                    startIcon={icon}
                    disableRipple
                    sx={{
                        backgroundColor: active && '#EF873D',
                        borderRadius: 1,
                        textDecoration: "none",
                        color: active ? 'primary.main' : 'neutral.300',
                        fontWeight: active && 'fontWeightBold',
                        justifyContent: 'flex-start',
                        px: 3,
                        textAlign: 'left',
                        textTransform: 'none',
                        width: '100%',
                        '& .MuiButton-startIcon': {
                            color: active ? 'secondary.main' : 'neutral.400'
                        },
                        '&:hover': {
                            backgroundColor: '#EF873D'
                        }
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        {title}
                    </Box>
                </Button>
            </NavLink>
        </ListItem>
    );
};

NavItem.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string
};
