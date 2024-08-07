import React from "react";
import MetaDecoder from "../Components/MetaDecoder";

const Home = () => {
  return (
    <>
      <MetaDecoder
        title="Home Page"
        desc="Home page description"
        image="https://i.ibb.co/QDhXs8h/conference.png"
      />
      <h1 className="text-4xl font-semiboFld text-center mt-10">Home</h1>
    </>
  );
};

export default Home;
