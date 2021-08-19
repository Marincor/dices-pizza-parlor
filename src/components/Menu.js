import React, { useState } from 'react';
import '../assets/css/menu/menu.css'
import MenuPizza from '../assets/img/menu-pizza_background.jpg'


import Plate from '../assets/img/plate.svg'

function Menu () {

   
  
    
    
  


   

 

   
  
 
    
  let qtd1 =  JSON.parse(sessionStorage.getItem('currentVeg'));
  let qtd2 =  JSON.parse(sessionStorage.getItem('currentPizza'));

  if( qtd1 === 0) {

    qtd1 = 1;
  }
  if( qtd2 === 0) {

    qtd2 = 1;
  }

       

      


    
 
    

     
       

   

 
       
 
        return ( 
           
       
            
            <div className="menu__div"
            style={{
                backgroundImage: `url(${MenuPizza})`,
              }}
                id='menu'
             >
                <div className="menu__item"> <a href="#Pizzas" className="menu__link"><h2 className="menu__item__texto">Pizzas</h2></a> </div>
                <div className="menu__item"> <a href="#Veg" className="menu__link"><h2 className="menu__item__texto" >Vegetarianas</h2></a></div>
                <div className="menu__item"> <a href="/" className="menu__link"><h2 className="menu__item__texto">Sobre</h2></a></div>
                <div className="menu__bask" id="bask"> <img src={Plate} alt='prato-de-compras'/> <span >{qtd1+qtd2}</span></div>
            </div>

           
         );
    
}
 
export default Menu;