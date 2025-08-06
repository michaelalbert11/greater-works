import React, { useEffect, useState } from "react";
import Carousel from "../../components/carousel/carousel";

const Sample = () => {
  const images = [
    "https://picsum.photos/id/10/2500/1667",
    "https://picsum.photos/id/11/2500/1667",
    "https://picsum.photos/id/12/2500/1667",
    "https://picsum.photos/id/13/2500/1667",
    "https://picsum.photos/id/14/2500/1667",
    "https://picsum.photos/id/15/2500/1667",
    "https://picsum.photos/id/16/2500/1667",
    "https://picsum.photos/id/17/2500/1667",
    "https://picsum.photos/id/18/2500/1667",
    "https://picsum.photos/id/19/2500/1667",
  ];

  return (
    <div>
      <h1>Carousel</h1>
      <Carousel itemCount={images.length}>
        {images.map((item, i) => {
          return <img src={item} key={i} alt="" />;
        })}
      </Carousel>
    </div>
  );
};

export default Sample;
