/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles/tailwind.css';
import Card from './Card';
import Footer from './Footer';
import FormGrid from './FormGrid';
import Header from './Header';
// import Login from './Login';
import Navbar from './Navbar';
import SpacedColumns from './SpacedColumns';
import MarketingPage from './MarketingPage';

const App = () => (
  <div className="container mx-auto px-4">
    <div className="">
      <Navbar />
      <Header />
      <div className="flex justify-between">
        <div className="p">
          <Card />
        </div>
        <div className="flex justify-between">
          <Card />
        </div>
        <div className="flex justify-between">
          <Card />
        </div>
      </div>

      <div className="flex mb-4">
        <div className="">
          <MarketingPage />
        </div>
        <div className="">
          <MarketingPage />
        </div>
      </div>

      <div className="flex justify-center">
        <FormGrid />
      </div>
      {/* <div className="flex justify-center">
        <Login />
      </div> */}
      <SpacedColumns />
    </div>
    <div className=" py-10">
      <Footer />
    </div>
  </div>
);

export default App;
