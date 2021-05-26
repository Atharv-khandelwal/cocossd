function setup(){
    canvas=createCanvas(380,380)
    canvas.position(400,200)
    video=createCapture(VIDEO)
    video.hide()

}

function draw(){
    image(video,0,0,380,380)
}

function start(){
    objectDetector=ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML="Status: Detecting Objects"
}

function modelLoaded(){
    window.alert("Model Is Loaded")
    console.log('Model Loaded')
    status=true
}