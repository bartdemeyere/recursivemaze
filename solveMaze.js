function SolveMaze(){


	if(!mazeSolved){

		if(!currentCell){

			init_points()

			currentCell = startcell 
			currentCell.visited = true

		}

		var nextCell = GetAdjacentCells(currentCell.row , currentCell.col)

		if(nextCell){

			stack.push(currentCell)
			nextCell.visited = true
			currentCell = nextCell
		

		}else{

			if(stack.length > 0){

				currentCell = stack.pop()
			}

		}

		if(nextCell === endcell){

			console.log("maze solved")

			stack.push(nextCell)

			stack.forEach(cell => {

				cell.color = "dodgerblue"
			})

			mazeSolved = true
			return

		}else{

			setTimeout(SolveMaze,5)

		}

	}

		
}

function GetAdjacentCells(row , col){

	var adjacentcells = []

	//check top
	if(GetCell(row-1,col)){

		if(!GetCell(row-1,col).iswall && !GetCell(row-1,col).visited){

			adjacentcells.push(GetCell(row-1,col))
		}
	}

	//check bottom
	if(GetCell(row+1,col)){

		if(!GetCell(row+1,col).iswall && !GetCell(row+1,col).visited){

			adjacentcells.push(GetCell(row+1,col))
		}
	}

	//check left
	if(GetCell(row,col-1)){

		if(!GetCell(row,col-1).iswall && !GetCell(row,col-1).visited){

			adjacentcells.push(GetCell(row,col-1))
		}
	}

	//check right
	if(GetCell(row,col+1)){

		if(!GetCell(row,col+1).iswall && !GetCell(row,col+1).visited){

			adjacentcells.push(GetCell(row,col+1))
		}
	}

	return adjacentcells[Math.floor(Math.random() * adjacentcells.length)]
}

