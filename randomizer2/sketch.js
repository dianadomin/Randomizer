//FortuneTeller
let fortunes = [{
  name: "You will have a good day tomorrow",
}, {
  name: "A surprise encounter will happen soon",
}, {
  name: "Something is good coming your way",
}, {
  name: "You are going to pass your classes",
}, {
  name: "You will be hungry again in 3 hours",
}, {
  name: "Wear your favorite color today to avoid bad luck",
}, {
  name: "The pain you feel now will soon pass",
}, {
  name: "You will reconnect with someone soon",
}, {
  name: "You will get a good nights rest",
}, {
  name: "Treat yourself today",
}, {
  name: "Today 7 is your lucky number",
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(171, 144, 212);
  textSize(32);

  text("Click to get your fortune told!", 50, 50)

}

function draw() {}


function mousePressed() {
  if (fortunes[0]) {
    background(random(200, 255));
    randomIndex = int(random(fortunes.length));
    text(fortunes[randomIndex].name, 50, 50);
    fortunes.splice(randomIndex, 1);
  } else {
    background(255, 253, 217);
    text("The future is yours to write!", 50, 50)
  }
}
