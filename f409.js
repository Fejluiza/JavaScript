/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário. */

var salario, reajuste, novosalario;

alert("Calculo de reajuste do salário do funcionário");

var salario =parseFloat(prompt("Digite o valor do seu salário atual:"));
var reajuste = parseFloat(prompt("Digite o percentual para o calculo de reajuste"));

var reajuste = (salario * reajuste / 100);
var novosalario = (reajuste + salario)

alert("Seu novo salário é: "+ novosalario)
