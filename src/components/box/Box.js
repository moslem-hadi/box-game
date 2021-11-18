import React from "react"; 
import cardboardbox from '../../cardboard_box.svg'

const Box = ({ title }) => {
  return (
    <div className="box">
      <img src={cardboardbox} alt="" />
      <h5>{title}</h5>
    </div>
  );
};

export default Box;
