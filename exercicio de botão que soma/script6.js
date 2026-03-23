let contadorElemento = document.getElementById("contador");
        let botao = document.getElementById("botao");
        
        let numero = 0;
        botao.addEventListener("click", function() {
            numero = numero + 1;
            contadorElemento.innerText = numero;
        })