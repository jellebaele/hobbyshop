import React from 'react';
import { Button } from '../button/Button';

const TableTitle = ({
   title,
   buttonIcon = null,
   buttonText = null,
   onButtonClick = null,
}) => {
   return (
      <div className="tableTitleContainer">
         <h2>{title}</h2>
         {(buttonIcon || buttonText) && (
            <Button startIcon={buttonIcon} onClick={onButtonClick}>
               {buttonText}
            </Button>
         )}
      </div>
   );
};

export default TableTitle;
