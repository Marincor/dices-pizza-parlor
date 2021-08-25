import React from "react";
import { PizzasProducts, VegProducts } from "../components/Products";
import "../assets/css/main/prato.css";

function Prato({ pizzas }) {
  var arr = pizzas.sabores || [];

  function getOccurrence(array, value) {
    return array.filter((v) => v === value).length;
  }

  const qtdFrango = getOccurrence(arr, PizzasProducts[0].nome);
  const qtdCaipira = getOccurrence(arr, PizzasProducts[1].nome);
  const qtdPeperoni = getOccurrence(arr, PizzasProducts[2].nome);
  const qtdEspinafre = getOccurrence(arr, VegProducts[0].nome);
  const qtdBrocolis = getOccurrence(arr, VegProducts[1].nome);
  const qtdCebola = getOccurrence(arr, VegProducts[2].nome);

  const arrayPlate = [
    qtdFrango,
    qtdCaipira,
    qtdPeperoni,
    qtdEspinafre,
    qtdBrocolis,
    qtdCebola,
  ];

  function renderArrayPlate(func) {
    if (func[0] > 0) {
      var flavor1 = `| ${PizzasProducts[0].nome} - ${func[0]} R$ ${
        func[0] * PizzasProducts[0].preco
      } |`;
    }
    if (func[1] > 0) {
      var flavor2 = `| ${PizzasProducts[1].nome} - ${func[1]} R$ ${
        func[1] * PizzasProducts[1].preco
      } | `;
    }
    if (func[2] > 0) {
      var flavor3 = `| ${PizzasProducts[2].nome} - ${func[2]} R$ ${
        func[2] * PizzasProducts[2].preco
      } | `;
    }

    if (func[3] > 0) {
      var flavor4 = `| ${VegProducts[0].nome} - ${func[3]} R$ ${
        func[3] * VegProducts[0].preco
      } | `;
    }
    if (func[4] > 0) {
      var flavor5 = `| ${VegProducts[1].nome} - ${func[4]} R$ ${
        func[4] * VegProducts[1].preco
      } | `;
    }
    if (func[5] > 0) {
      var flavor6 = `| ${VegProducts[2].nome} - ${func[5]} R$ ${
        func[5] * VegProducts[2].preco
      } | `;
    }

    return [
      flavor1 || null,
      flavor2 || null,
      flavor3 || null,
      flavor4 || null,
      flavor5 || null,
      flavor6 || null,
    ];
  }

  function order() {
    if (pizzas.quantidade > 0) {
      const btnOrder = document.querySelector(`#getOrder`);

      btnOrder.addEventListener("click", (event) => {
        event.preventDefault();

        const theBillDiv = document.querySelector(`.prato__items`);
        theBillDiv.innerHTML = `<h2 class='order'>Seu pedido foi finalizado<h2/>`;
      });
    }
  }

  return (
    <section className="prato-container" id="prato">
      <div className="prato__items">
        <h2 className="prato__titulo">Pizzas</h2>

        <>
          quantidade e sabores:{" "}
          {renderArrayPlate(arrayPlate).map((item) => {
            return (
              <p className="prato__quantidade" key={Math.random()}>
                {" "}
                {item}{" "}
              </p>
            );
          })}
        </>
      </div>

      <div className="prato__items">
        <h2 className="prato__titulo">Total</h2>
        <p className="prato__quantidade">{pizzas.quantidade || null} </p>
        <p className="prato__price">
          {" "}
          R$ {pizzas.total1 + pizzas.total2 || null}{" "}
        </p>
        <button className="main__section_btn" id="getOrder">
          Finalizar Pedido
        </button>
        {order()}
      </div>
    </section>
  );
}

export default Prato;
