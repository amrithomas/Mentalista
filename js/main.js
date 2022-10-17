//variaveis iniciais
var numeroSecreto = parseInt(Math.random() * 101);
console.log(numeroSecreto);

//função do jogo
function Chutar() {
  //variaveis para o jogo
  var chute = parseInt(document.getElementById("valor").value);
  var resultado = document.getElementById("resultado");
  var tentativa = document.getElementById("tentativa");

  //variaveis do chute
  var acertou = chute == numeroSecreto;
  var maior = chute > numeroSecreto;
  var menor = chute < numeroSecreto;

  //variaveis para as tentativas
  var tentativas = 0;
  var totalTentativas = 15;

  while (tentativas <= totalTentativas) {
    tentativas = tentativas + 1;

    if (acertou) {
      resultado.innerHTML = "Parabéns! Você acertou!";
      setTimeout(function Reiniciar() {
        numeroSecreto = parseInt(Math.random() * 101);
        resultado.innerHTML = "Jogo reiniciado, boa sorte!";
        console.log(numeroSecreto);
      }, 2000);
    } else if (chute > 100 || chute < 0) {
      resultado.innerHTML = "Digite um número de 0 a 100!";
    } else if (maior) {
      resultado.innerHTML =
        "Você errou! Seu chute foi maior que o numero secreto!";
    } else if (menor)
      resultado.innerHTML =
        "Você errou! Seu chute foi menor que o numero secreto!";
  }
}
