import React, { useState } from 'react';
import '../assets/css/main/pizzas.css';

import { PizzasProducts } from './Products';





function Pizzas (){

    const [quantidade, setQuantidade] = useState(0);

   
  
    function updateState() {
        let soma = 1;
        
        PizzasProducts.map(atributo => {

            soma +=  atributo.quantidade ;
        })
       
     
        
       

        setQuantidade(soma)

        console.log(`quantidade é ${quantidade}`)
        sessionStorage.setItem('currentPizza',JSON.stringify(quantidade));
        
    }

 function  AddtoPlate1 (e) {
        const btnClicked = e.target.id;
        PizzasProducts[btnClicked].quantidade++

        sessionStorage.setItem('produtos', JSON.stringify( PizzasProducts))
        
     
        updateState();
    }

    
    function  MenuShow() {

        window.location.reload();
        const menu = document.querySelector('.menu-container');
        
       menu.classList.add('modal')

       

        
    }




   










        return (


            <section className='main__section' id="Pizzas" >



                <h2 className="main__section__titulo">Pizzas</h2>


                {PizzasProducts.map(objeto => {

                    return (


                        <div className="main__section__item" >
                            <p className="main__section__texto">{objeto.nome}</p>
                            <img src={objeto.img} alt='pizza' className="main__section__img" />
                            <p className="main__section__price">R$ {objeto.preco}</p>
                            <button className="main__section_btn" id={objeto.id} onClick={AddtoPlate1}>Adicionar ao prato 🍽️ </button>
                            <p> <a href="#prato" className="main__section__link" onClick={()=>{

window.location.href="html/#prato"
}}>ir para o prato</a> </p>
                        </div>
                                  
                             
                             )


                })}

            </section>
        );
    
}

export default Pizzas;