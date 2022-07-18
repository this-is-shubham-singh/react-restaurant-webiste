import React, { useState } from "react";
import "./style.css";
import Menu from "./Menuapi";
import Menucard from "./Menucard";

const Restaurant = () => {
  const [menudata, setmenudata] = useState(Menu);


  // calls when buttons are clicked 
  // it recieves category 
  const filteritem = (category) => {
    const updatedlist = Menu.filter((curelm) => {
      return curelm.category === category;
    });
    setmenudata(updatedlist);
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filteritem("Breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filteritem("Lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filteritem("Evening")}
          >
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => filteritem("Dinner")}
          >
            Dinner
          </button>
          <button className="btn-group__item" onClick={() => setmenudata(Menu)}>
            All
          </button>
        </div>
      </nav>
      <Menucard menudata={menudata} />
    </>
  );
};

export default Restaurant;
