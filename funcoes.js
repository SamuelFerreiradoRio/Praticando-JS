// FUNÇÕES NATIVAS DO JS
// Ajudam a manter um codigo limpo e organizado
// Evita muita repetição de código
// Usa principalmente quando trabalhamos com listas(array)

//______________________________________________________________________//______________________________________________________________________


// MAP -> Percorre uma lista e cria uma nova lista com base na condição
/*
let numeros = [1, 2, 3, 4];

let numerosDobrados = numeros.map(function(num) {
    return num * 2;
});

console.log(numerosDobrados) // [2, 4, 6, 8]

// mesma função, mas agora com arrow function
let numerosDobradosArrow = numeros.map(num => numero * 2);
console.log(numerosDobradosArrow);

//quando prescisamos usar o return?
//quando a função prescisa ter mais de uma linha
numeros.map(num => {
    let resultado = num * 2;
    return resultado;
})
    */

//______________________________________________________________________//______________________________________________________________________

/*
// FILTER -> Filtra os elementos de uma lista com base em uma condição
let numeros = [5, 10, 15, 20];

let maioresQueDez = numeros.filter(num => num > 10); 
console.log(maioresQueDez); // [15, 20]
*/

//______________________________________________________________________//______________________________________________________________________

/*
// REDUCE -> Reduz os valores de um array(lista) para um valor.
let numeros = [1, 2, 3, 4];

//acumulador se chama total
// variavel auxiliar se chama num
// esse 0 é o valor inicial do acumulador (total)                                                  
// n reducce(acumulador, auxiliar)
let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);
console.log(soma);
*/

//______________________________________________________________________//______________________________________________________________________
 
// FIND -> Retorna o primeiro elemento que atenda a condição
 
 /*let produtos = [
    {id: 1, nome: "Teclado", preco : 50}, // produto
    {id: 2, nome: "Mouse", preco: 30} //produto
 ]

 let item = produtos.find(produto => produto.id === 2);
 console.log(item);
 */

 //______________________________________________________________________//______________________________________________________________________
 
 /*
 // SPLIT -> Divide uma string em partes, transformando em uma lista

 let frase = "JS é muito bom! !";

 // criando um array de palavrs usando split
 let palavras = frase.split("");

 console.log(palavras);
*/
 
 //______________________________________________________________________//______________________________________________________________________

 // TRIM -> remove espaços no inicio e final de uma string
 
 /*let nome = "     João      "
 let nomeLimpo = nome.trim();

 console.log(nome);
 console.log(nomeLimpo);

//______________________________________________________________________//______________________________________________________________________


 // INCLUDES -> Verifica se existe um valor dentro de uma lista ou string
 let frutas = ["maçã", "banana"];

 let frutasIncludes = frutas.includes("banana");
    console.log(frutasIncludes); // true VERDADEIRO 
 */
 //toLowerCase -> transforma texto em minúsculo
//_toUpperCase -> transforma em maiusculolet
/*
let nome = "Samuel";
let cargo = "Aluno";

console.log(nome.toLowerCase()); //samuel
console.log(nome.toUpperCase()); //SAMUEL
*/
//____________________________________________________________________//______________________________________________________________________

/*
//FOREACH - Percorre todos os elementos do array
let nomes = ["pedro", "joão", "Guilherme"];

nomes.forEach(nome => console.log("Seunome é: ", nome));
*/

//____________________________________________________________________//______________________________________________________________________

/*
//SOME -> Verifica se pelo menos um item atende a condição
let numeros = [1, 3, 5, 8];

//se dividir um numero por 2 e o resto for igual a 0, então o número é par
// o operador % significa resto da divisão
// num % === 0 -> se o resto da divisão por 2 for igual a 0, então atende a condição.
let temPar = numeros.some(num => num % 2 === 0);

console.log(temPar); // true VERDADEIRO
*/
//____________________________________________________________________//_____________________________________________________________________

/*
// EVERY -. Verifica se todos os elementos atendem a uma condição
let numeros = [1, 3, 5, 8]

let todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares);
*/

//____________________________________________________________________//_____________________________________________________________________

/*
//SORT -> Ordena os elementos do array
let numeros = [3, 5, 2, 4];
let letras = ["c", "a", "x", "h"]

letras.sort();
console.log(letras);

numeros.sort((a, b) => a - b);
console.log(numeros); //[2, 3, 4, 5]
*/

//____________________________________________________________________//_____________________________________________________________________

/*
//Reverse -> Inverte a ordem de um array(lista)
let numeros = [1, 2, 3];

numeros.reverse();
console.log(numeros) // 3, 2, 1
*/

//____________________________________________________________________//_____________________________________________________________________

/*
//JOIN -> Junta os elementos de um array em uma string
let palavras = ["JS é muito bom! !"];

let frase = palavras.join(" ");
console.log(frase); // "JS é muito bom"

*/

//____________________________________________________________________//_____________________________________________________________________

/*
// PUSH -> Adiciona elementos no final do array (lista)
// POP -> Remove elementos no finaldo array
let lista = ["A", "B"];

lista.push("C");
lista.pop();
console.log(lista);
*/

//____________________________________________________________________//_____________________________________________________________________

/*
//SHIFT -> Remove do inicio do array (lista)
//UNSHIFT -> Adiciona no inicio do array(lista)

let lista = ["B", "C"];

lista.unshift("A");// adiciona
//lista shift();     //remove

console.log(lista)

*/

//____________________________________________________________________//_____________________________________________________________________


// SLICE -> CRIA UMA CÓPIA DE UMA PARTE DA LISTA 
/*
array.slyce(inicial, final)

inicial -> onde começa
final -> one para(não inclui a posição indice ou index)
*/
/*
 let numeros = [1, 2, 3, 4];
 let parte = numeros. slice(1, 3); // 1 e 3 são as posições do array

 console.log(parte); // [2, 3] não pega a posição final (3 )
*/

//____________________________________________________________________//_____________________________________________________________________


//SPLICE -> Remove ou adiciona elementos em qualquer posição 
/*
array.splice(index, count, item1, ..., itemX)

index -> indice( posição do elemento no array)
count -> número de itens a serem removidos (pode ser 0)
item1, item2... -> itens a serem adicionados
*/
/*
// removendo elementos, sem adicionar
let numeros = [1, 2, 3, 4]

numeros.splice(1, 1);
console.log(numeros); // [1, 3, 4]

// removendo elementos e adicionando mais dois elementos
let frutas =["Banana", "Laranja", "Maçã", "Manga"];

frutas.splice(0, 1, "Limão", "Kiwi");
console.log(frutas)

// adiciona dois elementos sem remover nenhum
let frutasNovas = ["Banana", "Laranja", "Maça", "Manga"]

frutasNovas.splice(2, 0, "Limão", "Kiwi");
console.log(frutasNovas);
*/

//____________________________________________________________________//_____________________________________________________________________

/*
// REPLACE -> Subistitui uma parte da string
let texto = "Olá mundo!";
let novoTexto = texto.replace("mundo", "cliente")
console.log(novoTexto);
*/

/*
// SPOILER.....................
let textoP = document.getElementById('texto');

let saudacao = prompt("Digite a saudação: ");

if(saudacao == "bom dia") {
    textoP.textContent = saudacao;
} else {
    textoP.textContent = "SEXTOUUUU";
}
*/