var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

//variables for drawing grid
var grid = []
var cols = 41;
var rows = 41
var size = 20
var temp_row = 0;
var temp_col = 1;

//variables for solving maze
var startcell = undefined
var endcell = undefined
var currentCell = undefined
var stack = []
var mazeSolved = false;


canvas.style.width = size * cols
canvas.style.height = size * rows

canvas.width = size * cols * devicePixelRatio
canvas.height = size * rows * devicePixelRatio

c.scale(2,2)

CreateGrid()

DrawCanvas()

function GetCell(row , col){

	for(var i = 0 ; i < grid.length ; i++){

		if(grid[i].row === row && grid[i].col === col){

			return grid[i]
		}
	}
}

function CreateGrid(){

	for(var i = 0 ; i < rows ; i++){

		for(var j = 0 ; j < cols ; j++){

			grid.push(new Cell(i , j , size/2 + j * size , size/2 + i * size , size))
		}
	}
}


function init_points(){

	do{

		startcell = grid[Math.floor(Math.random() * grid.length)]

	}while(startcell.row % 2 === 0 || startcell.col % 2 === 0)

	do{

		endcell = grid[Math.floor(Math.random() * grid.length)]

	}while(endcell.row % 2 === 0 || endcell.col % 2 === 0)

	
	
}

function DrawCanvas(){

	c.clearRect(0,0,canvas.width,canvas.height)
	grid.forEach(cell => { cell.draw() })

	if(startcell){

		c.save()
		c.translate(startcell.x , startcell.y)
		c.beginPath()
		c.fillStyle = "lime"
		c.rect(-size/2 , -size/2 , size , size)
		c.fill()
		c.closePath()
		c.restore()
	}

	if(endcell){

		c.save()
		c.translate(endcell.x , endcell.y)
		c.beginPath()
		c.fillStyle = "red"
		c.rect(-size/2 , -size/2 , size , size)
		c.fill()
		c.closePath()
		c.restore()
	}

	requestAnimationFrame(DrawCanvas)
}


