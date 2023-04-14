import React from "react";

type ImageProps = {
    src: string;
    altText: string;
};

const Image = ({src, altText}: ImageProps) => {

  return  <img
    className="item__image"
    src={src}
    alt={altText}
    width="350"
    height="200"
  />
};

export default Image;