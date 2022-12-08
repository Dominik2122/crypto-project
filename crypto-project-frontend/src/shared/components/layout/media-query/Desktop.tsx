import { useMediaQuery, useTheme } from '@mui/material';

export const useDesktopMediaQuery = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('lg'));
};

export const Desktop = ({ children }: { children: any }) => {
  const isDesktop = useDesktopMediaQuery();

  return isDesktop ? children : null;
};
