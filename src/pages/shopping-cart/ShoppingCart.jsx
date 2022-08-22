import { ShoppingBag } from '@mui/icons-material';
import React, { useState } from 'react';
import { Button } from '../../components/button/Button';
import Header from '../../components/header/Header';
import ConfirmModal from '../../components/modal/confirm/ConfirmModal';
import Item from '../../features/ShoppingCart/Item';
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
                     <Item key={row._id} shoppingCartItem={row} />
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
