nose_x = 0
nose_y = 0
function preload(){











}


function setup(){

canvas = createCanvas(300,300);
canvas.center();


video = createCapture(VIDEO)
video.hide()

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotPoses);

}



function modelLoaded(){

console.log("PoseNet has loaded, app ready to work");

}

function gotPoses(results){
if(results.length>0){
console.log(results);
console.log(results[0].pose.nose.x);
console.log(results[0].pose.nose.y);
nose_x = results[0].pose.nose.x;
nose_y = results[0].pose.nose.y;
}
}


function takeSnapshot(){
save("selfie.png")

}



function draw(){

image(video,0,0,300,300);



}












