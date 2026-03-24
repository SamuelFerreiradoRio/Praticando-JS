const usuarioCorreto = "admin"
const senhaCorreta = "1234"

const botao = document.getElementById("btnEntrar")

botao.addEventListener("click", function () {
  const usuarioDigitado = document.getElementById("usuario").value
  const senhaDigitada = document.getElementById("senha").value

  if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    alert("Login realizado com sucesso")
  } else {
    alert("Usuário ou senha inválidos")
  }
})