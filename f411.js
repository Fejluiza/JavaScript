/*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
vendedor. */

var salario, salariofixo, percentualcarro, carrosvendidos, totalvendas, comissao;

alert("Calculo do salário de um vendedor de carros");

var carrosvendidos= parseInt(prompt("Digite a quantidade total de carros vendidos pelo funcionário:"));
var totalvendas = parseFloat(prompt("Digite o valor total das vendas do funcionário"));
var salariofixo = parseFloat(prompt("Digite o salario fixo do funcionário:"));
var percentualcarro = parseInt(prompt("Digite a porcentagem que o funcionário recebe por carro vendido"));

comissao = (totalvendas * 5 / 100);
carrosvendidos = (percentualcarro / 100);
salario = (salariofixo + comissao + carrosvendidos)

alert("Salário total do funcionário:" + salario)
