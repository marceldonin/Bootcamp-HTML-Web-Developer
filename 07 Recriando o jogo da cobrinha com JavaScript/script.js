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

/***** FUNCTIONS */

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

/***** FUNÇÕES CRIADAS*/
criarBG();



/***** HEADER*/
/***** FOOTER*/
/***** PÁGINA INICIAL*/
/***** EXTRAS*/
/***** @MEDIA*/
