import React from "react";
import { Helmet } from "react-helmet";

const MetaDecoder = ({ title, desc, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default MetaDecoder;
