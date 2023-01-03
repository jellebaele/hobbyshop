import React from 'react';
import { Button } from '../button/Button';

const SubmitButton = ({ text, status, endIcon, startIcon }) => {
  const renderSubmitButton = () => {
    if (status === 'pending') {
      return (
        <Button type="submit" className="button" disabled>
          Even geduld...
        </Button>
      );
    }

    return (
      <Button
        type="submit"
        className="button"
        endIcon={endIcon}
        startIcon={startIcon}
      >
        {text}
      </Button>
    );
  };
  return <>{renderSubmitButton()}</>;
};

export default SubmitButton;
