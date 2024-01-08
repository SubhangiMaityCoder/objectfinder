
status="";
function preload() {
    
}
 function setup() {
    canvas= createCanvas(380, 280);
    canvas.center();
    Video= createCapture(VIDEO);
    Video.size(280,280);
    Video.hide();
 }
 function draw() {
    image(Video, 0,0,280,280);
 }
 function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting objects";
    input_value= document.getElementById("search").value;
 }

 function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    
 }