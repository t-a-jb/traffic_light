/* 
  Use Javascript to get the traffic light working correctly 
*/ 

// create a click event for each button

document.getElementById('stopButton').onclick = redLightOn;

document.getElementById('slowButton').onclick = yellowLightOn;

document.getElementById('goButton').onclick = greenLightOn;

// function that turns lights off - makes background colour black 

function lightOff () { 
  document.getElementById('stopLight').style.backgroundColor = 'black';
  
  document.getElementById('slowLight').style.backgroundColor = 'black';
  
  document.getElementById('goLight').style.backgroundColor = 'black'; 
  
}

// create function that turns all lights off and then turns the light on that was clicked

function redLightOn () {
  lightOff();
  document.getElementById('stopLight').style.backgroundColor = 'red';
  
}

function yellowLightOn () {
  lightOff();
  document.getElementById('slowLight').style.backgroundColor = 'yellow';
  
}

function greenLightOn () {
  lightOff();
  document.getElementById('goLight').style.backgroundColor = 'green';
  
}