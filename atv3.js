/*
1)Criar uma função para receber  uma string como parâmetro:
a)Contar a quantidade de palavras repetidas em uma frase e retornar o total.
b)Chamar a função e exibir o resultado no console.
*/

function strOp(frase, repetiu){

    let cont = 0;
    let array = frase.split(" ");
    for(var i=0; i < array.length;i++){ 
        if(array[i] == repetiu){
            cont +=1;
        } 
        }
    console.log("Apareceu "+ cont +" vezes")
}
 strOp("Criar uma função que receba um array com 5 números como parâmetros", "Criar")


/*
2)Criar uma função que receba um array com 5 números como parâmetros:
a)Inverter o array e retornar o resultado.
b)Chamar a função e exibir o resultado no console.
*/

let arrayFive = () => {
    let arr = [1, 2, 3, 4, 5]
    console.log(arr.reverse())
}
arrayFive();



/*
3)Criar uma função que receba 4 números inteiros positivos como parâmetros:
a)Calcular a soma de todos os números.
b)Retornar o Resultado.
c)Chamar a função e exibir o resultado no console.
*/
function soma(n1, n2, n3, n4){
    console.log(n1+n2+n3+n4)
}
soma(1,2,3,4)