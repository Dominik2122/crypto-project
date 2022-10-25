import React, { ReactNode, useState } from 'react';
import { Box, Container, Grow } from '@mui/material';
import NavbarItemButton from '@/shared/components/layout/navbar/NavbarItemButton';

const NavbarItemWithChildren = ({ title, children }: NavbarItemProps) => {
  const [openedPopover, setOpenedPopover] = useState(false);

  const popoverEnter = () => {
    setOpenedPopover(true);
  };

  const popoverLeave = () => {
    setOpenedPopover(false);
  };

  return (
    <>
      <Box
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
        sx={{ cursor: children ? 'default' : 'pointer' }}
      >
        <NavbarItemButton title={title} />
      </Box>

      {openedPopover && children && (
        <Grow in style={{ transformOrigin: '0 0 0' }} timeout={500}>
          <Box
            component="section"
            sx={{
              position: 'absolute',
              top: '64px',
              width: '100vw',
              zIndex: 3,
              left: 0,
              borderBottom: 1,
              bgcolor: 'background.paper',
              borderBottomColor: 'grey.300',
              boxShadow: 'rgb(0 0 0 / 8%) 0px 3px 10px',
            }}
          >
            <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', marginY: 2 }}>
              {children}
            </Container>
          </Box>
        </Grow>
      )}
    </>
  );
};

export interface NavbarItemProps {
  title: string;
  children: ReactNode;
}

export default NavbarItemWithChildren;
