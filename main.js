img = "";
object = [];
sstatus = "";

function preload() {
    img = loadImage("dog_cat.jpg");

}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectdetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status:Dedecting Object";
}

function modelloaded() {
    console.log("modelloaded successfully");
    objectdetector.detect(img, gotresults);
    sstatus = true;

}

function gotresults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;

}

function draw() {
    image(img, 0, 0, 640, 420);
    if (sstatus == true) {
        for (var i = 0; i < object.lenght; i++) {
            fill("#ff0000");
            noFill();
            stroke("#ff0000");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }

    }

}