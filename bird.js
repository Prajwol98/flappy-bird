const cvs = document.getElementById('bird');
const cvx = cvs.getContext('2d');

//GAME VARIALBLE AND CONSTANTS

let frame= 0;


//DRAW
function draw(){

}


//UPDATE

function update(){

}

//LOOP
function loop(){
    update();
    draw();
    frames++;
    requestAnimationFrame(loop);
}

loop();