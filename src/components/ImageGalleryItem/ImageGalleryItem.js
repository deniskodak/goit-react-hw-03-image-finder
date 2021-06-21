import React from "react";
import { Li, Img } from "./styled";

const ImageGalleryItem = ({ src, largeImg, getLargeImg }) => {
  return (
    <Li>
      <Img src={src} alt="" data-src={largeImg} onClick={getLargeImg} />
    </Li>
  );
};

export default ImageGalleryItem;
