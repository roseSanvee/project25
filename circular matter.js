class circularMatter{
    constructor(x, y, width, height) {
        var options = {
            isstatic: false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
    }
}
            display()
            {
                var angle = this.body.angle;
                push();
                translate(this.body.position.x, this.body.position.y);
                rotate(angle);
                imageMode(CENTER);
                image(this.image, 0, 0, this.width, this.height);
                pop();
              }
        