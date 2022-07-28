import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './table-title.scss';
import { Button } from '../../elements/Button';

const TableTitle = ({ title, to }) => {
   return (
      <div className="tableTitleContainer">
         <Link
            to={to}
            style={{
               textDecoration: 'none',
               color: 'inherit',
            }}
         >
            <div className="titleContainer">
               <h2 className="tableTitle">{title}</h2>
            </div>
         </Link>
         <Link
            to={to}
            style={{
               textDecoration: 'none',
               color: 'inherit',
            }}
         >
            <Button endIcon={ArrowForwardIcon} classNameIcon="tableTitleIcon">
               Meer
            </Button>
         </Link>
      </div>
   );
};

export default TableTitle;
