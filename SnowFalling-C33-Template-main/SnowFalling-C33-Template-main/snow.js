class snow {
    constructor(x,y,w,h){
        var options = {
            restitution:1,
            friction:0,
            density:1
        }
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x,y,w,h.options)
        this.image = loadImage("snow4.webp")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y) 
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.w,this.h)
        pop()
    }
}