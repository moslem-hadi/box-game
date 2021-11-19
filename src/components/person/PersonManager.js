import React, { useState, useEffect, useContext } from "react";
import Person from "./Person";
import { PersonContext } from "../../context/PersonContext";

const PersonManager = () => {


    const personContext = useContext(PersonContext)

    const person = personContext.person;

    const [totalTries, setTotalTries] = useState(0);
    const limit = 10;


    useEffect(() => {
        if (person == null && totalTries < limit) {
            // var p = people[totalTries]
            // personContext.setPerson(p);
            personContext.newPerson();
            setTotalTries(totalTries + 1);
        }

        //eslint-disable-next-line
    }, [person]);
    const disapear = () => {
        personContext.setPerson(null);
    }
    return (
        (person && <Person disapear={disapear} />)
    );
};

export default PersonManager;