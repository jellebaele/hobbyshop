import '../../../assets/styles/features/products/productContent.scss';
import { Product } from '../../../models/Product';
import Status from '../../../components/ui/Status';
import ProductCategory from './ProductCategory';
import { timeAgo } from '../../../shared/utils/format';

const ProductContent = ({ product }: { product: Product }) => {
  return (
    <>
      <div className="productProperty">Naam: {product.name}</div>
      <div className="productProperty">
        Aantal: {product.amount} {product.unit}
      </div>
      <div className="productProperty">Eigenaar: {product.user}</div>
      <div className="productProperty">
        Categorie:
        <ProductCategory categoryId={product.category} />
      </div>
      <div className="productProperty">
        Laatst bijgewerkt: {timeAgo(product.createdAt)}
      </div>
      <div className="productProperty">
        Status: <Status status={product.status} />
      </div>
    </>
  );
};

export default ProductContent;
