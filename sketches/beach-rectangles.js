// Import the library
const canvasSketch = require("canvas-sketch");

const seed = Math.random();

// Specify some output parameters
const settings = {
  // The [ width, height ] of the artwork in pixels
  dimensions: [1000, 1000],
  suffix: seed,
};

// Start the sketch
const sketch = () => {
  const random = (min, max) => Math.random() * (max - min) + min;

  const count = 100000;
  const size = 50;
  const rects = Array.from(new Array(count)).map(() => {
    const y = random(0, 1000);
    return {
      x: random(-100, 1000),
      y: y,
      width: random(0, size),
      height: random(0, size),
      fill: `rgba(${random(-200 + (y % 1000), 255)},${random(
        200,
        255
      )},${random(150, 255)},${random(0, 0.7)})`,
      angle: size * 2.5,
    };
  });

  const frontcount = 100;
  const frontsize = 75;
  const frontrects = Array.from(new Array(frontcount)).map(() => {
    return {
      x: random(100, 400),
      y: random(-10, 500),
      width: random(0, frontsize),
      height: random(0, frontsize),
      fill: `rgba(${random(155, 250)},${random(0, 100)},${random(
        150,
        255
      )},${random(0, 0.7)})`,
      angle: -frontsize,
    };
  });

  return (props) => {
    // Destructure what we need from props
    const { context, width, height } = props;

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    rects.forEach((rect) => {
      context.beginPath();
      context.fillStyle = rect.fill;
      // context.lineWidth = 2;
      context.moveTo(rect.x, rect.y);
      context.lineTo(rect.x + rect.angle, rect.y + rect.width);
      context.lineTo(rect.x + rect.height + rect.angle, rect.y + rect.width);
      context.lineTo(rect.x + rect.height, rect.y);
      context.lineTo(rect.x, rect.y);
      context.fill();
    });

    // frontrects.forEach((rect) => {
    //   context.beginPath();
    //   context.fillStyle = rect.fill;
    //   // context.lineWidth = 2;
    //   context.moveTo(rect.x, rect.y);
    //   context.lineTo(rect.x + rect.angle, rect.y + rect.width);
    //   context.lineTo(rect.x + rect.height + rect.angle, rect.y + rect.width);
    //   context.lineTo(rect.x + rect.height, rect.y);
    //   context.lineTo(rect.x, rect.y);
    //   context.fill();
    // });

    // Fill the canvas with pink
    // context.fillStyle = "pink";
    // context.fillRect(0, 0, 5, height);

    // Now draw a white rectangle in the center
    // for (let i = 0; i < 500; i += 30) {
    //   context.strokeStyle = "white";
    //   context.lineWidth = 5;
    //   context.strokeRect(width / 2 - i / 2, height / 2 - i / 2, i, i);
    // }
  };
};

// Start the sketch with parameters
canvasSketch(sketch, settings);
