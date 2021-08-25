import React from 'react';
import '../assets/css/menu/menu.css'
import MenuPizza from '../assets/img/menu-pizza_background.jpg'


import Plate from '../assets/img/plate.svg'

function Menu ({pizzas}) {


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
                <div className="menu__bask" id="bask"> <img src={Plate} alt='prato-de-compras'/> <span >{pizzas.quantidade}</span></div>
            </div>

           
         );
    
}
 
export default Menu;