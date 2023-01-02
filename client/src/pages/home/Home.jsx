import React from 'react';
import './home.scss';
import Header from '../../components/header/Header';
import BasicProductTable from '../../features/Product/tables/basic/BasicProductTable';
import BasicOrderTable from '../../features/Order/tables/basic/BasicOrderTable';

const Home = () => {
  return (
    <div className="homeContainer">
      <Header pageTitle={'Dashboard'} />
      <div className="bodyContainer">
        <div className="tableContainer">
          <BasicProductTable />
        </div>
        <div className="tableContainer">
          <BasicOrderTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
