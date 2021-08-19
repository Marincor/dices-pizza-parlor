import React, { Component } from 'react';
import '../assets/css/nav/nav.css'
import '../assets/css/nav/menu.css'

import {ReactComponent as PizzaSVG } from '../assets/img/pizza.svg'  

import Menu from './Menu';


function Nav() {


   function  MenuShow() {
        const menu = document.querySelector('.menu-container');
        
       menu.classList.add('modal')

       

        
    }

  function  MenuHidden(e) { 

        const Container =  e.target;
        const ContainerClass = document.querySelector('.menu-container.modal');
        
        
        console.log(e.target)
        if (Container === ContainerClass) {

            ContainerClass.classList.remove('modal')
        }

    }


    
  
 

       

        return (  
            <div className="nav" >
                
                    <a href="/" className="nav__link">Dice's</a>
                
                 <nav className="nav__lateral">
                     <p className="nav__text">Menu</p>
                     <PizzaSVG className='nav__icon' onClick={MenuShow} />
                     <div className='menu-container' onClick={MenuHidden} >
                        <Menu/>
                     </div>
                 </nav>
                
                
            </div>

        );
    
}
 
export default Nav ;