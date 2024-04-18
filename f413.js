/*Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média 
final é: */

var nota1, nota2, nota3, mediafinal;

alert("Calculo da media final de um aluno.")

var nota1= parseFloat(prompt("Digite a primeira nota do aluno:"))
var nota2= parseFloat(prompt("Digite a segunda nota do aluno:"))
var nota3= parseFloat(prompt("Digite a terceira nota do aluno:"))

var mediafinal= (nota1*2 + nota2*3 + nota3*5) / 10
alert("Media final do aluno é de: "+ mediafinal)