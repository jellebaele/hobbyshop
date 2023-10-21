import '../../../assets/styles/components/ui/search/searchResult.scss';

type SearchResultProps = {
  result: string;
  onClick?: (resultName: string) => void;
};
const SearchResult = ({ result, onClick }: SearchResultProps) => {
  return (
    <li className="searchResultLi" onClick={() => onClick && onClick(result)}>
      {result}
    </li>
  );
};

export default SearchResult;
