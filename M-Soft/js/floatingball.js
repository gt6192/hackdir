var fball = document.getElementById("floating-ball");
var winX = window.innerWidth;
var winY = window.innerHeight;

// Destination Elements
var bDestinations = document.querySelectorAll(".ballDestination");
alert(bDestinations[0].getBoundingClientRect().top);
fball.style.top = bDestinations[0].getBoundingClientRect().top -20 + "px";


function gtFloatingBall()
{

}

function ballConnect(dElem)
{

}