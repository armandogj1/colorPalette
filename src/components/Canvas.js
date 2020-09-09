import React, { useState, useEffect, useCallback } from "react";
import Sketch from "react-p5";

let img;
const Canvas = ({colors}) => {
    const [imgColors, setColors] = useState(colors);
    const [canvas, setCanvas] = useState();

  useEffect(() => {
    setColors(colors);
  }, [colors]);

  useEffect(() => {
    const setup = (p5, canvasParentRef) => {
      // use parent to render the canvas in this ref
      // (without that p5 will render the canvas outside of your component)
      console.log(p5.color(colors[colors.length - 1]));
      p5.createCanvas(500, 500).parent(canvasParentRef);
      img = p5.createImage(500, 500);
      img.loadPixels();

      for (let x = 0; x < img.width; x++) {
        const pixel = imgColors[Math.floor(Math.random() * imgColors.length)];
        const newColor = p5.color(...pixel);
        for (let y = 0; y < img.height; y++) {
          // let a = p5.map(y, 0, img.height, 255, 0);
          img.set(x, y, newColor);
        }
      }
      img.updatePixels();
    };

    const draw = (p5) => {
        p5.background(0);
        p5.image(img, 0, 0);
    };

    setCanvas(<Sketch setup={setup} draw={draw} />);

  }, []);

    // let img;
    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        console.log(p5.color(colors[colors.length - 1]));
        p5.createCanvas(500, 500).parent(canvasParentRef);
        img = p5.createImage(500, 500);
        img.loadPixels();

        for (let x = 0; x < img.width; x++) {
          const pixel = imgColors[Math.floor(Math.random() * imgColors.length)];
          const newColor = p5.color(...pixel);
          for (let y = 0; y < img.height; y++) {
            // let a = p5.map(y, 0, img.height, 255, 0);
            img.set(x, y, newColor);
          }
        }
        img.updatePixels();
    };

    const draw = (p5) => {
        p5.background(0);
        p5.image(img, 0, 0);
    };

  return <Sketch setup={setup} draw={draw} />;
  // return canvas;
};

export default Canvas;