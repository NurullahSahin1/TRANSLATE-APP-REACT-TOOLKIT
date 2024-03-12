import React from "react";

const Loader = () => {
  return (
    <div className="pyramid-loader absolute -top-[300px] md:left-50 ">
      <div className="wrapper">
        <span className="side side1"></span>
        <span className="side side2"></span>
        <span className="side side3"></span>
        <span className="side side4"></span>
        <span className="shadow"></span>
      </div>
    </div>
  );
};

export default Loader;
