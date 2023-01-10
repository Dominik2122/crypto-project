import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Fade,
  ListItemIcon,
  ListItemText,
  Popper,
  Typography,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import User from '@/modules/authentication/application/models/User';

const MainNavbarAuthUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  }, []);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        color: 'text.primary',
      }}
    >
      <Button variant="text" sx={{ marginRight: 2 }} onClick={handleClick}>
        <AccountCircleIcon fontSize="large" />
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition disablePortal>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              sx={{
                border: 1,
                borderColor: 'text.primary',
                borderRadius: 1,
                p: 1,
                bgcolor: 'background.paper',
                color: 'text.primary',
              }}
            >
              <Typography align="center" variant="h6">
                {user.login.value}
              </Typography>
              <Divider />
              <List>
                <Link to="portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountBalanceIcon />
                    </ListItemIcon>
                    <ListItemText primary="Portfolio" />
                  </ListItemButton>
                </Link>
                <Link to="profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </Link>
                <Link to="settings" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </Link>
              </List>
            </Box>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default MainNavbarAuthUser;
