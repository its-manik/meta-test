import React from "react";
import MetaDecoder from "../Components/MetaDecoder";

const About = () => {
  return (
    <>
      <MetaDecoder
        title="About Page"
        desc="About page description"
        image="https://i.ibb.co/QDhXs8h/conference.png"
      />
      <h1 className="text-4xl font-semibold text-center mt-10">About</h1>
    </>
  );
};

export default About;
