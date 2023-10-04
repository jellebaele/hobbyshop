import { useEffect, useState } from 'react';

type SearchBarProps<T> = {
  setResult: React.Dispatch<React.SetStateAction<T[]>>;
  filter: (query: string) => T[];
  placeholder?: string;
};

function SearchBar<T extends object>({
  setResult,
  filter,
  placeholder,
}: SearchBarProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) setResult(filter(debouncedSearchTerm));
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}></input>
    </div>
  );
}

export default SearchBar;
