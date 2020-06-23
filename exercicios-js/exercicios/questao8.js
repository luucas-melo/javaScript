
let pontuacao = "10, 20, 20, 8, 25, 3, 0, 30, 1"
vetor = []
function avaliaPontuacao(pontuacao) {
    pontuacao = pontuacao.split(", ")
    let record = 0
    let maiorPontuacao = pontuacao[0];
    let menorPontuacao = pontuacao[0];
    let pior = 1;
    for (i in pontuacao){
       if (pontuacao[i] > maiorPontuacao){
           maiorPontuacao = pontuacao[i]
           record++;
       }
       else if (pontuacao[i] < menorPontuacao){
           menorPontuacao = pontuacao[i]
           pior = ++i;
       }
    }
    return [record, pior]
}

console.log(avaliaPontuacao(pontuacao))