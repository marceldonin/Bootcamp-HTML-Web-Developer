/*
Theme Name: 
Theme URI: 
Author: Marcel Donin
Author URI: 
Description: 
Version: 1.0

--------------------------------------------
ESTRUTURA BASE
--------------------------------------------
/***** DECLARAÇÃO DE VARIAVEIS*/
/***** ESTILOS GERAIS*/
/***** BODY*/
/***** HEADER*/
/***** FOOTER*/
/***** PÁGINA INICIAL*/
/***** EXTRAS*/
/***** @MEDIA*/


//var nome = "Marcel Donin";
//alert("Bem vindo " + nome);

//var nome2 = "Marcel Donin";
//var idade = 38;
//alert(nome2 + " tem " + idade + " anos!");

//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop(); //remove itens

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" . "));

//var fruta = {nome:"maçã", cor:"vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);

//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva",cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);

/*
var idade = prompt("Qual sua idade?")
if (idade >= 18){
    alert("maior de idade");
}else {
    alert("Menor de idade");    
} */

var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count++;
    //count = Count + 1;
}

var count2;
for (count2=0; count2 <= 5; count2++){
    alert(count2);
} 

var data = new Date();
alert(data.getMonth()+1);
alert(data.getFullYear());
alert(data.getMinutes()); 