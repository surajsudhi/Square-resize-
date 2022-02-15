var leftwristx,rightwristx,nosex,nosey,difference
var r,g,b
function draw(){
background(r,g,b)
if(frameCount % 60 == 0){
    r=Math.round(Math.random()*256)
    g=Math.round(Math.random()*256)
    b=Math.round(Math.random()*256)    
}

fill("wheat");
stroke("yellowgreen");
square(nosex,nosey,difference)
}
function setup(){
canvas=createCanvas(500, 450);
video = createCapture(VIDEO);
video.size(580, 500)
canvas.position(590, 150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', GotResult)
}
function modelLoaded(){
console.log("PoseNet is prepared")    
}
function GotResult(result){
if(result.length > 0){
console.log(result);
nosex = result[0].pose.nose.x;
nosey = result[0].pose.nose.y;
leftwristx = result[0].pose.leftWrist.x;
rightwristx = result[0].pose.rightWrist.x;
difference = floor(leftwristx - rightwristx);
document.getElementById("square_size").innerHTML = "Square Size - "+difference;
}
else{
console.error("error");    
}
}
