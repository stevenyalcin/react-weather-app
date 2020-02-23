import React from 'react';
import Clock from 'react-live-clock';

const Navbar = () => {
  let todayDate = new Date().toDateString();
  return (
    <div className="navbar">
      <a href="#" className="active">
        Home
      </a>
      <a href="#">Rss Feed</a>
      <a href="#">Weather Map</a>
      <a href="#">Agriculture</a>
      <a href="#">World Weather Broadcast</a>
      <a href="#" className="right">
        {todayDate} | <Clock format={'HH:mm:ss'} ticking={true} />
      </a>
    </div>
  );
};

export default Navbar;
