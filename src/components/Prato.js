import React, { useEffect, useState } from "react";

import "../assets/css/main/prato.css";



function Prato() {

  useEffect(()=>{

    const array = JSON.parse(sessionStorage.getItem('pizzas'));

    console.log(array)
 
  })


  

  return (

    (
      <section className="prato-container" id='prato'>
        <div className="prato__items">
          <h2 className="prato__titulo">Pizzas</h2>

       
               
                <>
                  <p className="prato__quantidade">
                    quantidade e sabores: 
                  </p>
                  <p className="prato__price">
                    preço R$ 
                  </p>
                </>
              );
            
          
        
        </div>
        <div className="prato__items">
          <h2 className="prato__titulo">Vegetarianas</h2>
      
                <>
                  <p className="prato__quantidade">
                    quantidade e sabores: 
                    
                  </p>
                  <p className="prato__price">
                    preço R$ 
                  </p>
                </>
            
         
        </div>
 
        <div className="prato__items">
          <h2 className="prato__titulo">Total</h2>
          <p className="prato__quantidade"> </p>
          <p className="prato__price"> R$  </p>
          
          </div>
      </section>
    )
  );
}

export default Prato;
