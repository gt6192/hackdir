var canvas = document.getElementById("draw");
var canvasBoard = document.getElementById("board");

var ctx = canvas.getContext("2d");
resize();

// resize canvas when window is resized
function resize() {
  ctx.canvas.width = canvasBoard.offsetWidth;
  ctx.canvas.height = canvasBoard.offsetHeight;
}

// initialize position as 0,0
var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {
    if(e.type == 'mousedown' || e.type == 'mouseenter' || e.type == 'mousemove')
    {
        pos.x = e.clientX;
        pos.y = e.clientY;
    }
    else if(e.type == 'toushstart' || e.type == 'touchend' || e.type == 'touchmove')
    {
        pos.x = e.touches[0].clientX;
        pos.y = e.touches[0].clientY;
    }
}

function draw(e) {
    e.preventDefault();
  if (e.buttons !== 1) return; // if mouse is not clicked, do not go further

  var color = '#000000';

  ctx.beginPath(); // begin the drawing path

  ctx.lineWidth = 10; // width of line
  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = color; // hex color of line

  if(e.type == 'mousemove')
    {
        ctx.moveTo(pos.x, pos.y); // from position
        setPosition(e);
        ctx.lineTo(pos.x, pos.y); // to position
        ctx.stroke(); // draw it!
    }
    else if(e.type == 'toushmove')
    {
        ctx.moveTo(pos.x, pos.y); // from position
        setPosition(e);
       ctx.lineTo(pos.x, pos.y); // to position
       ctx.stroke(); // draw it!
    }
}


// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);

// add event listeners to trigger on different mouse events
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

document.addEventListener("touchenter", setPosition);
document.addEventListener("touchend", setPosition);
canvas.addEventListener("touchmove", function (e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    draw(mouseEvent);
  }, false);
  