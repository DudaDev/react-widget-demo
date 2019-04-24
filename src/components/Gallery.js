import React, { useState } from "react";
import styles from "./Gallery.module.css";
import { getImageSrc, camelize } from "../service";
import Image from "./Image";
import Flex from "./Flex";

const Gallery = ({ theme, bw }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = new Array(5)
    .fill(null)
    .map((el, idx) => getImageSrc({ bw, theme, idx }));

  const renderImage = (src, idx) => {
    return (
      <Image
        onClick={() => setCurrentImage(idx)}
        key={src}
        src={src}
        className={styles.image}
      />
    );
  };

  return (
    <React.Fragment>
      <h3>{`Gallery name: ${camelize(theme)}`}</h3>
      <div className={styles.container}>
        <Flex>
          <Flex className={styles.all} column>
            {images.map(renderImage)}
          </Flex>
          <Flex className={styles.single}>
            {renderImage(images[currentImage])}
          </Flex>
        </Flex>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
