import { useEffect, useState } from 'react';
import useWindowSize from './useWindowSize';

const BREAKPOINT = 480;

const useIsMobile = () => {
   const [isMobile, setIsMobile] = useState(undefined);
   const { width } = useWindowSize();

   useEffect(() => {
      width > BREAKPOINT ? setIsMobile(false) : setIsMobile(true);
   }, [width]);

   return isMobile;
};

export default useIsMobile;
