import { useMediaQuery, useTheme } from '@mui/material';

export const useTabletAndBelowMediaQuery = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('lg'));
};

const TabletAndBelow = ({ children }: { children: any }) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery();

  return isTabletAndBelow ? children : null;
};

export default TabletAndBelow;
