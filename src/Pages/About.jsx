import React from "react";
import MetaDecoder from "../Components/MetaDecoder";

const About = () => {
  return (
    <>
      <MetaDecoder
        title="About Page"
        desc="About page description"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWG1mrz3_NQkpe-iyGg3qkRgjwWziFBEdyuQ&s"
      />
      <h1 className="text-4xl font-semibold text-center mt-10">About</h1>
    </>
  );
};

export default About;
