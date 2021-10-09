/*
1)Criar uma função que exibe no console um array com os nomes de 3 estados da região Norte do Brasil:
a)Ordenar os elementos do array na ordem invertida
*/

let norte = () => {
    let estados = ["Pernambuco", "São Paulo", "Rio de janeiro"]
    estados.reverse()
    console.log(estados)
}
norte();

/*
2)Criar uma função que recebe duas strings:
a)Transformar todas as letras em maiúsculas do primeiro parâmetro usando toUpperCase().
b)Concatenar as duas strings e retornar o resultado.
c)Chamar a função e exibir no console o resultado.
*/
((str1, str2) => {
    str1 = str1.toUpperCase()
    console.log(str1.concat(str2))
}) 

("ninguem é forte", " mas eu tenho qi");

/*
3)Criar uma função que retorne 17 vezes a palavra Repetição.
a)Chamar a função e exibir no console o resultado.
*/


function repetir(){
    for(let i = 1; i<= 17; i++){
        console.log("Repetir " + i)
    }
} repetir();