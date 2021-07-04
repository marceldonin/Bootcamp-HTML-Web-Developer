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
/*
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
alert(data.getMinutes()); */

// ---------------------------------------
/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));

// --------------------------

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    } else {
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade)); */

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<strong>Obrigado por clicar</strong>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://www.marceldonin.com/"); //Abre nova aba
    window.location.href = "https://www.pnl.marceldonin.com/" //abre na janela que estiver
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}