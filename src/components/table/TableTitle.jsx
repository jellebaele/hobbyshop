import React from 'react';

const TableTitle = ({ title, children }) => {
   return (
      <div className="tableTitleContainer">
         <h2>{title}</h2>
         {children}
      </div>
   );
};

export default TableTitle;
