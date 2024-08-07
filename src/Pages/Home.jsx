import React from "react";
import MetaDecoder from "../Components/MetaDecoder";

const Home = () => {
  return (
    <>
      <MetaDecoder
        title="Home Page"
        desc="Home page description"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWG1mrz3_NQkpe-iyGg3qkRgjwWziFBEdyuQ&s"
      />
      <h1 className="text-4xl font-semiboFld text-center mt-10">Home</h1>
    </>
  );
};

export default Home;
