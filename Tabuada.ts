const Tabuada = (numero: number): string => {
  let resultado = `Tabuada do ${numero}:\n`;
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }
  return resultado;
};

console.log(Tabuada(7));
