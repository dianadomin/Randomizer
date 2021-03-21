//FortuneTeller
let fortunes = [{
  name: "You will have a good day tomorrow",
}, {
  name: "A surprise encounter will happen soon",
}, {
  name: "Something good is coming your way",
}, {
  name: "You are going to pass your classes",
}, {
  name: "You will be hungry again in 3 hours",
}, {
  name: "What's coming is better than what's gone",
}, {
  name: "The pain you feel now will soon pass",
}, {
  name: "You will reconnect with someone soon",
}, {
  name: "You will get a good nights rest",
}, {
  name: "Rememeber to treat yourself",
}, {
  name: "Today 7 is your lucky number",
}, {
  name: "Avoid procrastinating pending errands"
}, {
  name: "You are on the right life path"
}, {
  name: "A new hobby will bring you joy"
}, {
  name: "Always be true to yourself"
}, {
  name: "Accept what you cannot change"
}];

let randomIndex;
let animating = false;
let button;
let cnv;

function setup() {
  cnv = createCanvas(450, 200);
  cnv.parent("canvasDiv");
  background(148, 138, 153);
  textSize(20);



  textFont("Papyrus");
  text("Focus your energy and click the button!", 60, 105)
  //button = createButton("click to randomize");
  button = select('#randButton')
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");


}

function draw() {

  if (animating == true) {
    ellipse(random(width), random(height), random(30, 150));
    fill(0);



  }


}

function randomizer() {
  animating = false;
  if (fortunes[0]) {
    //displays ranm
    background(random(200, 255));
    randomIndex = int(random(fortunes.length));
    textFont("Papyrus");
    //textAlign(CENTER);
    text(fortunes[randomIndex].name, 80, 105);
    fortunes.splice(randomIndex, 1);
  } else {
    background(255, 253, 217);
    text("The future is yours to write!", 110, 0)
  }

}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}
