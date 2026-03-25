const inputTarefa = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// criando lista vazia
let tarefas = [];

function salvarTarefas() {
    /*
     localStorage -> armazenamento local do navegador
     setItem -> salva no armazenamento o conteúdo recebido
     JSON.srtingfy(tarefas) -> pega a lista de tarefas, converte para texto(string) e armazena esse texto.
    */
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

// função para mostrar tarefas na tela 
function mostrarTarefas() {
    listaTarefas.innerHTML = "";


    for(let i = 0; i < tarefas.length; i++) {

        const li = document.createElement("li");
        li.innerText = tarefas[i]
    }
}

/*
//let i =0 -> o valor inicial da repetição vai iniciar em zero 
// i < listaTeste.lenght -> validar se o i é menor que o tamanho da lista
let listaTeste = ["Samuel", "Samuel", "Samuel"]

for(let i = 0; i < listaTeste.leight; i++) {

}
*/