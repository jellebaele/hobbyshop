import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const useSmoothVisibility = (delay: number = 300) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const setInvisible = () => {
    setVisible(false);
    setTimeout(() => navigate(-1), delay);
  };

  return { visible, setInvisible };
};
