let frutas = ['laranja', 'maçã', 'banana', 'pera', 'uva', 'mamão']

console.log(frutas)
// eliminar ultimo elemento do array
let ultimaFruta = frutas.pop()
console.log("----------------------------")
console.log(frutas)
console.log(ultimaFruta)
console.log("----------------------------")
// eliminar primeiro elemento do array
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)
console.log("----------------------------")
// eliminar elemento pelo indice do array
let qualquerFruta = frutas.splice(2,1)

console.log(frutas)
console.log(qualquerFruta)

console.log("----------------------------")
// inserir elemento no fim do array
frutas.push('jabuticaba')

console.log(frutas)
console.log("----------------------------")
// inserir elemento no inicio do array
frutas.unshift('amora')
console.log(frutas)
console.log("----------------------------")
// inserir elemento em qualquer posição do array
frutas.splice(3,0,'abacaxi')
console.log(frutas)
console.log("----------------------------")
// inserir 2 elementos em qualquer posição do array
frutas.splice(3,0,'kiwi', 'abacate')
console.log(frutas)
console.log("----------------------------")
// substituir elemento em qualquer posição do array
frutas.splice(3,1,'pitaya')
console.log(frutas)

/*
*
*Percurso de vetores
*/

//1 - percurso tradicional via for
for(let i = 0; i < frutas.length; i++){
    console.log(i, frutas[i])
}

console.log('**')

//ordem inversa
for(let i = frutas.length - 1; i >= 0; i--){
    console.log(i, frutas[i])
}

console.log('**')

//2 - percurso usando for of...
//não há necessidade de manter uma variavel de controle (i)
for(let fruta of frutas){
    console.log(fruta)
}

//3 - percurso via ForEach
frutas.forEach(function(fruta){
    console.log(fruta)
})

//metodo simplificado
frutas.forEach(fruta => console.log(elemento))