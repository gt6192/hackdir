let color = "black";
let strokeSize = 10;
var canvasBoard = document.getElementById("board");

const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

function changeColorAndSize(data, width) {
  color = data;
  strokeSize = width;
}

window.addEventListener("load", () => {
  //resizing
  canvas.height = canvasBoard.offsetHeight;
  canvas.width = canvasBoard.offsetWidth;

  //variables
  let painting = false;

  //functions
  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function endPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    ctx.lineWidth = strokeSize;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX - canvasBoard.getBoundingClientRect().left, e.clientY - canvasBoard.getBoundingClientRect().top);
    ctx.stroke();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvasBoard.getBoundingClientRect().left, e.clientY - canvasBoard.getBoundingClientRect().top);
  }

  function clear()
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  document.getElementById("clear").addEventListener('click', clear)

  //event listeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("touchstart", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("touchend", endPosition);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("touchmove", function (e) {
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  draw(mouseEvent);
}, false);
});