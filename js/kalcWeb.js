//Guardar os elementos em variaveis
const operadores = document.querySelectorAll(".operators button");

const numeros = document.querySelectorAll(".numbers button");

const tela = document.querySelector(".screen");

//const operadorSoma = operadores[3];

function show(a){
	if (a == "C") {
		tela.innerText = 0;
		return ;
	}
	if (tela.innerText == "0") {
		tela.innerText = "";
	}
	tela.innerText += a;
}

for (var i = 0; i < operadores.length; i++) {
	operadores[i].onclick = (e) =>  digitar(e.target.innerText);
}

for (var i = 0; i < numeros.length; i++) {
	numeros[i].onclick = (e) =>  show(e.target.innerText);

}
function digitar(a){
	valorAtual = tela.innerText;
	console.log;
}
//if(tela.innerText == numeros){
//	valorAtual = tela.innerText;
//}
