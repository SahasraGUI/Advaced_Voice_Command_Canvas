var content = "";

screen_width = 0;
screen_height = 0;
flower = "";
speak_data = "";
to_number = "";
x = 0;
y = 0;
draw_flower = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  createCanvas(screen_width , screen_height-150);
}

function draw() {
  if(draw_flower == "set") {
    for(var i = 1; i <= to_number; i++) {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(flower , x , y , 50 , 50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload() {
  flower = loadImage('flower.png');
  to_number = Number(content);
  if(Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Started Drawing Apple"; 
    draw_flower = "set";
  }
  else {
    document.getElementById("status").innerHTML = "The speech has not recognised the Number"
  }
}