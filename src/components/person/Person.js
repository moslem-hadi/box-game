import React from "react"; 

const Person = ({ pic }) => {
  return (
    <div className="person">
      <img src={pic} alt="" />
    </div>
  );
};

export default Person;
