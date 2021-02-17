let pessoa = {
    nome:"MRM",
    dataNasc: "2002-06-03",
    sexo: 'M',
    ocupacao: "mágico"
}
// console.log(pessoa.nome)
// // ou
// console.log(pessoa["ocupacao"])

// for(let mrm in pessoa){
//     console.log(mrm)
// }

delete pessoa.nome

console.log(pessoa)