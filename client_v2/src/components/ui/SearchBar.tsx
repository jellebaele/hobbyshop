import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

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
  useDebounce(() => setResult(filter(searchTerm)), [searchTerm], 500);

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
