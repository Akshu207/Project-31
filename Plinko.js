class Plinko{
constructor(x,y){
    var options={
	
    isStatic:true,
	restitution:0.3,
	friction:0.5,
	density:1.2

}	
		this.x=x;
		this.y=y;
		
		this.body=Bodies.circle(x,y,10, options)
		World.add(world, this.body);

	}
	display(){
		var pos=this.body.position;		
		push()
		translate(pos.x, pos.y);
		rectMode(CENTER)
        noStroke();
		fill(37, 79, 217)
		ellipse(0,0,10,10);
		pop()
			
	}

}