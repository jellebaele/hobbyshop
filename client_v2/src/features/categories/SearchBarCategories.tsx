import '../../assets/styles/features/categories/searchBarCategories.scss';
import {
  UseFormRegister,
  FieldValues,
  FieldError,
  UseFormSetValue,
  UseFormGetValues,
} from 'react-hook-form';
import ValidationError from '../../components/form/ValidationError';
import { useState } from 'react';
import { useAppSelector } from '../../context/hooks';
import { selectAllCategories } from './categoriesSlice';
import useDebounce from '../../hooks/useDebounce';
import SearchResultList from '../../components/ui/Search/SearchResultList';
import { useIsOutsideClick } from '../../hooks/useIsClickOutside';

type SearchBarCategoriesProps<T extends FieldValues> = {
  name: FieldValues[string];
  label: string;
  type?: string;
  disabled?: boolean;
  className?: string;
  error?: FieldError;
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<FieldValues[string]>;
  getValues: UseFormGetValues<FieldValues[string]>;
};

function SearchBarCategories<T extends FieldValues>({
  name,
  label,
  type = 'text',
  disabled,
  className,
  error,
  register,
  setValue,
  getValues,
}: SearchBarCategoriesProps<T>) {
  const categories = useAppSelector(selectAllCategories);
  const categoryNames = categories.map((category) => category.name);
  const [queriedCategoryNames, setQueriedCategoryNames] =
    useState(categoryNames);
  const [searchTerm, setSearchTerm] = useState(getValues(name));
  const [searchBarActive, setSearchBarActive] = useState(false);
  const ref = useIsOutsideClick(() => setSearchBarActive(false));

  useDebounce(
    () => setQueriedCategoryNames(filter(searchTerm)),
    [searchTerm],
    500
  );

  const filter = (query: string) => {
    if (query === '') return categoryNames;
    else {
      const filtered = categoryNames.filter((categoryName) =>
        categoryName.toLowerCase().includes(query.toLowerCase())
      );
      return filtered;
    }
  };

  const handleOnClick = (categoryName: string) => {
    setValue(name, categoryName);
    setSearchTerm(categoryName);
    setSearchBarActive(false);
  };

  return (
    <div className="searchBarCategoriesContainer">
      <div className={`inputFieldContainer ${className}`}>
        <div className="property">
          <label htmlFor={name}>{label}</label>
          <input
            {...register(name)}
            type={type}
            disabled={disabled}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onClick={() => setSearchBarActive(true)}
          />
        </div>
        <ValidationError message={error?.message} />
        {/* <button onClick={() => setValue(name, 'Test')}>Test</button> */}
      </div>
      <SearchResultList
        results={queriedCategoryNames}
        onClick={handleOnClick}
        active={searchBarActive}
        reference={ref}
      />
    </div>
  );
}

export default SearchBarCategories;
