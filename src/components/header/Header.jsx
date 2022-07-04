import React from 'react';

const Header = ({ pageTitle }) => {
   return (
      <div className="headerContainer">
         <h1 className="title">Hob</h1>
         <h3 className="pageTitle">{pageTitle}</h3>
      </div>
   );
};

export default Header;
