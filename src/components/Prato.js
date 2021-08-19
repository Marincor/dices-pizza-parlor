import React, { useState } from "react";

import "../assets/css/main/prato.css";

function Prato() {
  const produtosPizza = JSON.parse(sessionStorage.getItem("produtos")) || [
    0,
  ];
  const produtosVeg = JSON.parse(sessionStorage.getItem("produtosveganos")) || [
    0,
  ];

  let somaQtd = 0;
  let somaQtd2 = 0;

  let somaPrice = 0;
  let somaPrice2 = 0;
  

  return (
    console.log(produtosPizza),
    (
      <section className="prato-container" id='prato'>
        <div className="prato__items">
          <h2 className="prato__titulo">Pizzas</h2>

          {produtosPizza.map((objeto) => {
            if (objeto.quantidade !== 0) {

                somaQtd+=objeto.quantidade || 0; 
                somaPrice+=objeto.preco || 0;
              return (
                <>
                  <p className="prato__quantidade">
                    quantidade e sabores: {objeto.nome} - {objeto.quantidade}
                  </p>
                  <p className="prato__price">
                    preço R$ {objeto.preco * objeto.quantidade || '0'}
                  </p>
                </>
              );
            }
          })}
        
        </div>
        <div className="prato__items">
          <h2 className="prato__titulo">Vegetarianas</h2>
          {produtosVeg.map((objeto) => {
           
            if (objeto.quantidade !== 0) {

                somaQtd2+=objeto.quantidade || 0; 
                somaPrice2+=objeto.preco || 0;
              return (
                <>
                  <p className="prato__quantidade">
                    quantidade e sabores: {objeto.nome} - {objeto.quantidade}
                    
                  </p>
                  <p className="prato__price">
                    preço R$ {objeto.preco * objeto.quantidade || '0'}
                  </p>
                </>
              );
            }
          })}
        </div>
 
        <div className="prato__items">
          <h2 className="prato__titulo">Total</h2>
          <p className="prato__quantidade"> {somaQtd + somaQtd2}</p>
          <p className="prato__price"> R$ {somaPrice + somaPrice2} </p>
          
          </div>
      </section>
    )
  );
}

export default Prato;
