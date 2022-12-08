import React, { useState } from 'react';
import { Box, Container, Grow } from '@mui/material';
import { NavbarItem } from '@/shared/components/layout/navbar/NavbarItem';

const DesktopNavbarItemWithChildren = ({ item }: { item: NavbarItem }) => {
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
        sx={{ cursor: item.navbarChildren.length ? 'default' : 'pointer' }}
      >
        {item.content}
      </Box>

      {openedPopover && (
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
              {item.navbarChildren.map((itemChild) => itemChild.content)}
            </Container>
          </Box>
        </Grow>
      )}
    </>
  );
};

export default DesktopNavbarItemWithChildren;
