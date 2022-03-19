img = "";
Status = "";
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectIdentifier = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("almirah_status").innerHTML = "Status : Identifying Object";
}
function preload(){
    img = loadImage("godrejAlmirah1.jpg");
}

function draw(){
    image(img, 0, 0, 640, 500);
    if(Status == true)
    {
        document.getElementById("almirah_object_identified").innerHTML = "There is 1 big object identified";
        fill("red");
        text("flower pot", 445, 280);
        noFill();
        stroke("red");
        rect(435, 265, 130, 150);
    }
}

function modelLoaded(){
    console.log("model is loaded");
    objectIdentifier.detect(img, gotResults);
}
function gotResults(error , Results){
    if(error){
        console.error(error);
    }
    console.log(Results);
    objects = Results;
    document.getElementById("almirah_status").innerHTML = "Status : Identified Object";
    Status = true;
}