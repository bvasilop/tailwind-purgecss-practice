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
import ProfileCard from './ProfileCard';
import WeatherCard from './WeatherCard';

const App = () => (
  <div className="container mx-auto px-4">
    <Navbar />
    <Header />
    <WeatherCard />
    <div className="flex justify-between">
      <Card />
      <Card />
      <Card />
    </div>

    <div className="flex justify-between">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>

    <div className="flex flex justify-between mb-4">
      <div className="px-4">
        <MarketingPage />
      </div>
      <div className="">
        <MarketingPage />
      </div>
    </div>

    {/* <div className="flex justify-center">
      <FormGrid />
    </div> */}
    {/* <div className="flex justify-center">
        <Login />
      </div> */}
    <div>
      <SpacedColumns />
    </div>
    <div className=" py-10">
      <Footer />
    </div>
  </div>
);

export default App;
