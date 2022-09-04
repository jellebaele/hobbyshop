import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './table-title-link.scss';
import { Button } from '../button/Button';

const TableTitleLink = ({ title, to }) => {
   return (
      <div className="tableTitleLinkContainer">
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

export default TableTitleLink;
