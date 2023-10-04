import { useState } from 'react';
import '../../assets/styles/pages/products/productListPage.scss';
import Container from '../../components/ui/Container';
import Header from '../../components/ui/Header';
import SearchBar from '../../components/ui/SearchBar';
import { useAppSelector } from '../../context/hooks';
import ProductList from '../../features/products/components/ProductList';
import { selectAllProducts } from '../../features/products/context/productsSlice';
import { Product } from '../../models/Product';

const ProductsListPage = () => {
  const products = useAppSelector(selectAllProducts);
  const [queriedProducts, setQueriedProducts] = useState<Product[]>(products);

  const filter = (query: string) => {
    if (query === '') return products;
    else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      return filtered;
    }
  };

  return (
    <Container>
      <div className="productListPageContainer">
        <div className="top">
          <Header>Producten</Header>
          <SearchBar
            setResult={setQueriedProducts}
            filter={filter}
            placeholder="Zoek op naam"></SearchBar>
        </div>
        <ProductList products={queriedProducts} />
      </div>
    </Container>
  );
};

export default ProductsListPage;
