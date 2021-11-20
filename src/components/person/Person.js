import React, { useEffect, useState, useContext } from "react";
import { ItemTypes } from "../../constants/ItemTypes";
import { useDrag } from "react-dnd";
import { PersonContext } from "../../context/PersonContext";

/**
 * Responsible for showing the person and person movement
 */
const Person = ({ disapear }) => {

  const personContext = useContext(PersonContext)

  const person = personContext.person;

  const [yPosition, setY] = useState(0);
  const [windowHeight, seWindowHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    seWindowHeight(window.innerHeight);
  }
  /** Update max height based on window.  */
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  /** Remove the user when reaches the end! */
  useEffect(() => {
    if (yPosition >= windowHeight) {
      disapear();
      return;
    }
    const timer = setTimeout(() => {
      setY(yPosition + 1);
    }, 10);
    return () => clearTimeout(timer);
  }, [yPosition]);



  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PERSON,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),

    item: { personId: person?.Id, type: ItemTypes.PERSON },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
    },

  }));
  return (
    (person && <div
      className="person"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
        top: yPosition
      }}
    >
      <img src={"/content/people/" + person.pic} alt="" />
    </div>
    )
  );



};

export default Person;
