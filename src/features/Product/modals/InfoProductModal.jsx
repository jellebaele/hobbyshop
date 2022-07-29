import React from 'react';
import BasicModal from '../../../components/modal/basic/BasicModal';
import './info-product-modal.scss';
import { Add, Remove, ShoppingBag } from '@mui/icons-material';
import { useState } from 'react';
import { IconButton } from '../../../components/button/IconButton';
import { Button } from '../../../components/button/Button';
import { Status } from '../../../components/status/Status';

const product = {
   _id: 'qvq54vqz1ev3saze',
   title: 'Appels',
   description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum non, consequatur, officiis sed molestiae explicabo qui rem dolor nemo cumque molestias earum amet, recusandae ipsam in odit aliquam voluptatem nobis.',
   category: 'Fruit',
   amount: '5',
   unit: 'stuks',
   owner: 'Herman',
   Status: 'inStock',
   UpdatedAt: '20-07-2022',
};

const inStockTranslation = 'In voorraad';

const InfoProductModal = ({ open, handleOnClose, productId }) => {
   let [amount, setAmount] = useState(0);

   const handleIncreaseAmount = () => {
      if (amount < product.amount) setAmount(++amount);
   };

   const handleDecreaseAmount = () => {
      if (amount > 0) setAmount(--amount);
   };

   const getProductStatus = () => {
      if (product.Status === 'inStock') return inStockTranslation;
   };
   /**
    * _id
    * Name
    * Description
    * Category
    * Amount
    * Unit (mm, kg, ...)
    * Owner
    * Status
    * TimeCreated
    * TimeUpdated
    */

   return (
      <BasicModal
         open={open}
         handleOnClose={handleOnClose}
         title="Product details"
      >
         <div className="productInfoModalContainer">
            <div className="top">
               <div className="inputGrid">
                  <span>Naam:</span>
                  <span className="productDetail">{product.title}</span>
                  <span>Categorie:</span>
                  <span className="productDetail">{product.category}</span>
                  <span>Beschrijving:</span>
                  <span className="productDetail">{product.description}</span>
                  <span>Stock:</span>
                  <span className="productDetail">{`${product.amount} ${product.unit}`}</span>
                  <span>Status:</span>
                  <span className="productDetail">
                     <Status status={product.Status}>
                        {getProductStatus()}
                     </Status>
                  </span>
                  <span>Eigenaar:</span>
                  <span className="productDetail">{product.owner}</span>
               </div>
            </div>

            <div className="bottom">
               <div className="orderContainer">
                  <div className="amountContainer">
                     <IconButton
                        onClick={handleDecreaseAmount}
                        className="modalButton"
                     >
                        <Remove />
                     </IconButton>

                     <div className="amount">{amount}</div>
                     <IconButton
                        onClick={handleIncreaseAmount}
                        className="modalButton"
                     >
                        <Add />
                     </IconButton>
                  </div>

                  <Button
                     startIcon={ShoppingBag}
                     className="orderButton"
                     classNameIcon="orderIcon"
                  >
                     In winkelwagen
                  </Button>
               </div>
            </div>
         </div>
      </BasicModal>
   );
};

export default InfoProductModal;
