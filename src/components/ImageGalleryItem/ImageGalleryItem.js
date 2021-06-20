import React from "react";
import { Li, Img } from "./styled";

const ImageGalleryItem = ({ src, largeImg }) => {
  return (
    <Li>
      <Img src={src} alt="" data-src={largeImg} />
    </Li>
  );
};

export default ImageGalleryItem;
