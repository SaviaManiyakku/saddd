status="";
object=""

function preload(){
video = createCapture(VIDEO);
video.hide();

canvas = createCanvas(380,400);
canvas.center();
}

function setup(){
canvas = createCanvas(480,530);
canvas.center();
}

function draw(){
image(video,0,0,480,530);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
document.getElementById("object").innerHTML = object;
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}
