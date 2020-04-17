var painting = [];

function setup(){
    createCanvas(500,500)
}

function draw(){
    background(0);
    if (mouseIsPressed){
       var coordinates ={
        x: mouseX,
        y: mouseY
        }
    painting.push(coordinates);
}
beginShape();
stroke("yellow");
strokeWeight(2);
noFill();
for(var i = 0; i<painting.length;i++){
    vertex(painting[i].x,painting[i].y)
}
endShape();
}