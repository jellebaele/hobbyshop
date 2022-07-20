import { TextareaAutosize } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react';
import BasicModal from '../basic/BasicModal';
import './product-info-modal.scss';
import { ShoppingBag } from '@mui/icons-material';
import { useState } from 'react';

const product = {
   _id: 'qvq54vqz1ev3saze',
   title: 'Appels',
   description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum non, consequatur, officiis sed molestiae explicabo qui rem dolor nemo cumque molestias earum amet, recusandae ipsam in odit aliquam voluptatem nobis.',
   category: 'Fruit',
   amount: '5',
   unit: 'stuks',
   owner: 'Herman',
   Status: 'In voorraad',
   UpdatedAt: '20-07-2022',
};

const ProductInfoModal = ({ open, onModalClose, productIdModal }) => {
   let [amount, setAmount] = useState(0);

   const handleIncreaseAmount = () => {
      if (amount < product.amount) setAmount(++amount);
   };
   const handleDecreaseAmount = () => {
      if (amount > 0) setAmount(--amount);
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
         onModalClose={onModalClose}
         productId={productIdModal}
         title="Product details"
      >
         <div className="basicModalContainer">
            <div className="left">
               <div className="detailsContainer">
                  <div className="inputGrid">
                     <label htmlFor="name">Naam:</label>
                     <input
                        type="text"
                        name="name"
                        value={product.title}
                        disabled
                     />
                     <label htmlFor="name">Categorie:</label>
                     <input
                        type="text"
                        name="name"
                        value={product.category}
                        disabled
                     />
                     <label htmlFor="name">Beschrijving:</label>
                     <TextareaAutosize
                        className="textAreaAutosize"
                        placeholder="test"
                        value={product.description}
                        disabled
                        style={{ resize: 'none' }}
                     />
                     <label htmlFor="name">Stock:</label>
                     <input
                        type="text"
                        name="name"
                        value={`${product.amount} ${product.unit}`}
                        disabled
                     />

                     <label htmlFor="name">Status:</label>
                     <input
                        type="text"
                        name="name"
                        value={product.Status}
                        disabled
                     />

                     <label htmlFor="name">Eigenaar:</label>
                     <input
                        type="text"
                        name="name"
                        value={product.owner}
                        disabled
                     />
                  </div>
               </div>
            </div>
            <div className="right">
               <div className="orderContainer">
                  <div className="amountContainer">
                     <button
                        className="addButton"
                        onClick={handleIncreaseAmount}
                     >
                        <AddIcon />
                     </button>
                     <div className="amount">{amount}</div>
                     <button
                        className="removeButton"
                        onClick={handleDecreaseAmount}
                     >
                        <RemoveIcon />
                     </button>
                  </div>
                  <button className="orderButton">
                     <ShoppingBag className="icon" />
                     In winkelwagen
                  </button>
               </div>
            </div>
         </div>
      </BasicModal>
   );
};

export default ProductInfoModal;
