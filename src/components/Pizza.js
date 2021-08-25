import React from "react";
import "../assets/css/main/pizzas.css";

import { PizzasProducts } from "./Products";


function Pizzas({setFrangoCatupiry, frangoCatupiry, caipira, setCaipira, peperoni, setPeperoni, pizzas, setPizzas}) {
 


  function requestFood(expression, objeto1, objeto2, objeto3) {

    let frangoQtd = frangoCatupiry.quantidade + 1;
    let frangoTotal = frangoCatupiry.preco *frangoQtd;
  
 
   

    let caipiraQtd = caipira.quantidade + 1;
    let caipiraTotal = caipira.preco * caipiraQtd;

    let peperoniQtd = peperoni.quantidade + 1;
    let peperoniTotal = peperoni.preco * peperoniQtd;
   
    
    let flavorPizzas = pizzas.sabores || [];

  
    
  
     
   
   
 
    let x = [];
    let y = [];
    let z = [];

    
    let w = (a, b, c) => {


      const reducer = (accumulator, currentValue) => JSON.parse(accumulator) + JSON.parse( currentValue);

      const array = [a,b,c] || [];
      
      const arrayReduced = array.reduce(reducer)
      return arrayReduced;

    }
    

   
    switch(expression) {
      case'Frango c/ Catupiry':
      setFrangoCatupiry({...objeto1, quantidade:frangoQtd, total: frangoTotal})
      flavorPizzas.push('Frango c/ Catupiry')
     
      x.push(frangoTotal)
      y.push(caipira.total)
      z.push(peperoni.total)
      setPizzas({...pizzas, sabores: flavorPizzas, quantidade: flavorPizzas.length, total1:  w(x,y, z) })
      break;

      case'Caipira':
      setCaipira({...objeto2, quantidade:caipiraQtd, total:caipiraTotal})
      flavorPizzas.push('Caipira')

      x.push(frangoCatupiry.total)
      y.push(caipiraTotal)
      z.push(peperoni.total)
      setPizzas({...pizzas, sabores: flavorPizzas, quantidade: flavorPizzas.length, total1:w(x,y, z) })
      break;

      case'Peperoni':
      setPeperoni({...objeto3, quantidade:peperoniQtd, total: peperoniTotal})
      flavorPizzas.push('Peperoni')
      x.push(frangoCatupiry.total)
      y.push(caipira.total)
      z.push(peperoniTotal)
      setPizzas({...pizzas, sabores: flavorPizzas, quantidade: flavorPizzas.length, total1: w(x,y, z) })
      break;
      default: console.log('nothing to set')
      break;

    }

    
   
  }
  
  function AddtoPlate1(e){

    const currentPizzaName = e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
  
  
    requestFood(currentPizzaName, frangoCatupiry, caipira, peperoni)

    
  }


  

  
  return (
    <section className="main__section" id="Pizzas">
      <h2 className="main__section__titulo">Pizzas</h2>

      {PizzasProducts.map((objeto) => {
        return (
          <div className="main__section__item" key={Math.random()}>
            <p className="main__section__texto">{objeto.nome}</p>
            <img src={objeto.img} alt={objeto.nome} className="main__section__img" />
            <p className="main__section__price">R$ {objeto.preco}</p>
            <button
              className="main__section_btn"
              id={objeto.id}
              onClick={AddtoPlate1}
            >
              Adicionar ao prato 🍽️{" "}
            </button>
            <p>
              {" "}
              <span
              
                className="main__section__link"
                onClick={() => {
                  window.scroll(0, 10000)
                }}
              >
                ir para o prato
              </span>{" "}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default Pizzas;
