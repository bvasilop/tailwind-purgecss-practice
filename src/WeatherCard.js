import React from 'react';

const WeatherCard = () => (
  <div
    className="container bg-grey-lightest mx-auto shadow rounded pb-4 bg-cover"
    style={{
      color: '#606F7B',

      backgroundImage:
        "url('https://68.media.tumblr.com/f6a4004f3092b0d664daeabb95d5d195/tumblr_oduyciOJNb1uhjffgo1_500.gif')",
    }}
  >
    <div className="mt-2 p-4 border-grey-light text-center">
      <span className="text-4xl font-thin">Seattle, Washington</span>
      <span className="hidden sm:inline-block align-bottom text-xs">
        ( 98105 )
      </span>
    </div>
    <div className="text-center text-xl text-grey-light p-4">
      <span>Fog</span>
      <span>, light rain</span>
    </div>
    <div className="flex justify-center">
      <div className="text-center p-2">
        <div className="text-lg text-grey-light">
          <span className="text-right">45˚F</span>
          <span className="text-center text-5xl text-white mx-6  font-thin">
            49˚F
          </span>
          <span className="text-left">58˚F</span>
        </div>
        <div className="text-grey-light tracking-wide">
          Saturday | 31 Oct | 10:30pm
        </div>
      </div>
    </div>
  </div>
);

export default WeatherCard;
