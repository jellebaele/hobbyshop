import { Add, Remove, ShoppingBag } from '@mui/icons-material';
import React, { useState } from 'react';
import { Button } from '../../components/button/Button';
import { IconButton } from '../../components/button/IconButton';
import Header from '../../components/header/Header';
import ConfirmModal from '../../components/modal/confirm/ConfirmModal';
import { Status } from '../../components/status/Status';
import './shopping-cart.scss';

const rows = [
   {
      _id: 'qvq54vqz1ev3saze',
      name: 'Appels',
      description: '/',
      category: 'Fruit',
      amount: '5',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1ev3sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
];

const ShoppingCart = () => {
   const [openConfirmModal, setOpenConfirmModal] = useState(false);

   const handleClickOrder = () => {
      setOpenConfirmModal(true);
   };

   return (
      <div className="shoppingCartContainer">
         <Header pageTitle={'Winkelwagen'} />
         <div className="bodyContainer">
            <h3 className="title">{`${rows.length} artikel(en) geselecteerd:`}</h3>
            <div className="shoppingCartBody">
               <div className="top">
                  {rows.map((row) => (
                     <div key={row._id} className="product">
                        <div className="left">
                           <div className="productDetails">
                              <span className="productName">
                                 <b>Product: </b>
                                 {row.name}
                              </span>
                              <span className="category">
                                 <b>Category: </b>
                                 {row.category}
                              </span>
                              <span className="owner">
                                 <b>Eigenaar: </b>
                                 {row.owner}
                              </span>
                              <span className="statusSpan">
                                 <b>Status: </b>
                                 <Status status={row.status} />
                              </span>
                              <span className="id">
                                 <b>Id: </b>
                                 {row._id}
                              </span>
                           </div>
                        </div>
                        <div className="right">
                           <div className="buttonContainer">
                              <IconButton className="editAmountButton">
                                 <Remove />
                              </IconButton>
                              {row.amount} {row.unit}
                              <IconButton className="editAmountButton">
                                 <Add />
                              </IconButton>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="bottom">
                  <Button
                     startIcon={ShoppingBag}
                     className="orderButton"
                     classNameIcon="orderButtonIcon"
                     width="50%"
                     onClick={handleClickOrder}
                  >
                     Bestel
                  </Button>
               </div>
            </div>
         </div>
         <ConfirmModal
            title="Bestelling"
            description="Wil je deze bestelling plaatsen?"
            open={openConfirmModal}
            handleOnClose={() => setOpenConfirmModal(false)}
            handleOnConfirm={() => setOpenConfirmModal(false)}
         />
      </div>
   );
};

export default ShoppingCart;
