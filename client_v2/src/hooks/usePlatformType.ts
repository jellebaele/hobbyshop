import { useEffect, useState } from 'react';
import { useWindowSize } from './useWindowsSize';
import {
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
  PlatformTypes,
} from '../shared/constants/PlatformTypes';

export const usePlatformType = () => {
  const [platformType, setPlatformType] = useState<PlatformTypes>('desktop');
  const { width } = useWindowSize();

  useEffect(() => {
    if (width === undefined) setPlatformType('desktop');
    else if (width <= BREAKPOINT_MOBILE) setPlatformType('mobile');
    else if (width <= BREAKPOINT_TABLET) setPlatformType('tablet');
    else setPlatformType('desktop');
  }, [width]);

  return platformType;
};
