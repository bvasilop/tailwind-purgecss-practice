/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles/tailwind.css';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import Navbar from './Navbar';
import SpacedColumns from './SpacedColumns';

const App = () => (
  <div className="container mx-auto px-4">
    <div className="">
      <Navbar />
      <Header />
      <div className="flex mb-4">
        <div className="w-1/2">
          <Login />
        </div>
        <div className="w-1/2">
          <Card />
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
