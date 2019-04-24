import React, { useState } from "react";
import Flex from "./Flex";
import Gallery from "./Gallery";
import Image from "./Image";
import { getImageSrc, themes, camelize } from "../service";
import styles from "./GalleryList.module.css";

const [GALLERY, LIST] = ["gallery", "list"];

const GalleryList = props => {
  const [theme, setTheme] = useState();
  const [mode, setMode] = useState(LIST);

  const renderSingle = () => {
    return (
      <Flex column style={{ alignItems: "center" }}>
        <label
          onClick={() => setMode(LIST)}
          style={{ width: "100%", textAlign: "left", cursor: "pointer" }}
        >
          {`⇦ ${props.backToList}`}
        </label>
        <Gallery bw={props.bw} theme={theme} />
      </Flex>
    );
  };

  const renderMultiple = () => {
    return (
      <Flex style={{ flexWrap: "wrap" }} className={styles.container}>
        {themes.map(theme => {
          const src = getImageSrc({ bw: props.bw, theme, idx: 0 });
          return (
            <Flex className={styles.imageContainer} key={src}>
              <Image
                src={src}
                className={styles.image}
                onClick={() => {
                  setTheme(theme);
                  setMode(GALLERY);
                }}
              />
              <label className={styles.label}>{camelize(theme)}</label>
            </Flex>
          );
        })}
      </Flex>
    );
  };

  return (
    <Flex style={{ justifyContent: "center" }}>
      {mode === GALLERY ? renderSingle() : renderMultiple()}
    </Flex>
  );
};

export default GalleryList;
