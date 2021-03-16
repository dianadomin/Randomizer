//Flowers/Bouquet
let flowers = [{
    name: "Rose",
    color: "dog treat color"
  }, {
    name: "Iris",
    color: "chartrese"
  }, {
    name: "Hydrangea",
    color: "poop"
  }, {
    name: "Carnation",
    color: "rose gold"
  }, {
    name: "Peony",
    color: "coffee grind brown"
  }, {
    name: "Hyacinth",
    color: "stardust"
  }, {
    name: "Lilac",
    color: "lkfjs"
  }, {
    name: "Orchid",
    color: "sfkhekjf"
  }, {
    name: "Sunflower",
    color: "yellow"
  }, {
    name: "Lily",
    color: "Pink"
  }, {
    name: "Tulip",
    color: "Blue"
  }];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(171, 144, 212);

}

function draw() {}

function mousePressed() {
  background(random(200, 255));
  randomIndex = int(random(flowers.length));
  text(flowers[randomIndex].name, 50, 50);
}
