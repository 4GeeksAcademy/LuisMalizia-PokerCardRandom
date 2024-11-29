let pintas = ["♦", "♥", "♠", "♣"];
let valor = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let poker = [pintas, valor];
let cartaRandom = [];

window.onload = function() {
  for (let i = 0; i < poker.length; i++) {
    let randomnumber = Math.floor(Math.random() * poker[i].length);
    for (let index = 0; index < 1; index++) {
      cartaRandom.push(poker[i][randomnumber]);
      console.log(cartaRandom);
    }
  }
  // Aqui asigno el color
  let color = "";
  if (cartaRandom[0] == "♦") {
    color = "red";
  } else if (cartaRandom[0] == "♥") {
    color = "red";
  }
  // Aqui imprime lo anterior en el HTML
  document.querySelector(".card").innerHTML = `      
      <div class="cardTop" style = "color:${color}">${cartaRandom[0]}</div>
      <div class="cardNumero">${cartaRandom[1]}</div>
      <div class="cardBottom" style = "color:${color}">${cartaRandom[0]}</div>`;
};
