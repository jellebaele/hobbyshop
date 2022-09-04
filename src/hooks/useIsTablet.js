import { useEffect, useState } from 'react';
import useWindowSize from './useWindowSize';

const BREAKPOINT = 1024;

const useIsTablet = () => {
   const [isMobile, setIsMobile] = useState(undefined);
   const { width } = useWindowSize();

   useEffect(() => {
      width > BREAKPOINT ? setIsMobile(false) : setIsMobile(true);
   }, [width]);

   return isMobile;
};

export default useIsTablet;
