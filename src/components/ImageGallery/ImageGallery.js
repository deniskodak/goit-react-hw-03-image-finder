import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import { Ul } from "./styled";

const ImageGallery = ({ images }) => (
  <Ul>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem key={id} src={webformatURL} largeImg={largeImageURL} />
    ))}
  </Ul>
);

export default ImageGallery;
