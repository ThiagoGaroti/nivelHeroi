
function updateRangeValue() {
      var range = document.getElementById("inExp"); // Obtém o elemento range
      var outMsg = document.getElementById("outMsg");
      outMsg.textContent = range.value; // Atualiza o texto do span com o valor atual do range
}

function confirmarHeroi() {
      var nomeHeroi = document.getElementById("inNomeHeroi").value; // Obtém o valor do campo de entrada do nome do herói
      var expAdquirida = document.getElementById("inExp").value; // Obtém o valor do campo de entrada da experiência adquirida
      var outMsg = document.getElementById("outMsg");

      var nomeHeroi = inNomeHeroi.value; // Obtém o valor do campo de entrada do nome do herói
      var expAdquirida = parseInt(inExp.value); // Obtém o valor do campo de entrada da experiência adquirida e converte para número inteiro
  
      if (expAdquirida < 1000) {
          outMsg.innerHTML = "O herói " + nomeHeroi + " está no nível de Ferro";
      } else if (expAdquirida >= 1000 && expAdquirida < 2000) {
          outMsg.innerHTML = "O herói " + nomeHeroi + " está no nível de Bronze";
      } else if (expAdquirida >= 2000 && expAdquirida < 5000) {
          outMsg.innerHTML = "O herói " + nomeHeroi + " está no nível de Prata";
      } else if (expAdquirida >= 5000 && expAdquirida < 7000) {
          outMsg.innerHTML = "O herói " + nomeHeroi + " está no nível de Ouro";
      } else if (expAdquirida >= 7000 && expAdquirida < 8000) {
          outMsg.innerHTML = "O herói " + nomeHeroi + " está no nível de Platina";
      } else if (expAdquirida >= 8000 && expAdquirida < 9000) {
          outMsg.innerHTML = "O herói " + nomeHeroi + " está no nível de Ascendente";
      } else if (expAdquirida >= 9000 && expAdquirida < 10000) {
          outMsg.innerHTML = "O herói " + nomeHeroi + " está no nível de Imortal";  
      } else if (expAdquirida == 10000) {
          outMsg.innerHTML = "O herói " + nomeHeroi + " está no nível de Radiante";
      } else {
          outMsg.innerHTML = "Experiência fora do intervalo esperado.";
      }
  }   

      outMsg.innerHTML = "Nome do herói: " + nomeHeroi + "<br>Experiência adquirida: " + expAdquirida;
