import React, { useState, useEffect, useCallback } from "react";
import Sketch from "react-p5";

let img;
const Canvas = ({colors}) => {
  const [imgColors, setColors] = useState(colors);

  useEffect(() => {
    setColors(colors);
  }, [colors]);


  // let img;
  let setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    // console.log(p5.color(colors[colors.length - 1]));
    p5.createCanvas(475, 475).parent(canvasParentRef);
    img = p5.createImage(475, 475);
    img.loadPixels();

    for (let x = 0; x < img.width; x++) {
      const pixel = colors[Math.floor(Math.random() * colors.length)];
      const newColor = p5.color(...pixel);
      for (let y = 0; y < img.height; y++) {
        // let a = p5.map(y, 0, img.height, 255, 0);
        img.set(x, y, newColor);
      }
    }
    console.log('triggered');
    img.updatePixels();
  };

  let draw = (p5) => {
    p5.background(0);
    p5.image(img, 0, 0);
  };

  return (
    <div key={colors.length}>
      <Sketch setup={setup} draw={draw} />
    </div>
    );
};

export default Canvas;