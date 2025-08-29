# 📘 Projeto Tabuada em TypeScript

Este projeto implementa uma função simples em **TypeScript** que gera a tabuada de um número qualquer.  
O objetivo é demonstrar conceitos básicos da linguagem, como **tipagem**, **funções arrow**, **loops** e **template strings**.

---

## 🚀 Como funciona o código

```ts
// Função que gera a tabuada de um número
const Tabuada = (numero: number): string => {
  // Variável que acumula o texto da tabuada
  let resultado = `Tabuada do ${numero}:\n`;

  // Laço for que multiplica o número de 1 até 10
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }

  // Retorna a string completa
  return resultado;
};

// Exibe no console a tabuada do número 7
console.log(Tabuada(7));
