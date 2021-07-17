/*
Theme Name: 
Theme URI: 
Author: Marcel Donin
Author URI: 
Description:
Data: Julho/2021 
Version: 1.0

--------------------------------------------
ESTRUTURA BASE
--------------------------------------------*/


/***** DECLARAÇÃO DE VARIAVEIS*/
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

/***** FUNCTIONS */

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "red";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }

}

/***** CHAMAR FUNÇÕES CRIADAS*/

criarBG();

criarCobrinha();



/***** HEADER*/
/***** FOOTER*/
/***** PÁGINA INICIAL*/
/***** EXTRAS*/
/***** @MEDIA*/
