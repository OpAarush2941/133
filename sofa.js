img = "";
Status = "";
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectIdentifier = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Sofa_status").innerHTML = "Status : Identifying Object";
}
function preload(){
    img = loadImage("sofa.jpg");
}

function draw(){
    image(img, 0, 0, 640, 500);
    if(Status == true)
    {
        document.getElementById("Sofa_object_identified").innerHTML = "There is 3 big objects identified";
        fill("red");
        text("Couch", 60, 120);
        noFill();
        stroke("red");
        rect(45, 105, 535, 220);
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
    document.getElementById("Sofa_status").innerHTML = "Status : Identified Object";
    Status = true;
}