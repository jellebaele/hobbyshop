import '../../../assets/styles/features/products/productContent.scss';
import { Product } from '../../../models/Product';
import Status from '../../../components/ui/Status';

const ProductContent = ({ product }: { product: Product }) => {
  return (
    <>
      <div className="productProperty">Naam: {product.name}</div>
      <div className="productProperty">
        Aantal: {product.amount} {product.unit}
      </div>
      <div className="productProperty">Eigenaar: {product.user}</div>
      <div className="productProperty">Categorie: {product.category} </div>
      <div className="productProperty">
        Laatst bijgewerkt: {product.createdAt}
      </div>
      <div className="productProperty">
        Status: <Status status={product.status} />
      </div>
    </>
  );
};

export default ProductContent;
