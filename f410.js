/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor. */

var fabrica, impostos, carro;

alert("Calcular o custo final de um carro novo");

var fabrica = parseFloat(prompt("Digite o preço de fabrica do veículo:"))
alert("Total das taxas de impostos: 73%");

var impostos = (fabrica * 73 / 100);
var carro = (impostos + fabrica)

alert("Valor final do carro será de: R$" +carro);