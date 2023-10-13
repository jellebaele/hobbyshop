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
  const [queriedCategories, setQueriedCategories] = useState(categories);
  const [searchTerm, setSearchTerm] = useState(getValues(name));

  useDebounce(
    () => setQueriedCategories(filter(searchTerm)),
    [searchTerm],
    500
  );

  const filter = (query: string) => {
    if (query === '') return categories;
    else {
      const filtered = categories.filter((category) =>
        category.name.toLowerCase().includes(query.toLowerCase())
      );
      return filtered;
    }
  };

  const renderResults = () => {
    const searchResults = queriedCategories.map((category) => {
      return (
        <div
          key={category.id}
          onClick={() => {
            setValue(name, category.name);
            setSearchTerm(category.name);
          }}>
          {category.name}
        </div>
      );
    });
    return <div>{searchResults}</div>;
  };

  return (
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
        />
      </div>
      {renderResults()}
      <ValidationError message={error?.message} />
      {/* <button onClick={() => setValue(name, 'Test')}>Test</button> */}
    </div>
  );
}

export default SearchBarCategories;
