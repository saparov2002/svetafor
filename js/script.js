let svetofor = document.getElementById('svetofor');

const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');

function switchLightToRed() {
  redLight.classList.add('active');
  yellowLight.classList.remove('active');
  greenLight.classList.remove('active');
}

function switchToYellow() {
  redLight.classList.remove('active');
  yellowLight.classList.add('active');
  greenLight.classList.remove('active');
}

function switchToGreen() {
  redLight.classList.remove('active');
  yellowLight.classList.remove('active');
  greenLight.classList.add('active');
}

setInterval(function() {
  switchLightToRed();
  setTimeout(switchToYellow, 2000); 
  setTimeout(switchToGreen, 4000); 
}, 6000);






