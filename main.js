noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage("https://i.postimg.cc/L5YDVNsF/efeb60-e2e6de10f4fd4f3aa974b5f9c5364c4a-mv2.webp");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 70, 40);
}

function take_snapshot(){
    save('filterimg.png');
}

function modelLoaded(){
    console.log("PoseNet is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 33;
        noseY = results[0].pose.nose.y - 10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
