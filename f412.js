/*Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor 
correspondente em graus Celsius */

var fahrenheit, celsius

alert("Conversão de temperatura em Fahrenheit para Celsius.");

var fahrenheit=parseInt(prompt("Digite a tempratura em Fahrenheit para sua conversão:"))

celsius= (fahrenheit - 32) * (5/9)

alert("Temperatura em Celsius: "+ celsius+"°")