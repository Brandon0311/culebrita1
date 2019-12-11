//variables del canvas
var c= document.getElementById('canvita');


var miCanva = c.getContext("2d");

var tamaño = 20;


var phead={
    x:0, 
    y:0
};
var dx=0;
var dy=0;   

//FUNCIONES
//setInterval(principal,500);

function principal() {
    cambiar()
    dibujar()
}

function cambiar() {
    phead.x +=dx;
    phead.y +=dy;
}
function dibujar() {
    //cabeza
    miCanva.clearRect(0, 0, 400, 400);
    miCanva.fillRect(phead.x,phead.y,tamaño,tamaño);

    //comida


    //cuerpo
}

function comida() {
    miCanva.fillStyle = "red";
    miCanva.fillRect(60,40,20,20);
}
comida();


document.addEventListener('keydown',function(e){
    //var flechas = e.key;
    
    switch (e.key) {
        case 'ArrowUp':
            dx=0;
            dy=-tamaño;
            break;

        case 'ArrowDown':
            dx=0;
            dy=tamaño;
            break;

        case 'ArrowRight':
            dx=tamaño;
            dy=0;
            break;

        case 'ArrowLeft':
            dx= -tamaño;
            dy=0;
            break;
        
    }
    // if (flechas==='ArrowDown') {

    //     phead.forEach(posicion => {
            
                       
    //     });
    // }
    
    
});


