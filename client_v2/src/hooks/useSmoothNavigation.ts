import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const useSmoothNavigation = (delay: number = 300) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisble] = useState(false);

  useEffect(() => {
    setIsVisble(true);
  }, []);

  const navigateTo = (to: number | string) => {
    setIsVisble(false);
    // @ts-ignore
    setTimeout(() => navigate(to), delay);
  };

  return { isVisible, navigateTo };
};
