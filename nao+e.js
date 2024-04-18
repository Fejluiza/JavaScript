
let idade 
let condicao 

idade=parseInt(prompt("Digite sua idade:"))
condicao=prompt("habilitado ou não habilitado?")

if (idade>18 && condicao == "habilitado"){
    alert("Pode dirigir")
} else{
    alert("Não pode dirigir")
}