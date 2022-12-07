import { useMediaQuery } from 'react-responsive';

const useTabletAndBelowMediaQuery = () => useMediaQuery({ query: '(max-width: 1279px)' });

const TabletAndBelow = ({ children }: { children: any }) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery();

  return isTabletAndBelow ? children : null;
};

export default TabletAndBelow;
