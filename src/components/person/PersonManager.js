import React, { useState, useEffect, useContext } from "react";
import Person from "./Person";
import { PersonContext } from "../../context/PersonContext";

/**
 * creating new Person
 */
const PersonManager = () => {
    /** maximum number of people*/
    const limit = 3;

    const personContext = useContext(PersonContext)

    const person = personContext.person;

    const [totalTries, setTotalTries] = useState(0);

    /** Create new person or end the game  */
    useEffect(() => {
        if (person == null && totalTries < limit) {
            personContext.newPerson();
            setTotalTries(totalTries + 1);
        }
        if (person == null && totalTries == limit)
            personContext.setGameOver(true);

        //eslint-disable-next-line
    }, [person]);


    return (
        (person && <Person disapear={() => personContext.setPerson(null)} />)
    );
};

export default PersonManager;