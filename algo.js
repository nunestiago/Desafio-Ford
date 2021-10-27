const regioes = {
  Norte: { entrada: false, saida: false },
  Nordeste: { entrada: false, saida: false },
  "Centro-Oeste": { entrada: false, saida: false },
  Sudeste: { entrada: false, saida: false },
  Sul: { entrada: false, saida: false },
};

const rotas = [
  ["Norte", "Nordeste"],

  ["Nordeste", "Sudeste"],

  ["Sudeste", "Sul"],
];

function menorRota(routes) {
  let result = 0;
  for (const key in regioes) {
    for (let i = 0; i < routes.length; i++) {
      // Verifica se a rota entra ou sai da região
      if (rotas[i][0] === key) {
        regioes[key].entrada = true;
      }
      if (rotas[i][1] === key) {
        regioes[key].saida = true;
      }
    }

    // Conta as rotas já existentes
    if (regioes[key].entrada === true) {
      result++;
    }
    if (regioes[key].saida === true) {
      result++;
    }
  }
  // Obter quantas rotas não estão conectadas e conectar
  result = Math.ceil((11 - result) / 2);

  console.log(result);
  return result;
}

menorRota(rotas);
