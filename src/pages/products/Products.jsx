import { ShoppingBag } from '@mui/icons-material';
import React, { useState } from 'react';
import { IconButton } from '../../components/button/IconButton';
import Header from '../../components/header/Header';
import SortableProductTable from '../../features/Product/tables/sortable/SortableProductTable';
import OrderProductModal from '../../features/Product/modals/OrderProductModal';
import './products.scss';

const Products = () => {
   const [openModal, setOpenModal] = useState(false);

   return (
      <div className="productsContainer">
         <Header pageTitle="Producten" />
         <div className="bodyContainer">
            <div className="tableContainer">
               <SortableProductTable
                  title="Producten"
                  rowButton={
                     <IconButton onClick={() => setOpenModal(true)}>
                        <ShoppingBag />
                     </IconButton>
                  }
               />

               <OrderProductModal
                  open={openModal}
                  handleOnClose={() => setOpenModal(false)}
               />
            </div>
         </div>
      </div>
   );
};

export default Products;
