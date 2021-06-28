// O enunciado diz:
//Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o.
// Caso seja igual 
//ou menor que 15, imprima a mensagem: "valor menor que 16":

// criando array
let numerosGrandes = [55,62,47,22,20]
let numerosPequenos = [2, 6, 3, 1, 0]
function testaarray(array) {


    //variavel que vai receber o valor da soma
    let resultado = 0
    //esse for vai percorrer cada valor do array somando os valores 

    for (let index = 0; index < array.length; index += 1) {
        //pegar número atual da array
        let valor = array[index]
        //colocar dentro da soma
        resultado = resultado + valor
    }

    // fazer uma condição pra ver se o resultado é maior que 15
    //se o resultado for maior será impresso
    if (resultado > 15) {
        console.log(resultado);
    } else {
//senão será impresso a seguinte frase " valor menor que 16"
        console.log("valor menor que 16");
    }
}
testaarray(numerosPequenos);
testaarray(numerosGrandes);


