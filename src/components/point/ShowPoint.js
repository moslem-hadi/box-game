import React, { useState, useEffect, useContext } from "react";
import { PersonContext } from "../../context/PersonContext";

const ShowPoint = () => {
    const personContext = useContext(PersonContext)
    return (
        (personContext.gameOver && <div className="score">
            <h3>Your Score:</h3>
            <h1 style={{ textAlign: "center" }}>{personContext.point}</h1>
        </div>
        )
    );
};

export default ShowPoint;