import React, { ReactNode } from 'react';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Desktop from '@/shared/components/layout/media-query/Desktop';
import TabletOrBelow from '@/shared/components/layout/media-query/TabletOrBelow';
import MobileDrawer from '@/shared/components/layout/drawer/MobileDrawer';

const Navbar = ({ leftContent, rightContent, centerContent }: NavbarProps) => (
  <>
    <Desktop>
      <Box
        sx={{
          height: 64,
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 2,
          borderBottom: 1,
          bgcolor: 'background.paper',
          borderBottomColor: 'grey.300',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>{leftContent}</Box>
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
              {centerContent}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>{rightContent}</Box>
          </Box>
        </Container>
      </Box>
    </Desktop>

    <TabletOrBelow>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
            <MobileDrawer isOpened anchor="left">
              <div className="">dasda</div>
            </MobileDrawer>
          </Toolbar>
        </AppBar>
      </Box>
    </TabletOrBelow>
  </>
);

export interface NavbarProps {
  leftContent: ReactNode;
  centerContent: ReactNode[];
  rightContent: ReactNode;
}

export default Navbar;
