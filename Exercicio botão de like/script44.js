const botao = document.getElementById("botaoTema");
const corpoPagina = document.body;
const caixa = document.getElementById("caixa");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

    
let botaoTema = false;


let contadorElemento = document.getElementById("contador");
        let Botao = document.getElementById("botao");
       let numero = 0;
        botao.addEventListener("click", () => {
           if(botaoTema === false) {
            numero = 0 + 1;
            contadorElemento.innerText = numero;

            botao.innerText = "Curtido❤️";

          botaoTema = true;
            }  
        
        
    else {
        if(botaoTema === true) {
            numero = 1 - 1;
            contadorElemento.innerText = numero;

botao.innerText = "Não curtido";

          botaoTema = false;
    }
}
})
    