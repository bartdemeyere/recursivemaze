class Cell{

	constructor(row , col , x , y , size){

		this.x = x;
		this.y = y;
		this.row = row;
		this.col = col;
		this.size = size;
		this.iswall = false;
		this.visited = false;
		this.color = "LemonChiffon"
	}

	draw(){


		if(!this.iswall){

			if(!this.visited){

				c.save()
				c.translate(this.x , this.y)
				c.beginPath()
				c.rect(-this.size/2 , -this.size/2 , this.size , this.size)
				c.closePath()
				c.restore()

			}else{

				c.save()
				c.translate(this.x , this.y)
				c.beginPath()
				c.fillStyle = this.color
				c.rect(-this.size/2 , -this.size/2 , this.size , this.size)
				c.fill()
				c.closePath()
				c.restore()

			}
			
		}else{

			c.save()
			c.translate(this.x , this.y)
			c.beginPath()
			c.fillStyle = "rgba(66,66,66,.8)"
			c.rect(-this.size/2 , -this.size/2 , this.size , this.size)
			c.fill()
			c.closePath()
			c.restore()
		}
		
	}
}