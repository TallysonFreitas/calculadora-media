const media     = document.getElementById("media")
let avisoNome   = document.getElementById("nomeErro")
let avisoNota   = document.getElementById("notaErro")
let atividade   = document.getElementById("atividade")
let tabela      = document.getElementById("tabelado")
let numeros     = []
let tarefas     = []
let soma        = 0
let notaMinima = Number(prompt("Media minima"))

function validar(){
        let atividade   = document.getElementById("atividade").value
        let nota        = document.getElementById("nota").value
        
        if(!tarefas.includes(atividade)){
        Linhas()
        numeros.push(nota)
        soma = 0

        tarefas.push(atividade)

        for(let i = 0; i < numeros.length ; i++ ){
            soma += Number(numeros[i])
        }

        let media                                   = soma / numeros.length
        document.getElementById("media").innerHTML  =`${media.toFixed(2)}`

        let situacao                                = document.getElementsByClassName("resultado")[0]
        if(media >= notaMinima){
            situacao.innerHTML  = "Aprovado"
            situacao.setAttribute("class","resultado aprovado")
            situacao.style.display = "block"
        }else{
            situacao.innerHTML  = "Reprovado"
            situacao.setAttribute("class","resultado reprovado")
            situacao.style.display = "block"
        }
    }else{
        avisoNome.style.display         = "flex"
        avisoNome.style.backgroundColor = "red"
        avisoNome.innerHTML             = "Tarefa já aditada"
    }
}
function Linhas(){
    let atividade   = document.getElementById("atividade").value
    let nota        = document.getElementById("nota").value
    
    if(atividade == ""){
        avisoNome.style.display         = "flex"
        avisoNome.style.backgroundColor = "red"
        avisoNome.innerHTML             = "Campo Inválido"

    }else if(nota < 0 || nota > 10 || nota == ""){
        avisoNota.style.display         = "flex"
        avisoNota.style.backgroundColor = "red"
        avisoNota.innerHTML             = "Campo Inválido"

    }else{
        avisoNome.style.display = "none"
        avisoNota.style.display = "none"

        let linha           = "<tr>"
        linha               += `<td>${atividade}</td>`
        linha               += `<td>${nota}</td>`

        if(nota >= notaMinima){
            linha           += `<td><img src="images/aprovado.png" alt="emoji"></td>`

        }else{
            linha           += `<td><img src="images/reprovado.png" alt="emoji"></td>`

        }

        linha               += `</tr>`
        tabela.innerHTML    += linha

}
}