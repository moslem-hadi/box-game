import React, { useContext } from "react";
import cardboardbox from '../../cardboard_box.svg';
import cardboard_box_open from '../../cardboard_box_open.svg';
import { ItemTypes } from "../../constants/ItemTypes";
import { useDrop } from "react-dnd";
import { PersonContext } from "../../context/PersonContext";
/**
 * Shows the box and manage box behavior
 */
const Box = ({ box }) => {
  const personContext = useContext(PersonContext);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PERSON,
    drop: (person) => console.log(personContext.person),//I dont know why this is null!!!
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [])

  return (
    <div className="box" ref={drop} id={box.title} onClick={() => personContext.dropPerson(box.race)}>
      <img src={isOver ? cardboard_box_open : cardboardbox} alt="" />
      <h5>{box.title}</h5>
    </div>
  );
};

export default Box;
