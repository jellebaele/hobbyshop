import React from 'react';
import Header from '../../components/header/Header';
import ProductTableExtended from '../../components/table/product-table/product-table-extended/ProductTableExtended';
import './products.scss';

const Products = () => {
   return (
      <div className="productsContainer">
         <Header pageTitle="Producten" />
         <div className="bodyContainer">
            <div className="tableContainer">
               <ProductTableExtended />
            </div>
         </div>
      </div>
   );
};

export default Products;
