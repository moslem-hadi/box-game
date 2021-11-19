import React, { useState, useEffect, useContext } from "react";
import { PersonContext } from "../../context/PersonContext";
import Box from './Box';

const PersonManager = () => {


    const personContext = useContext(PersonContext)

    const boxes = [
        {
            id: 1,
            race: 1,
            title: "Thai"
        },
        {
            id: 2,
            race: 2,
            title: "Japanese"
        },
        {
            id: 3,
            race: 3,
            title: "Chinese"
        },
        {
            id: 4,
            race: 4,
            title: "Korean"
        }
    ]

    return (


        <div className="boxes">
            {(boxes.map(b => (<Box box={b} key={b.id} />)
            ))
            }
        </div>

    );
};

export default PersonManager;

