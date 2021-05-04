const canvas = document.querySelector('.canvas');
var boxes;
var box;

function changeColor() {
    // this.style.backgroundColor = "#fff";
    var r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function populateCanvas(columns, rows){
    // Force colums and rows to default to 16, if the value provided is not a number, or it is greater then 100
    columns = (!Number.isNaN(columns) && columns <= 100) ? columns:16;
    rows = (!Number.isNaN(rows) && rows <= 100) ? rows:16;

    canvas.style.gridTemplateColumns = `repeat(${columns}, 50px)`;

    for (var i = 1; i <= columns * rows; i++){
        box = document.createElement('div');
        box.className = "box " + i;
        canvas.appendChild(box);
    }

    boxes = document.querySelectorAll('.box');
    boxes.forEach(element => element.addEventListener('mouseover',changeColor));
}

function resetCanvas(){
    canvas.innerHTML = "";
    var canvasColumns = parseInt(prompt("How many squares per column?"));
    var canvasRows = parseInt(prompt("How many squares per row?"));
    populateCanvas(canvasColumns, canvasRows);
}

populateCanvas();
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetCanvas);

