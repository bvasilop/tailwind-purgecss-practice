/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles/tailwind.css';
import Card from './Card';
import Footer from './Footer';
import FormGrid from './FormGrid';
import Header from './Header';
import Login from './Login';
import Navbar from './Navbar';
import SpacedColumns from './SpacedColumns';
import MarketingPage from './MarketingPage';

const App = () => (
  <div className="container mx-auto px-4">
    <div className="">
      <Navbar />
      <Header />
      <div className="flex mb-4">
        <div className="w-1/3">
          <Card />
        </div>
        <div className="w-1/3">
          <Card />
        </div>
        <div className="w-1/3">
          <Card />
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/2">
          <MarketingPage />
        </div>
        <div className="w-1/2">
          <MarketingPage />
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2">
          <Login />
        </div>
        <div className="w-1/2">
          <FormGrid />
        </div>
      </div>
      <SpacedColumns />
    </div>
    <div className=" py-10">
      <Footer />
    </div>
  </div>
);

export default App;
