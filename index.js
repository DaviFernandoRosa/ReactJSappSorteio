import React, { useState } from 'react';
import './estilo.css';

export default function PaginaInicial() {
  const [ numeroAleatorio, setnumeroAleatorio ] = useState(0);

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (21-1) + 1);
    setnumeroAleatorio(novoNumero);
  }

 function limparNumero () {

      setnumeroAleatorio(0);
 }

  return(
    <div className="conteudo-centralizado">
      <h3>Número aleatório:</h3>
      <h1>{numeroAleatorio}</h1>

      <div className='area-botao'>
        <label>
          Click no botão abaixo para gerar um número aleatório:
        </label>

        <button onClick={gerarNumero}>
          Gerar número
        </button>

        <button onClick={limparNumero}>
          Limpar
        </button>

        

      </div>
    </div>
  );
}