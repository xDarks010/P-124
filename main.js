noseX=0;
noseY=0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#ffb3da');
    
    document.getElementById("square_side".innerHTML = "Width and Height of a Square Will Be = " + difference + "px")
    
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log('PoseNet Is Inititalized!')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("NoseX =" + noseX+'Nose Y =' + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.leftWrist.x;
    difference = floor(leftWristX - rightWrist);
    
    console.log("leftWrist =" + leftWrist +'rightWrist = ' + difference +'difference =  ');

    }
}