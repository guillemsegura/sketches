const canvasSketch = require("canvas-sketch");

// reference: https://www.generativehut.com/post/a-step-by-step-guide-to-making-art-with-observable

const seed = Math.random();

const settings = {
  dimensions: [1000, 1000],
  suffix: seed,
};

// Start the sketch
const sketch = () => {
  // const random = (min, max) => Math.random() * (max - min) + min;

  // const count = 1000;
  // const size = 100;
  // let data = Array.from(new Array(count)).map((_, i) => {
  //   const index = size + i; // (settings.dimensions[1] - size * 2);
  //   const x = Math.sin(index * 0.04) * 300 + settings.dimensions[0] / 2;
  //   const y = Math.cos(index * 0.1) * 140 + settings.dimensions[1] / 2;
  //   return {
  //     x: x, // + i / 10,
  //     y: y, // + 200,
  //     fill: `rgba(0, 0, 0, 0.1)`,
  //     size: y * 0.2,
  //   };
  // });

  const count = 1000;
  const size = 100;
  let data = Array.from(new Array(count)).map((_, i) => {
    const index = size + i; // (settings.dimensions[1] - size * 2);
    const x = Math.sin(index * 1) * 300 + settings.dimensions[0] / 2;
    const y = Math.cos(index * 1) * 140 + settings.dimensions[1] / 2;
    return {
      x: x, // + i / 10,
      y: y + 200,
      fill: `rgba(0, 0, 0, 0.1)`,
      size: y * 0.2,
    };
  });

  data = data.concat(
    Array.from(new Array(count)).map((_, i) => {
      const index = size + i; // (settings.dimensions[1] - size * 2);
      const x = Math.sin(index * 1) * 300 * 0.5 + settings.dimensions[0] / 2;
      const y = Math.cos(index * 1) * 90 * 0.5 + settings.dimensions[1] / 2;
      return {
        x: x, // + i / 10,
        y: y - 275,
        fill: `rgba(0, 0, 0, 0.1)`,
        size: y * 0.2,
      };
    })
  );

  data = data.concat(
    Array.from(new Array(count)).map((_, i) => {
      const index = size + i; // (settings.dimensions[1] - size * 2);
      const x = Math.sin(index * 1) * 300 * 0.75 + settings.dimensions[0] / 2;
      const y = Math.cos(index * 1) * 100 * 0.75 + settings.dimensions[1] / 2;
      return {
        x: x, // + i / 10,
        y: y,
        fill: `rgba(0, 0, 0, 0.1)`,
        size: y * 0.2,
      };
    })
  );

  console.log(data);

  return (props) => {
    const { context } = props;

    context.fillStyle = "white";

    data.forEach((datum) => {
      context.beginPath();
      context.arc(datum.x, datum.y, datum.size, 0, Math.PI * 2);
      context.strokeStyle = datum.fill;
      context.moveTo(datum.x, datum.y);
      context.stroke();
    });
  };
};

// Start the sketch with parameters
canvasSketch(sketch, settings);
