import { ShoppingBag } from '@mui/icons-material';
import {
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableRow,
} from '@mui/material';
import React, { useState } from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import ProductInfoModal from '../../modal/product/ProductInfoModal';
import TableHeader from '../table-components/TableHeader';
import TableTitle from '../table-components/TableTitle';
import './product-table.scss';
import {
   productColumnLayoutDesktop,
   productColumnLayoutMobile,
} from './utils/productTableLayout';

const data = [
   {
      _id: 'qvq54vqz1ev3saze',
      title: 'Appels',
      description: '/',
      category: 'Fruit',
      amount: '5',
      unit: '',
      owner: 'Herman',
      Status: 'Active',
   },
   {
      _id: 'qvq54vqz1ev3sazsdfe',
      title: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      Status: 'Active',
   },
];

const ProductTable = () => {
   const isMobile = useIsMobile();
   const [openInfoModal, setOpenInfoModal] = useState(false);
   const [productIdModal, setProductIdModal] = useState(undefined);

   const handleModalClose = () => {
      setOpenInfoModal(false);
   };

   const handleModalOpen = (id) => {
      setProductIdModal(id);
      setOpenInfoModal(true);
   };

   const getColumnLayout = () => {
      return isMobile ? productColumnLayoutMobile : productColumnLayoutDesktop;
   };

   return (
      <div className="productTableContainer">
         <TableTitle title="Producten" to="/products" className="tableTitle" />
         <div className="tableContainerWrapper">
            <TableContainer component={Paper}>
               <Table size={isMobile ? 'small' : 'medium'}>
                  <TableHeader columns={getColumnLayout()} />
                  <TableBody>
                     {data.map((row) => (
                        <TableRow key={row._id}>
                           <TableCell component="th" scope="row">
                              {row.title}
                           </TableCell>
                           {!isMobile && <TableCell>{row.category}</TableCell>}
                           {!isMobile && (
                              <TableCell>{`${row.amount} ${row.unit}`}</TableCell>
                           )}
                           <TableCell align="right">
                              <div className="buttonContainer">
                                 <button
                                    onClick={() => handleModalOpen(row._id)}
                                 >
                                    <ShoppingBag className="icon" />
                                    Bestel
                                 </button>
                              </div>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>
         <ProductInfoModal
            open={openInfoModal}
            onModalClose={handleModalClose}
            productId={productIdModal}
         />
      </div>
   );
};

export default ProductTable;
