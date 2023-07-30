/*
Autor: Jorge Marcelo
Data de Criação: 31/07/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 

/***********************MUDANÇA DE TEMA*******************/
/*Constante que vai armazenar o id que vai alterar os temas*/
const changeTheme = document.getElementById("change");

/*Função que fara a alteração de light para dark e virce e versa*/
changeTheme.addEventListener("change", function(){
document.querySelector(".calculadora").classList.toggle("light-mode");

/*Pegando todos os botões de numeros da calculadora e  alterando seu tema*/
const elementos = document.querySelectorAll(".numeros");
elementos.forEach(elemento => elemento.classList.toggle("light-mode"));

/*Aleterndo o tema do texto*/
document.querySelector("h1").classList.toggle("light-mode");

/*Aletrando os temas das redes sociais*/
document.querySelector(".instagram").classList.toggle("light-mode");
document.querySelector(".linkedin").classList.toggle("light-mode");
document.querySelector(".github").classList.toggle("light-mode");
})
/****************************************************************/


/************************CALCULADORA***********************/
/* Pegando o visor da calculadora */
const display = document.getElementById("display");
/* Pegando os botões que estão com o atributo data-value */
const buttons = document.querySelectorAll("[data-value]");

/* Loop for percorre todos os elementos do array buttons */
for (let i = 0; i < buttons.length; i++) {

/* Para cada clique, a ação de ouvinte de evento é acionada */
buttons[i].addEventListener("click", function () {

/* Aqui a const valor é criada para armazenar o valor do atributo 
data-value quando o botão for clicado */
const value = this.getAttribute("data-value");

/* Condições para avaliar a expressão matemática */
if (value === "=") {
/* Caso ocorra algum erro é passado direto para o catch */
try {

/* Avaliação da expressão matemática recebendo essa expressão 
como string e retorna seu resultado */
const resultado = avaliarExpressaoMatematica(display.value);
display.value = resultado;
} catch (erro) {
display.value = "Invalido";
}

} else if (value === "C") {
/* Condição caso usuário limpe o visor da calculadora */
display.value = "";
} else if (value === "backspace") {
/* Condição caso o usuário apague um número */
display.value = display.value.slice(0, -1);
} else {
/* Condição para concatenar os valores */
display.value = display.value + value;
}
});
}

function avaliarExpressaoMatematica(expressao) {
/* Criando arrays para operadores e operandos */
let operando1 = "";
let operador = "";
let operando2 = "";

/* Definição de precedência de operadores */
const precedencia = {
")": 1, // Precedência do parêntese de fechamento (mais alta).
"(": 1, // Precedência do parêntese de abertura (mais alta).
"*": 2, // Precedência da multiplicação.
"/": 2, // Precedência da divisão.
"+": 3, // Precedência da adição.
"-": 3, // Precedência da subtração.
};

/* Regex para adicionar os símbolos */
const simbolos = expressao.split(/([+\-*/(),])/);

/* Loop forEach que remove os espaços em branco */
simbolos.forEach((simbolo) => {
if (simbolo.trim() === "") {
return;
}

/*Verifica se o simbolo é um numero*/
if (!isNaN(simbolo)) {
/*Se não tiver operador o numero é o priemiro oprando*/
if (operador === "") {
operando1 = simbolo;

/*Caso haja um operando o operador é o segundo operando*/
} else {
operando2 = simbolo;
/*Aplica a operação aos operando e armazena o resultdo*/
operando1 = aplicaOperacao(Number(operando1), Number(operando2), operador).toString();
/*Limpa o operador para que seja adicionado o proximo exemplo : 1 + ""*/
operador = "";
}

/*Verifica se o parentese é um simbolo*/
} else if (simbolo === "(") {
} else if (simbolo === ")") {
if (operador !== "") {
throw new Error("Expressão inválida");
}

} else {
/*Caso o símbolo não seja um número nem um parêntese, 
então é um operador*/
if (operador === "" || precedencia[simbolo] < precedencia[operador]) {

/*
Se não há operador atual ou se o operador atual tem menor precedência que o novo,
então armazenamos o novo operador.
*/
operador = simbolo;
} else {

/*
//Caso contrário, aplicamos a operação atual entre os operandos e armazenamos o
resultado em operando1
O novo operador passa a ser o operador atual.
*/
operando2 = simbolos[simbolos.indexOf(simbolo) + 1];
operando1 = aplicaOperacao(Number(operando1), Number(operando2), operador).toString();
operador = simbolo;
}
}
});
return operando1;
}

/* Verifica se a vírgula é permitida como valor numérico */
function isNumeric(value) {
return !isNaN(value.replace(",", "").replace(";", "."));
}

/* Aplica as respectivas operações matemáticas */
function aplicaOperacao(operando1, operando2, operador) {
switch (operador) {

case "+":
return operando1 + operando2;

case "-":
return operando1 - operando2;

case "*":
return operando1 * operando2;

case "/":
if (operando2 === 0) {
throw new Error("Divisão por zero");
}
return operando1 / operando2;
default:

throw new Error(`Operador Inválido: ${operador}`);
}
}
/*************************************************************/

/****************************MUSICA*******************/
/*unção de Play*/
const playMusic = document.getElementById("playMusic");
playMusic.addEventListener("click", function(){
const music = document.getElementById("music");
music.play();
})

/*Função de Pause*/
const pauseMusic = document.getElementById("pauseMusic");
pauseMusic.addEventListener("click", function(){
const music = document.getElementById("music");
music.pause();
})

/*************************************************************/

/****************************Redes Sociais*******************/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})