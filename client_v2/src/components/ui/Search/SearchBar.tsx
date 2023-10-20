import '../../../assets/styles/components/ui/searchBar.scss';
import { useState } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import SearchIcon from '@mui/icons-material/Search';

type SearchBarProps<T> = {
  setResult: React.Dispatch<React.SetStateAction<T[]>>;
  filter: (query: string) => T[];
  placeholder?: string;
};

function SearchBar<T extends object>({ setResult, filter, placeholder }: SearchBarProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  useDebounce(() => setResult(filter(searchTerm)), [searchTerm], 500);

  return (
    <div className="searchBarContainer">
      <input
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchInput"
      />
      <SearchIcon />
    </div>
  );
}

export default SearchBar;
