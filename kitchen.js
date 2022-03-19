img = "";
Status = "";
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectIdentifier = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("kitchen_status").innerHTML = "Status : Identifying Object";
}
function preload(){
    img = loadImage("kitchen.jpg");
}

function draw(){
    image(img, 0, 0, 640, 500);
    if(Status == true)
    {
        document.getElementById("kitchen_object_identified").innerHTML = "There is 3 big objects identified";
        fill("red");
        text("chair", 445, 300);
        noFill();
        stroke("red");
        rect(435, 285, 130, 150);

        fill("red");
        text("dining table", 480, 280);
        noFill();
        stroke("red");
        rect(475, 265, 150, 170);
        
        fill("red");
        text("refrigrator", 95, 125);
        noFill();
        stroke("red");
        rect(90, 105, 150, 240);
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
    document.getElementById("kitchen_status").innerHTML = "Status : Identified Object";
    Status = true;
}