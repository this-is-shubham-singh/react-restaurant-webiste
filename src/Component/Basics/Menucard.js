import React from "react";

const Menucard = ({ menudata }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menudata.map((curelm) => {
          return (
            <>
              <div className="card-container" key={curelm.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {curelm.id}
                    </span>
                    <span className="card-author subtle">{curelm.price}</span>
                    <h2 className="card-title">{curelm.name}</h2>
                    <span className="card-description subtle">
                      {curelm.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={curelm.image} alt="images" className="card-media" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Menucard;
