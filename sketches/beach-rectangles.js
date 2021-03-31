// Import the library
const canvasSketch = require("canvas-sketch");

const seed = Math.random();

// Specify some output parameters
const settings = {
  // The [ width, height ] of the artwork in pixels
  dimensions: [500, 500],
  suffix: seed,
};

// Start the sketch
const sketch = () => {
  const random = (min, max) => Math.random() * (max - min) + min;

  // Generate a whole bunch of circles/arcs
  // const count = 10;
  // const circles = Array.from(new Array(count)).map(() => {
  //   const arcStart = Math.PI * 2 - random(0, (Math.PI * 2) / 3);
  //   const arcLength = random(-0.1, 0.3) * Math.PI * 2;
  //   const segmentCount = Math.floor(random(5, 200));
  //   const spread = 0.085;
  //   return {
  //     segments: Array.from(new Array(segmentCount)).map(() => random(0, 1)),
  //     arcStart,
  //     arcEnd: arcStart + arcLength,
  //     arcLength,
  //     thickness: random(0.01, 1),
  //     alpha: random(0.25, 0.5),
  //     radius: random(0.1, 0.75),
  //     x: 0.5 + random(-1, 1) * spread,
  //     y: 0.5 + random(-1, 1) * spread,
  //   };
  // });

  // return ({ context, width, height }) => {
  //   // Fill browser with solid color
  //   context.globalCompositeOperation = "source-over";
  //   context.fillStyle = "black";
  //   context.globalAlpha = 1;
  //   context.fillRect(0, 0, width, height);

  //   const side = Math.min(width, height);
  //   const globalThickness = 1.5;

  //   // Now draw each arc
  //   context.strokeStyle = "white";
  //   context.fillStyle = "white";
  //   circles.forEach((circle) => {
  //     context.beginPath();
  //     context.globalCompositeOperation = "lighter";
  //     // Instead of just drawing an arc, we will draw little dots along
  //     // the arc, somewhat randomly jittered around
  //     circle.segments.forEach((t) => {
  //       const angle = circle.arcStart + circle.arcLength * t;
  //       const radius = circle.radius * side + random(-1, 1) * 0.5;
  //       const x = circle.x * width + Math.cos(angle) * radius;
  //       const y = circle.y * height + Math.sin(angle) * radius;
  //       context.beginPath();
  //       context.arc(
  //         x,
  //         y,
  //         circle.thickness * random(0.5, 1.25) * globalThickness,
  //         0,
  //         Math.PI * 2,
  //         false
  //       );
  //       context.fill();
  //       context.globalAlpha = circle.alpha;
  //     });
  //   });
  // };

  const count = 100000;
  const size = 50;
  const rects = Array.from(new Array(count)).map(() => {
    const y = random(-100, 500);
    return {
      x: random(-100, 500),
      y: y,
      width: random(0, size),
      height: random(0, size),
      fill: `rgba(${random(y % 500, 255)},${random(200, 255)},${random(
        150,
        255
      )},${random(0, 0.7)})`,
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
