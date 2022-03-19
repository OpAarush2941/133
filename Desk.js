img = "";
Status = "";
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectIdentifier = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Desk_status").innerHTML = "Status : Identifying Object";
}
function preload(){
    img = loadImage("desk.jpg");
}

function draw(){
    image(img, 0, 0, 640, 500);
    if(Status == true)
    {
        document.getElementById("Desk_object_identified").innerHTML = "There is 3 big objects identified";
        fill("red");
        text("book", 440, 320);
        noFill();
        stroke("red");
        rect(425, 305, 70, 90);

        fill("red")
        text("book", 435, 210);
        noFill();
        stroke("red");
        rect(425, 195, 70, 90);
        
        fill("red");
        text("Laptop", 85, 125);
        noFill();
        stroke("red");
        rect(75, 105, 150, 90);
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
    document.getElementById("Desk_status").innerHTML = "Status : Identified Object";
    Status = true;
}