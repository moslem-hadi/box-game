import React from "react"; 
import Box from '../components/box/Box';
import Person from "../components/person/Person";

const HomePage = () => {
  return (
    <>
    <Person pic="https://res.cloudinary.com/twenty20/private_images/t_standard-fit/photosp/e222529f-2656-4c52-8a33-d7c685d8a17d/stock-photo-portrait-teenager-asia-young-man-face-man-person-young-thai-e222529f-2656-4c52-8a33-d7c685d8a17d.jpg"/>
    <div className="boxes">
     <Box title='Japanese'/>
     <Box title='Chinese'/>
     <Box title='Korean'/>
     <Box title='Thai'/>
    </div>
    </>
  );
};

export default HomePage;
