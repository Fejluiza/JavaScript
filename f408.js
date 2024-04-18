/*Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos 
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total 
de eleitores.*/

var totaleleitores, votobrancos, votosnulos, votosvalidos;
var percentualbrancos, percentualnulos, percentualvalidos;

alert("Total de Eleitores e apresentar a porcentagem de cada um dos tipos de voto");

var totaleleitores = parseInt(prompt("Digite o total de eleitores:"));
var votosbrancos = parseInt(prompt("Digite o total de votos brancos:"));
var votosnulos = parseInt(prompt("Digite o tal de votos nulos:"));
var votosvalidos = parseInt(prompt("Digite o total de votos validos:"));

var percentualbrancos = (votosbrancos / totaleleitores * 100);
var percentualnulos = (votosnulos / totaleleitores * 100);
var percentualvalidos = (votosvalidos / totaleleitores * 100);

alert("Porcentagem de Votos brancos: "+ percentualbrancos+"%");
alert("Porcentagem de Votos nulos: "+ percentualnulos+"%");
alert("Porcentagem de Votos validos: "+ percentualvalidos+"%");