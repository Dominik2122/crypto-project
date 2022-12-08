import React, { useCallback, useState } from 'react';
import { AppBar, Box, Collapse, Divider, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Drawer from '@mui/material/Drawer';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import TabletOrBelow from '@/shared/components/layout/media-query/TabletOrBelow';
import { NavbarItem } from '@/shared/components/layout/navbar/NavbarItem';

export const MobileNavbar = ({ content, navbarChildren }: NavbarItem) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const [expanded, setExpand] = useState<string>();

  const toggleOpen = useCallback(() => {
    setOpened((prev) => !prev);
  }, [isOpened]);

  const expandList = (openedItemKey: string | undefined) => setExpand(openedItemKey);

  return (
    <TabletOrBelow>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ bgcolor: 'background.paper', borderBottomColor: 'grey.300' }}
        >
          <Toolbar>
            {content}{' '}
            <IconButton
              onClick={toggleOpen}
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          PaperProps={{
            sx: { width: '50%' },
          }}
          anchor="left"
          open={isOpened}
          onClose={toggleOpen}
        >
          {navbarChildren.map((item) => (
            <React.Fragment key={item.key}>
              <List>
                <ListItemButton>
                  {item.content}
                  {expanded === item.key ? (
                    <ExpandLess onClick={() => expandList(undefined)} />
                  ) : (
                    <ExpandMore onClick={() => expandList(item.key)} />
                  )}
                </ListItemButton>
                <Collapse in={expanded === item.key} timeout="auto" unmountOnExit>
                  <List>
                    {item.navbarChildren.map((navChild) => (
                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => expandList(item.key)}
                        key={navChild.key}
                      >
                        {navChild.content}
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </List>
              <Divider />
            </React.Fragment>
          ))}
        </Drawer>
      </Box>
    </TabletOrBelow>
  );
};

export default MobileNavbar;
