//  ESTRUTURAS DE REPETIÇÃO
//  permite execultar um bloco de codigo varias vezes
//  com base em uma condição

//TIPOS:
/*
    FOR
    WHILE
    DO WHILE
    FOREACH
    */

//___________________________________________________________________________________________________________

/*
    // FOR -> Usamos quando sabemos quantas vezes o codigo vai se repitir.
    //let i = 1 -> criamos uma variavel e chamamos ela de "i"
    //essa variavel vai servir como o estado inicial da estrutura de repetição
    //conforme for repetindo, ela vai aumentando de valor 

    //i <= 5 -> condição: essa condição vai definir o limite de repetições
    //significa = "enquanto o valor de 'i' for menor ou igual a 5..."

    //i++ ->iterador: nesse caso, quando usamos o ++, quer dizer que estamos acrecentando +1 denro do 1
    //i++ é a mesma coisa que i = i + 1
    for(let i = 1; i <= 5; i++) {
       console.log("Oi!!")
       console.log("Numero:", i)
    }
    //rodou 1° : 1 -> OI
    //rodou 2° : 2 -> OI
    //rodou 3° : 3 -> OI
    //rodou 4° : 4 -> OI
    //rodou 5° : 5 -> OI
    //rodou 6° : parou aqui, não imprime nada
/*
//___________________________________________________________________________________________________________


    // WHILE -> Executa o bloco de codigo enquanto uma condição for verdadeira.
    let contador = 1;

    while (contador <=3) {
        console.log("Repetindo....")
        console.log(contador);
        contador++ //contador = contador + 1
    }
    
    //contador é menor ou igual a 3? VERDADEIRO
    //imprime e faz contador = contador + 1
    //contador = 1 + 1 -> contador agora vale 2

    //contador é menor ou igual a 3? VERDADEIRO
    //imprime e faz contador = contador + 1
    //contador = 1 + 1 -> contador agora vale 3

    //contador é menor ou igual a 3? FALSO

//___________________________________________________________________________________________________________

/*
    //DO WHILE -> executa pelo menos uma ve antes da condição
    // executa depois pergunta

    let numero = 5;

    do {
        console.log("Executou pelo menos uma vez");
    }

//---------------//--------//--------------//---------//
//DIFERENÇA -> WHILE PARA O DO WHILE é que o while pergunta depois executa e o DO WHILE executa e depois pergunta.
while(numero < 3); //FALSE

while (contador < 3) {
    console.log("Executou aqui");
    numero++
}
*/

//___________________________________________________________________________________________________________
/*
// FOREACH -> Usado para quando temos uma lista de elementos e queremos percorrer os elementos dessa lista
// lista (array)

let nomes = ["Maria Eduarda", "Kauê", "Lailon"];

// forEach - para cada
nomes.forEach(function(nome) {
    console.log("Nome: ", nome)
   // console.log(nome[1]);
})

// pega a lista de nomes e para cada nome, imprima o nome
*/
/*
// FOREACH simplificado -> (arrow function)
let nomes = ["Maria Eduarda", "Kauê", "Lailon"];

nomes.forEach(nome => {
    console.log(nome);
})
*/
//___________________________________________________________________________________________________________
/*
// Sistema de intervalo definido pelo usuario
let inicio = Number(prompt("Digite o numero inicial: "));
let fim = Number(prompt("Digite o numero final: "));

i = 5
fim = 20

for(let i = inicio; i <= fim; i+=5) {
    console.log(i);
}

// ++ -> soma mais um
//+=n -> somais n (numero)
*/
//___________________________________________________________________________________________________________
/*
// Contagem pulando os numeros
for(let i = 0; 1 <= 10; i+=2) {
    console.log(i);
}
*/
//___________________________________________________________________________________________________________
/*
//While com condição para sair do sistema
let valor = "";

while (valor != "sair") {
valor = prompt("Digite algo ou 'sair' para parar")
console.log("Você digitou: ", valor)
}
*/

//___________________________________________________________________________________________________________

/*
// contador com regra
let limite = Number(prompt("Mostrar números maiores que: "));

for(let i = 1; i <= 10; i++) {
    if(i > limite) {
        console.log(i);
    }
}
    */
//___________________________________________________________________________________________________________
/*
// percorrendo um array usando for
let cores = ["Azul", "Verde", "Vermelho"]

for(let i = 0; i < cores.length; i++) {
    console.log("Posição da cor: ", + i + "-" + cores[i]);
    // i-> imprime numero da posição 
    // cores [i] -> da posição
}
*/
/*
//condição dentro do foreach
let numeros = [3, 7, 10, 15];

numeros.forEach(num => {
    if (num > 8) {
        console.log("maior que 8: ", num);
    }
})
*/