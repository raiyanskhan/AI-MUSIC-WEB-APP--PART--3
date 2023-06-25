leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

body
{
  background-size: cover;	
}
function preload()
{
   song = loadSound("music.mp3");
   song = loadSound("music2.mp3"); 
}
function draw()
{
    image(video, 0, 0, 600, 500);
    fill("red");
    stroke("blue");
    if(scoreleftWrist > 0.2)
    {

    circle(leftWristx,leftWristy,20);
    inNumberleftwristy = Number(leftWristy);
    removeDecimals = floor(inNumberleftwristy);
    volume = removeDecimals/500;
    document.getElementById("volume").innerHTML = "volume = " + volume;
    song.setVolume(volume);
    }
}

function modelLoaded()
{
    console.log("posenet is  initialized");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreleftWrist" + scoreleftWrist);
        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log("scorerightWrist" + scorerightWrist);
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("leftWristx = " + leftWristx + "  leftWristy" + leftWristy);
        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        console.log("rightWristx = " + rightWristx + "  rightWristy" + rightWristy);
    }
}