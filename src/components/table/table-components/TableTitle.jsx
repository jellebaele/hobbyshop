import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './table-title.scss';

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
            <button>
               Meer
               <ArrowForwardIcon className="icon" />
            </button>
         </Link>
      </div>
   );
};

export default TableTitle;
