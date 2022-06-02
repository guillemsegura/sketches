const canvasSketch = require("canvas-sketch");

const seed = Math.random();

const settings = {
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

  return (props) => {
    const { context, width, height } = props;

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    rects.forEach((rect) => {
      context.beginPath();
      context.fillStyle = rect.fill;
      context.moveTo(rect.x, rect.y);
      context.lineTo(rect.x + rect.angle, rect.y + rect.width);
      context.lineTo(rect.x + rect.height + rect.angle, rect.y + rect.width);
      context.lineTo(rect.x + rect.height, rect.y);
      context.lineTo(rect.x, rect.y);
      context.fill();
    });
  };
};

// Start the sketch with parameters
canvasSketch(sketch, settings);
