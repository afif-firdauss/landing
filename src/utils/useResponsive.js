import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const [isClient, setIsClient] = useState(false);

  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return {
    isDesktop: isClient ? isDesktop : false
  };
};

export default useResponsive;
