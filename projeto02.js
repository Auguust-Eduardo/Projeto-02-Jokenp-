const prompt = require ("prompt-sync")();

console.clear()

/////

let rodadas;
let player;
let pc;
let pontos1 = 0;
let pontos2 = 0;
let repete = "sim";
let arraylista = ["PEDRA", "PAPEL", "TESOURA"];
let regras;
let jogar;

jogo: for (let i = 0; i != rodadas; ) {
  if (repete == "sim") {
    i = 0;
    console.clear()
    console.log('Bem vindo ao Jokenpô!!')
    console.log()
    console.log(`
        - Digite 1 para acessar as regras
        - Aperte a tecla enter para jogar`)
       regras = +prompt()
       while (regras == 1){
         console.clear()
         console.log(`
         Olá Jogador
         Você acaba de acessar as regras, aqui estão elas:

         1- Pedra ganha da tesoura, mas perde para o papel.
         Tesoura ganha do papel, mas perde para a pedra.
         Papel ganha da pedra, mas perde para a tesoura.

         2- A maquina ou o jogador podem ser ganhadores e pode ter um empate.
         
         3- Se durante o jogo o jogador escolher tesoura e a maquina tambem, 
         é considerado um empate e nenhum dos dois jogadores pontuam. `) 
         console.log()
         console.log("Digite - 1 para jogar")
         jogar = +prompt()
         if(jogar == 1 ){
           continue jogo;
         }else{
           console.log("DIGITE - 1 PARA VOLTAR AO JOGO")
         }
       } 
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
          1 - PEDRA
          2 - PAPEL
          3 - TESOURA`);
      let opcao = +prompt();
      while(isNaN(opcao) || (opcao != 1 ) && (opcao != 2) && (opcao != 3)){
        console.log ('ESCOLHA UM NÚMERO DE 1 A 3 !!')  
        console.log()
        console.log(`selecione:
          1 - PEDRA
          2 - PAPEL
          3 - TESOURA`);
             opcao = +prompt();
      }
            if (opcao == 1) {
                (player = 1), (opcao = "PAPEL");
            } else if (opcao == 2) {
                (player = 2), (opcao = "PEDRA");
            } else if (opcao == 3) {
                (player = 3), (opcao = "TESOURA");
              
            }
            console.log()
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
        console.log("Sua pontuação = ", pontos1);
        console.log("Pontuação da máquina = ", pontos2);
        console.log()
        }
    if (pontos1 > pontos2) {
      console.log("O JOGADOR VENCEU COM", pontos1, "pontos!");
    } else if (pontos2 > pontos1) {
      console.log("A MAQUINA VENCEU COM", pontos2, "pontos!");
    } else {
      console.log("EMPATOU!");
    }
    console.log()
    console.log("OTIMA PARTIDA, GOSTARIA DE JOGAR NOVAMENTE?");
    repete = prompt().toLowerCase();
    if (repete == "sim") {
      (i = 0), (pontos1 = 0), (pontos2 = 0);
    } else {
      console.log("Foi muito bom jogar com você, até mais!");
    }
  }
}