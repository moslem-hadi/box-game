import React from "react";
import PersonManager from "../components/person/PersonManager";
import PersonContextProvider from "../context/PersonContext"
import BoxManager from "../components/box/BoxManager";
import ShowPoint from "../components/point/ShowPoint"

const HomePage = () => {

  return (
    <>
      <PersonContextProvider>
        <ShowPoint />
        <PersonManager />
        <BoxManager />
      </PersonContextProvider>
    </>
  );
};

export default HomePage;
