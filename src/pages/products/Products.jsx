import React from 'react';
import Header from '../../components/header/Header';
import ProductTableBasic from '../../components/table/product-table/ProductTableBasic';
import './products.scss';

const Products = () => {
   return (
      <div className="productsContainer">
         <Header pageTitle="Producten" />
         <div className="bodyContainer">
            <div className="tableContainer">
               <ProductTableBasic />
            </div>
         </div>
      </div>
   );
};

export default Products;
