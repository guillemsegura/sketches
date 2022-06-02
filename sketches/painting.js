const canvasSketch = require("canvas-sketch");

const seed = Math.random();

const settings = {
  dimensions: [1000, 500],
  suffix: seed,
};

const woodColours = [
  "#775237",
  "#E4C68C",
  "#BCA08C",
  "#C5A779",
  "#BCA08C",
  "#E4C68C",
  "#B0A7A2",
];

// Start the sketch
const sketch = () => {
  const random = (min, max) => Math.random() * (max - min) + min;

  const count = 10_000;
  const size = 90;
  const rects = Array.from(new Array(count)).map(() => {
    const y = random(-100, 1000);
    return {
      x: random(-100, 1000),
      y: y,
      width: random(0, size),
      height: random(0, size),
      fill: `hsl(${random(25, 31)}, ${random(35, 45)}%, ${random(60, 75)}%)`,
      angle: size * random(-1, 1) * 2.5,
    };
  });

  const frontcount = 2_000;
  const frontsize = 30;
  const frontrects = Array.from(new Array(frontcount)).map(() => {
    const y = random(-100, 1000);
    return {
      x: random(-100, 1000),
      y: y,
      width: random(0, frontsize),
      height: random(0, frontsize),
      fill: `hsl(${random(25, 31)}, ${random(35, 45)}%, ${random(55, 65)}%)`,
      angle: frontsize * random(-1, 1) * 2.5,
    };
  });

  return (props) => {
    const { context, width, height } = props;

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    [...rects, ...frontrects].forEach((rect) => {
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
