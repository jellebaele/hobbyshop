import React from 'react';
import './header.scss';

const Header = ({ pageTitle }) => {
   return (
      <>
         <div className="headerContainer">
            <div className="titleContainer">
               <h1 className="title">HERMAN'S HOBBY SHOP</h1>
               <h3 className="pageTitle">{pageTitle}</h3>
            </div>
         </div>
      </>
   );
};

export default Header;
