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

let direction = "right";



let rato = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
    
}

let fundoImg = new Image(); //Fundo de grama




/***** FUNCTIONS */

function criarBG() {
    //context.fillStyle = 'white';
    //context.fillRect(0, 0, 16 * box, 16 * box);

    fundoImg.src = "Desafio07Cobrinha.fundo.jpg";
    context.drawImage(fundoImg, 0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }

}




function drawRato(){
    //context.fillStyle = "yellow";
    //context.fillRect(food.x, food.y, box, box);
    //let img1 = new Image();
    //img1.src = "Desafio07Cobrinha.rato.png";

    let img1 = document.getElementById("rato")

    context.strokeStyle = "black";
    context.lineWidth   = 5;
    context.strokeRect(rato.x, rato.y, box, box);
  
}

document,addEventListener('keydown', update);

function update (event) {
    if (event.keyCode == 37 && direction != "right") direction = "left";

    if (event.keyCode == 38 && direction != "down") direction = "up";

    if (event.keyCode == 39 && direction != "left") direction = "right";

    if (event.keyCode == 40 && direction != "up") direction = "down";
}


/***** CHAMAR FUNÇÕES CRIADAS*/
function iniciarJogo(){

    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;

    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;

    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;

    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && 
        snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('Game Over :,(');
            alert('Tente novamente!');
        }
    }

    criarBG();
    criarCobrinha();
    drawRato();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    if (snakeX != rato.x || snakeY != rato.y) {
        snake.pop();
    } else {
        rato.x = Math.floor(Math.random() * 15 + 1) * box;
        rato.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);



/***** EXTRAS*/

