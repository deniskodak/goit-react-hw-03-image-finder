import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import { Ul } from "./styled";

const ImageGallery = ({ images, getLargeImg }) => (
  <Ul>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        largeImg={largeImageURL}
        getLargeImg={getLargeImg}
      />
    ))}
  </Ul>
);

export default ImageGallery;
