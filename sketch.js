let canvasWidth = 800;
let canvasHeight = 800;
let ellipseRadius = 10;
let rotationFactor = 0;
let rotationSpeedSlider;
let rotationFactorP;
let rotationFactorInput;
let submitButton;
let stopButton;

function setup() {
  angleMode(DEGREES);

  createCanvas(canvasWidth, canvasHeight);
  createDiv('');
  createSpan('Rotation factor: ');
  rotationFactorSpan = createSpan('<b>0</b>');
  createDiv('');
  createSpan('Rotation speed:');
  rotationSpeedSlider = createSlider(-0.000001, 0.000001, 0, 0.00000001);
  rotationSpeedSlider.style('width', '500px');
  stopButton = createButton('Stop');
  stopButton.mousePressed(resetSpeed);
  createDiv('');
  rotationFactorInput = createInput();
  submitButton = createButton('Set Factor');
  submitButton.mousePressed(update);
  createP('<i>Factor values greater than or equal to 1 are set to 0.</i>');
}

function resetSpeed() {
  rotationSpeedSlider.value(0);
}

function update() {
  resetSpeed();
  rotationFactor = Number(rotationFactorInput.value());
}

function draw() {
  background(0);
  translate(canvasWidth / 2, canvasHeight / 2);
  fill(color(255, 255, 0));

  let speed = rotationSpeedSlider.value();

  for (let i = 0; i < 300; i++) {
    rotationFactor += speed;
    if (rotationFactor >= 1 || rotationFactor <= -1) {
      rotationFactor = 0;
    }
    rotationFactorSpan.html('<b>' + rotationFactor + '</b>');
    rotate(rotationFactor * 360);
    ellipse(i, 0, ellipseRadius, ellipseRadius);
  }
}
