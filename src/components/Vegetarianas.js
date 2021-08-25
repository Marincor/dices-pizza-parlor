import React from "react";
import { VegProducts } from "./Products";

function Vegetariana({
  espinafre,
  setEspinafre,
  brocolis,
  setBrocolis,
  cebola,
  setCebola,
  pizzas,
  setPizzas,
})

    


{
 
    
    function requestFood(expression, objeto1, objeto2, objeto3) {

        let espinafreQtd = espinafre.quantidade + 1;
        let espinafreTotal = espinafre.preco *espinafreQtd;
      
     
       
    
        let brocolisQtd = brocolis.quantidade + 1;
        let brocolisTotal = brocolis.preco * brocolisQtd;
    
        let cebolaQtd = cebola.quantidade + 1;
        let cebolaTotal = cebola.preco * cebolaQtd;
       
        
        let flavorPizzas = pizzas.sabores || [];
    
      
        
      
         
       
       
     
        let e = [];
        let b = [];
        let c = [];
    
        
        let r = (e, b, c) => {
    
    
          const reducer = (accumulator, currentValue) => JSON.parse(accumulator) + JSON.parse( currentValue);
    
          const array = [e,b,c] || [];
          const arrayReduced = array.reduce(reducer)
          return arrayReduced;
    
        }
        
    
        switch(expression) {
          case'Espinafre':
          setEspinafre({...objeto1, quantidade:espinafreQtd, total: espinafreTotal})
          flavorPizzas.push('Espinafre')
         
          e.push(espinafreTotal)
          b.push(brocolis.total)
          c.push(cebola.total)
          setPizzas({...pizzas, sabores: flavorPizzas, quantidade: flavorPizzas.length, total2: r(e,b, c) })
          break;
    
          case'Brocolis c/ Aspargo':
          setBrocolis({...objeto2, quantidade:brocolisQtd, total:brocolisTotal})
          flavorPizzas.push('Brocolis c/ Aspargo')
    
          e.push(espinafre.total)
          b.push(brocolisTotal)
          c.push(cebola.total)
          setPizzas({...pizzas, sabores: flavorPizzas, quantidade: flavorPizzas.length, total2: r(e,b, c) })
          break;
    
          case'Cebola roxa c/ Queijo Vegano':
          setCebola({...objeto3, quantidade:cebolaQtd, total: cebolaTotal})
          flavorPizzas.push('Cebola roxa c/ Queijo Vegano')
          e.push(espinafre.total)
          b.push(brocolis.total)
          c.push(cebolaTotal)
          setPizzas({...pizzas, sabores: flavorPizzas, quantidade: flavorPizzas.length, total2: r(e,b, c) })
          break;
          default: console.log('nothing to set')
          break;
    
        }
    
        
       
      }
      
      function AddtoPlate2(e){
    
        const currentPizzaName = e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
      
      
        requestFood(currentPizzaName, espinafre, brocolis, cebola)
    
        
      }
    

  return (
    <section className="main__section veg" id="Veg">
      <h2 className="main__section__titulo">Vegetarianas</h2>
      {VegProducts.map((objeto) => {
        return (
          <div className="main__section__item" key={Math.random()}>
            <p className="main__section__texto">{objeto.nome}</p>
            <img src={objeto.img} alt={objeto.nome} className="main__section__img" />
            <p className="main__section__price">R$ {objeto.preco}</p>
            <button
              className="main__section_btn"
              id={objeto.id}
              onClick={AddtoPlate2}
            >
              Adicionar ao prato 🍽️
            </button>
            <p>
              {" "}
              <span
                href="#prato"
                className="main__section__link"
                onClick={() => {
                    window.scroll(0, 10000);
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

export default Vegetariana;
