import { Add, Delete, Remove } from '@mui/icons-material';
import React, { useState } from 'react';
import { Button } from '../../components/button/Button';
import { IconButton } from '../../components/button/IconButton';
import { Status } from '../../components/status/Status';
import './item.scss';

const Item = ({ shoppingCartItem }) => {
   const [amount, setAmount] = useState(shoppingCartItem.amount);

   const handleIncreaseAmount = () => {
      // Get max amount by fetch productData
      if (amount < 10) setAmount(parseInt(amount) + 1);
   };

   const handleDecreaseAmount = () => {
      if (amount > 0) setAmount(parseInt(amount) - 1);
   };
   return (
      <div className="itemContainer">
         <div className="left">
            <div className="productDetails">
               <span className="productName">
                  <b>Product: </b>
                  {shoppingCartItem.name}
               </span>
               <span className="category">
                  <b>Category: </b>
                  {shoppingCartItem.category}
               </span>
               <span className="owner">
                  <b>Eigenaar: </b>
                  {shoppingCartItem.owner}
               </span>
               <span className="statusSpan">
                  <b>Status: </b>
                  <Status status={shoppingCartItem.status} />
               </span>
               <span className="id">
                  <b>Id: </b>
                  {shoppingCartItem._id}
               </span>
            </div>
         </div>
         <div className="right">
            <div className="buttonContainer">
               <div className="editAmountContainer">
                  <IconButton
                     className="editAmountButton"
                     onClick={handleDecreaseAmount}
                  >
                     <Remove />
                  </IconButton>
                  {amount} {shoppingCartItem.unit}
                  <IconButton
                     className="editAmountButton"
                     onClick={handleIncreaseAmount}
                  >
                     <Add />
                  </IconButton>
               </div>
               <div className="deleteItemContainer">
                  <Button startIcon={Delete}>Verwijder</Button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Item;
