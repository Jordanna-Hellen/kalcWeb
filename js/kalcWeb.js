//Guardar os elementos em variaveis
const operadores = document.querySelectorAll(".operators button");

const numeros = document.querySelectorAll(".numbers button");

const tela = document.querySelector(".screen");

var resultado = 0;
var valor = 0;
var valorAntes = 0;
var operacao = 0;

//const operadorSoma = operadores[3];

function show(a){
	if (a == "C") {
		tela.innerText = 0;
		valor = tela.innerText;
		return ;
	}
	if (tela.innerText == "0") {
		tela.innerText = "";
	}
	tela.innerText += a;
	valor = tela.innerText;
}

for (var i = 0; i < numeros.length; i++) {
	numeros[i].onclick = (e) =>  show(e.target.innerText);
	if (numeros[i].innerText == operadores[i]) {
		valorAntes = valor;
		valor = 0;
		break;
	}
}

for (var i = 0; i < operadores.length; i++) {
	operadores[i].onclick = (e) =>  show(e.target.innerText);
	operacao = operacao ++;
	if (operadores[i].innerText == "=") {
		operadores[i].onclick = (e) =>  { calcular(); show(e.target.innerText); };
	}
}
function calcular(){
	switch(operacao){
		case "+":
			tela.innerText = valorAntes + valor;
			show(tela.innerText);
			break;
		case "-":
			tela.innerText = valorAntes - valor;
			show(tela.innerText);
			break;
		case "*":
			tela.innerText = valorAntes * valor;
			show(tela.innerText);
			break;
		case "/":
			tela.innerText = valorAntes / valor;
			show(tela.innerText);
			break;
	}
}