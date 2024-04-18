//operador logico 'Não = !' que inverte as informações

let idade 
let condicao 

idade=parseInt(prompt("Digite sua idade:"))
condicao=prompt("habilitado (h) ou não habilitado? (n)")

if (!(idade>18 || condicao == "h")){
    alert("Pode dirigir")
} else{
    alert("Não pode dirigir")
}