objects=[];
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
    if(status != ""){
      objectDetector.detect(video,gotResults);

      for(i=0; i< objects.length; i++){
         document.getElementById("status").innerHTML="Status= Objects detected";
        
         fill("#FF0000");
         percent= floor(objects[i].confidence*100);
         text(objects[i].label+ "  "+  percent + "%", objects[i].x , objects[i].y);
         noFill();
         stroke("red");
         rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
      if(objects[i].label== input_value){
         Video.stop();
         objectDetector.detect(gotResults);
         document.getElementById("objects_status").innerHTML= input_value + " Found";
         speech_synth= window.speechSynthesis;
         speech_utterance = new SpeechSynthesisUtterance(input_value+ " Found");
         speech_synth.speak(speech_utterance + "Found");
      }
      else{
         document.getElementById("objects_status").innerHTML= input_value + "Not found";
      }
    }
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
 function gotResults(error, results) {
   if(error){
    console.log(error);
   }
   console.log(results);
   objects=results;
 }
  