/*
1)Criar uma função para receber dois parâmetros: numero e percentual.
a)Calcular a porcentagem de um número  usando a fórmula:
(numero/100)* percentual
b)Chamar a função e exibir o resultado no console.
*/

let percent = (numero, percentual) => {
    console.log((numero/100)* percentual)
}
percent(10, 4);

/*
2)Criar uma função que recebe dois arrays como parâmetro e juntar os arrays:
a)Converter o array para string e retornar o resultado.
b)Chamar a função e exibir o resultado no console.
*/


function nomes(){
    let array1 = ["mome1", "nome2"]
    let array2 = ["nome3", "nome4"]

    let arraypai = array1.concat(array2)
    let arrayConv = arraypai.toString()
    console.log(arrayConv)
}
nomes()