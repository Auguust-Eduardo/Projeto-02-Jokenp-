const prompt = require ("prompt-sync")();

console.clear()

/////

let rodadas;
let player;
let pc;
let pontos1 = 0;
let pontos2 = 0;
let repete = "sim";
let arraylista = ["Pedra", "Papel", "Tesoura"]

for (let i = 0; i != rodadas; ) {
  if (repete == "sim") {
    i = 0;
    console.log("Digite o número de rodadas que você quer jogar:");
    rodadas = +prompt();
    while (i != rodadas) {
      let resp = Math.floor(3 * Math.random());
      if (resp == 1) {
        (pc = 1), (resp = "PAPEL");
      } else if (resp == 2) {
        (pc = 2), (resp = "PEDRA");
      } else if (resp == 0) {
        (pc = 3), (resp = "TESOURA");
      }
      console.log()
      console.log(arraylista)
      console.log()
      console.log(`selecione:
1 - papel
2 - pedra
3 - tesoura`);
      let opcao = +prompt();
      while(isNaN(opcao) || (opcao != 1 ) && (opcao != 2) && (opcao != 3)){
        console.log ('ESCOLHA UM NÚMERO DE 1 A 3 !!')  
        console.log()
        console.log(`selecione:
1 - papel
2 - pedra
3 - tesoura`);
             opcao = +prompt();
      }
            if (opcao == 1) {
                (player = 1), (opcao = "PAPEL");
            } else if (opcao == 2) {
                (player = 2), (opcao = "PEDRA");
            } else if (opcao == 3) {
                (player = 3), (opcao = "TESOURA");
            }
            console.log("Você:", opcao, "'vs'", "Maquina:", resp);
            console.log()
            if (player == 3 && pc == 1) {
                pontos1++, i++;
            } else if (pc == 3 && player == 1) {
                pontos2++, i++;
            } else if (player < pc) {
                pontos1++, i++;
            } else if (pc < player) {
                pontos2++, i++;
            } else if (pc == player) {
                i++;
            }
        console.log("Sua pontuação= ", pontos1);
        console.log("Minha pontuação= ", pontos2);
        console.log()
        }
    if (pontos1 > pontos2) {
      console.log("O JOGADOR VENCEU COM", pontos1, "pontos!");
      console.log();
    } else if (pontos2 > pontos1) {
      console.log("A MAQUINA VENCEU COM", pontos2, "pontos!");
      console.log();
    } else {
      console.log("EMPATOU!");
      console.log;
    }
    console.log("OTIMA PARTIDA, GOSTARIA DE JOGAR NOVAMENTE?");
    repete = prompt();
    if (repete == "sim") {
      (i = 0), (pontos1 = 0), (pontos2 = 0);
    } else {
      console.log("Foi muito bom jogar com você, até mais!");
    }
  }
}