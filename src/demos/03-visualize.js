// Exercise: Apply a procedural to an artwork

import Color from "https://colorjs.io/dist/color.js";
import * as random from "../lib/random.js";
import { visualize } from "../lib/test.js";
import sketch from "../lib/sketches/grid.js";

// create our color palette
const palette = [];

// choose random hue
const hue = random.range(0, 360);

// add some colors
palette.push("#000");
palette.push("#fff");
palette.push(new Color("lch", [50, 50, hue]));
palette.push(new Color("lch", [20, 150, hue + 45]));

// choose a fixed background
const background = new Color("lch", [90, 5, 60]);

visualize(palette, sketch, {
  dimensions: [2048, 2048],
  data: {
    background,
    columns: 4,
    rows: 4,
  },
});