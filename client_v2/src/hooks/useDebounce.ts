import { DependencyList, useCallback, useEffect } from 'react';

export default function useDebounce(
  effect: React.Dispatch<React.SetStateAction<string>>,
  dependencies: DependencyList,
  delay: number
) {
  const callback = useCallback(effect, [...dependencies, effect]);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}
