import { DependencyList, useCallback, useEffect } from 'react';

export default function useDebounce(
  effect: React.Dispatch<React.SetStateAction<string>>,
  dependencies: DependencyList,
  delay: number
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}
