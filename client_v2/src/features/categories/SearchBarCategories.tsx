import '../../assets/styles/features/categories/searchBarCategories.scss';
import {
  UseFormRegister,
  FieldValues,
  FieldError,
  UseFormSetValue,
  UseFormGetValues,
} from 'react-hook-form';
import { useState } from 'react';
import { useAppSelector } from '../../context/hooks';
import { selectAllCategories } from './categoriesSlice';
import useDebounce from '../../hooks/useDebounce';
import { useIsOutsideClick } from '../../hooks/useIsClickOutside';
import InputSearch from '../../components/form/InputSearch';
import OptionList from '../../components/ui/OptionList';

type SearchBarCategoriesProps<T extends FieldValues> = {
  type?: string;
  disabled?: boolean;
  className?: string;
  error?: FieldError;
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<FieldValues[string]>;
  getValues: UseFormGetValues<FieldValues[string]>;
};

function SearchBarCategories<T extends FieldValues>({
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
  const [queriedCategoryNames, setQueriedCategoryNames] = useState(categoryNames);
  const [searchTerm, setSearchTerm] = useState(getValues('category'));
  const [searchBarActive, setSearchBarActive] = useState(false);

  const ref = useIsOutsideClick(() => setSearchBarActive(false));

  useDebounce(() => setQueriedCategoryNames(filter(searchTerm)), [searchTerm], 500);

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
    setValue('category', categoryName);
    setSearchTerm(categoryName);
    setSearchBarActive(false);
  };

  return (
    <div className="searchBarCategoriesContainer">
      <div className="inputContainer">
        <InputSearch
          name="category"
          label="Categorie"
          register={register}
          disabled={disabled}
          setSearchTerm={setSearchTerm}
          setSearchBarActive={setSearchBarActive}
          error={error}
          type={type}
        />
        <OptionList
          options={queriedCategoryNames}
          onClick={handleOnClick}
          active={searchBarActive}
          reference={ref}
        />
      </div>
    </div>
  );
}

export default SearchBarCategories;
