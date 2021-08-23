import React, { useEffect, useState } from "react";
import "../assets/css/main/pizzas.css";

import { PizzasProducts } from "./Products";

function Pizzas() {
 
  const [frangoCatupiry, setFrangoCatupiry] = useState(  {preco: PizzasProducts[0].preco, quantidade: 0, total:0 })
  const [caipira, setCaipira] = useState(  {preco: PizzasProducts[1].preco, quantidade: 0,total:0 })
  const [peperoni, setPeperoni] = useState(  {preco: PizzasProducts[2].preco, quantidade: 0, total: 0 })

const [pizzas, setPizzas] = useState({sabores:'', quantidade: 0, total:0})




  useEffect(()=>{

    
    const vetorPizzas = JSON.parse(sessionStorage.getItem('pizzas')) || [];

    vetorPizzas.push(pizzas)
  
   
    sessionStorage.setItem('pizzas', JSON.stringify(vetorPizzas))

    
 

    

  } )




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
      setPizzas({...pizzas, sabores: flavorPizzas, quantidade: flavorPizzas.length, total: w(x,y, z) })
      break;

      case'Caipira':
      setCaipira({...objeto2, quantidade:caipiraQtd, total:caipiraTotal})
      flavorPizzas.push('Caipira')

      x.push(frangoCatupiry.total)
      y.push(caipiraTotal)
      z.push(peperoni.total)
      setPizzas({...pizzas, sabores: flavorPizzas, quantidade: flavorPizzas.length, total: w(x,y, z) })
      break;

      case'Peperoni':
      setPeperoni({...objeto3, quantidade:peperoniQtd, total: peperoniTotal})
      flavorPizzas.push('Peperoni')
      x.push(frangoCatupiry.total)
      y.push(caipira.total)
      z.push(peperoniTotal)
      setPizzas({...pizzas, sabores: flavorPizzas, quantidade: flavorPizzas.length, total: w(x,y, z) })
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
          <div className="main__section__item">
            <p className="main__section__texto">{objeto.nome}</p>
            <img src={objeto.img} alt="pizza" className="main__section__img" />
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
              <a
                href="#prato"
                className="main__section__link"
                onClick={() => {
                  window.location.href = "html/#prato";
                }}
              >
                ir para o prato
              </a>{" "}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default Pizzas;
