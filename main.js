objects=[]
objects_Name=""
function setup(){
    canvas=createCanvas(380,380)
    canvas.position(400,200)
    video=createCapture(VIDEO)
    video.hide()

}
function draw(){
    image(video,0,0,380,380)
    if(status!=""){
    objectDetector.detect(video,gotResult)
    for(i=0; i<objects.length;i++){
if(objects[i].label==objects_Name){
    video.stop()
    document.getElementById("status").innerHTML=objects_Name+" Found"
    var synth=window.speechSynthesis;
    speak_data=objects_Name+"Found"
    var utterThis=new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis)
}

document.getElementById("noo").innerHTML="No. Of Objects Are:"+objects.length

fill("#FF0000")
percent=floor(objects[i].confidence*100)
text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15)
noFill()
stroke("aliceblue")
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)

    }
    }
}

function start(){
    objectDetector=ml5.objectDetector("cocossd", modelLoaded)
    
   objects_Name= document.getElementById("inp").value
}

function modelLoaded(){
    window.alert("Model Is Loaded")
    console.log('Model Loaded')
    status=true
}

function gotResult(error,result){
    if(error){
        console.log(error)
    
    }
    console.log(result)
    objects=result
    }