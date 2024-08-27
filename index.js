console.log("Olá, mundo!")
// prompt("Qual é o seu nome?")

//let nome = prompt("Qual é o seu nome?")

//let idadeDoUsusario = Number(prompt("Digite a sua idade"))
//let melhorAmigo = Number(prompt("Digite a idade do seu melhor amigo"))

//console.log("Sua idade é maior do que a do seu melhor amigo? "  + idadeDoUsusario > melhorAmigo)
//console.log(idadeDoUsusario - melhorAmigo)

//let numeroPar = Number(prompt("Digite um número par:"))
//const resto = numeroPar % 2
//console.log(resto)


//let array = [0,1,2,3,4,5,6,7,8]

//console.log(array.splice(2,3))
 
//let idade = Number(prompt("Digite a sua idade:"))
//let ensinoMedio = prompt("Já concluiu o enino médio?").toLowerCase().trim()
//let faculdade = prompt("Está cursando uma faculdade?").toLowerCase().trim()

//function podeEstudar(idade, ensinoMedio, faculdade) {
  //  if (idade >= 18 && ensinoMedio === "sim" && faculdade === "não"){
    //    console.log("Você pode estudar na faculdade!")
   // }
    //else {
     //   console.log("Você não pode estudar na faculdade!")
    //}
//}

//podeEstudar(idade, ensinoMedio, faculdade)

const abrigo = {
  //nome: prompt("Digite o nome do abrigo:")

}

var abrigos = []

function cadastrar(){
  let abrigo = {
    nome: prompt("Digite o nome do abrigo:"),
    endereco: prompt("Digite o endereço do abrigo:"),
    telefone: prompt("Digite o telefone do abrigo:"),
    capacidade: prompt("Digite o endereço do abrigo:"),
    cidade: prompt("Digite a cidade do abrigo:")
  }
  
  abrigos.push(abrigo)
}

let titulo = "-------------\n" +
  "Lista de abrigos\n" +
  "-------------\n\n" + 
  "Código |       Nome       |            Endereço            |     Telefone      |   Capacidade  |   Cidade    \n" +
  "--------------------------------------------------------------------------------------------------------------\n"

console.log(titulo)

function listar(array) {
  let titulo = "Lista de abrigos:\n----------------------\n\n"
  for (let i = 0; i < array.length; i++) {
    alert(`Código: ${i}\nNome: ${array[i].nome}\nEndereço: ${array[i].endereco}\nTelefone: ${array[i].telefone}\nCapacidade: ${array[i].capacidade}\nCidade: ${array[i].cidade}`)
  }
}

let menu = 0

while (menu != 4){
  menu = prompt("======== ABRIGOS TEMPORÁRIOS ======== \n\n1. Cadastrar Abrigo\n2. Listar Abrigos\n3. Procurar Abrigos\n4. Sair\n\nEscolha uma opção:")
  switch (menu) {
    case '1':
        cadastrar()
      break;
    
    case '2':
      if (abrigos.length <= 0) {
        alert("não há abrigos cadastrados")
        break
      } else {
        listar(abrigos)
        break
      }
    case '4':
      alert("Obrigado por usar o sistema!")
      break
    default:
      alert("Digite uma opção válida!")
      break;
  }
}


