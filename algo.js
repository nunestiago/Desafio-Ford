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
      if (rotas[i][0] === key) {
        regioes[key].entrada = true;
      }
      if (rotas[i][1] === key) {
        regioes[key].saida = true;
      }
    }
    if (regioes[key].entrada === true) {
      result++;
    }
    if (regioes[key].saida === true) {
      result++;
    }
  }
  console.log(Math.ceil((10 - result) / 2));
  return result;
}

menorRota(rotas);
