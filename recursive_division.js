function DrawOuterWalls(){

	if(temp_col < cols - 1 && temp_row === 0){

		GetCell(temp_row,temp_col).iswall = true
		temp_col++

	}

	if(temp_col === cols - 1){

		if(temp_row < rows - 1){

			GetCell(temp_row,temp_col).iswall = true
			temp_row++

		}
	}

	if(temp_row === rows - 1){


		if(temp_col > 0){

			GetCell(temp_row,temp_col).iswall = true
			temp_col--

		}
	}

	if(temp_row > 0 && temp_col === 0){


		GetCell(temp_row,temp_col).iswall = true
		temp_row--
		
	}

	if(temp_row === 0  && temp_col === 0){

		GetCell(temp_row,temp_col).iswall = true
		divide(true , 1 , cols - 1  , 1 , rows - 1)
		return;
	}


	setTimeout(DrawOuterWalls,1)
}


function randomNumber(min, max) {

    return min + Math.floor(Math.random() * (max - min)) + 1

}

function addHorizontalWall(minX , maxX , row){


	do{

		open = randomNumber(minX,maxX)

	}while(open % 2 === 0)


	for(var i = minX ; i <= maxX ; i++){

		if(i === open){

			GetCell(row , i).iswall = false;

		}else{

			GetCell(row , i).iswall = true
		}
	}
}

function addVerticalWall(minY , maxY , col){

	do{

		open = randomNumber(minY,maxY)
		
	}while(open % 2 === 0)
	
	for(var i = minY ; i <= maxY ; i++){

		if(i === open){

			GetCell(i , col).iswall = false;

		}else{

			GetCell(i , col).iswall = true
		}
	}
}

function divide(horizontal , minX , maxX , minY , maxY){

	function run(){

	
		//divide grid until maze is created
		if(horizontal){


			if((maxX - minX) >= 2){

				do{

					var temp_row = Math.floor(randomNumber(minY, maxY)/2)*2

				}while(temp_row === rows - 1)
			

				addHorizontalWall(minX , maxX , temp_row)

			
				divide(!horizontal , minX , maxX , minY , temp_row - 1)
				divide(!horizontal , minX , maxX , temp_row + 1, maxY)

			}

		}else{


			if((maxY - minY) >= 2){

				do{

					var temp_col =  Math.floor(randomNumber(minX, maxX)/2)*2

				}while(temp_col === cols - 1)
			


				addVerticalWall(minY , maxY , temp_col)


				divide(!horizontal , minX , temp_col - 1 , minY , maxY)
				divide(!horizontal , temp_col + 1  , maxX , minY , maxY)
			
			}
		}

		
	}


	setTimeout(run,50)
		
}

DrawOuterWalls()

