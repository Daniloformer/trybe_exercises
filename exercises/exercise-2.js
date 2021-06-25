// //exercício 1 e 2
// //let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// //let soma = 0

// //for (let index = 0; index < numbers.length; index += 1) {
// //  soma = soma + numbers[index]
// // console.log(soma);
// //}
// //abaixo exercíci 3

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// //let soma = 0

// //for (let index = 0; index < numbers.length; index += 1) {
// //soma = soma + numbers[index]

// //}
// //console.log(numbers.length);
// // exercício 4 
// //if (numbers.length > 20) {
// // console.log("valor maior que 20")
// //} else {
// //console.log("valor menor que 20")
// // }
// // exercício 5

// // let maior = 0;

// // for (let i = 0; i < numbers.length; i++) {
// //    if (numbers[i] > maior) {
// //       (maior = numbers[i]);
// //    }
// // }
// // console.log(maior)

// // exercícios 6  Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

// // let quantidadeNumeroImpar = 0;
// // for (let posicao = 0; posicao < numbers.length; posicao++) {
// //    let num = numbers[posicao];
// //    if (num % 2 != 0) {
// //       quantidadeNumeroImpar += 1;
// //    }
// // }
// // if (quantidadeNumeroImpar === 0 ) {
// //    console.log("nenhum valor ímpar encontrado");

// // } else{
// //    console.log(quantidadeNumeroImpar);
// // }
// // exercício 7

// let maior = 0;

// for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] > maior) {
//       (maior = numbers[i]);
//    }
// }

// let menor = maior;

// for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] < menor) {
//       (menor = numbers[i]);
//    }
// }
// console.log(menor)

// exercício 8
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 

let array = [];
for (let i = 0; i < 25; i += 1) {
    array.push(i)   
} 
console.log(array)

for (let i = 0; i < array.length; i++) {
    let element = array[i];
   let elementDivididoPorDois = element /2
console.log(elementDivididoPorDois)   
}
    