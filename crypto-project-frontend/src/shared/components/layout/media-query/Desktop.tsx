import { useMediaQuery } from 'react-responsive';

const useDesktopMediaQuery = () => useMediaQuery({ query: '(min-width: 1280px)' });

const Desktop = ({ children }: { children: any }) => {
  const isDesktop = useDesktopMediaQuery();

  return isDesktop ? children : null;
};

export default Desktop;
