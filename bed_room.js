img = "";
Status = "";
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectIdentifier = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("bed_room_status").innerHTML = "Status : Identifying Object";
}
function preload(){
    img = loadImage("bedroom.jpg");
}

function draw(){
    image(img, 0, 0, 640, 420);
    if(Status == true)
    {
        document.getElementById("bed_room_object_identified").innerHTML = "There is 1 big object identified";
        fill("red");
        text("bed", 170, 225);
        noFill();
        stroke("black");
        rect(165, 210, 300, 200);
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
    document.getElementById("bed_room_status").innerHTML = "Status : Identified Object";
    Status = true;
}