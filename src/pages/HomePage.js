import React from "react";
import PersonManager from "../components/person/PersonManager";
import PersonContextProvider from "../context/PersonContext"
import BoxManager from "../components/box/BoxManager";

const HomePage = () => {

  return (
    <>
      <PersonContextProvider>
        <PersonManager />
        <BoxManager />
      </PersonContextProvider>
    </>
  );
};

export default HomePage;
