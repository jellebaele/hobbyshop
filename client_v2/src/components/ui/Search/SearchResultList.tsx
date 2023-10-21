import '../../../assets/styles/components/ui/search/searchResultList.scss';
import SearchResult from './SearchResult';

type SearchResultListProps = {
  results: string[];
  onClick?: (resultName: string) => void;
  active?: boolean;
  reference?: React.RefObject<HTMLDivElement>;
};

const SearchResultList = ({
  results,
  onClick,
  active,
  reference,
}: SearchResultListProps) => {
  return (
    <div
      className={`searchResultListContainer ${active ? 'active' : ''}`}
      ref={reference}>
      <ul>
        {results.map((result, index) => {
          return <SearchResult key={index} result={result} onClick={onClick} />;
        })}
      </ul>
    </div>
  );
};

export default SearchResultList;
