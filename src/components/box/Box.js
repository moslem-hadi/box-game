import React, { useContext } from "react";
import cardboardbox from '../../cardboard_box.svg';
import cardboard_box_open from '../../cardboard_box_open.svg';
import { ItemTypes } from "../../constants/ItemTypes";
import { useDrop } from "react-dnd";
import { PersonContext } from "../../context/PersonContext";

const Box = ({ box }) => {
  const personContext = useContext(PersonContext);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PERSON,
    drop: (person) => console.log(personContext.person),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [])

  return (
    <div className="box" ref={drop} id={box.title} onClick={() => console.log(personContext.person)}>
      <img src={isOver ? cardboard_box_open : cardboardbox} alt="" />
      <h5>{box.title}</h5>
    </div>
  );
};

export default Box;
