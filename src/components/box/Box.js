import React, { useContext } from "react";
import cardboardbox from '../../cardboard_box.svg';
import cardboard_box_open from '../../cardboard_box_open.svg';
import { ItemTypes } from "../../constants/ItemTypes";
import { useDrop } from "react-dnd";
import { PersonContext } from "../../context/PersonContext";

const Box = ({ x, y, children, box, movePerson }) => {

  const personContext = useContext(PersonContext);

  const [{ isDragging, canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PERSON,
    drop: (person) => personContext.dropPerson(personContext.person, box.race),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      //isDragging: monitor.isDragging(),
      //canDrop: monitor.canDrop()
    }),
  }), [x, y])



  return (
    <div className="box" ref={drop} id={box.title}>
      <img src={isOver ? cardboard_box_open : cardboardbox} alt="" />
      <h5>{box.title}</h5>
    </div>
  );
};

export default Box;
