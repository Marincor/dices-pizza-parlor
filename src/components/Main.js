import React from 'react';

import '../assets/css/main/main.css'
import Pizzas from './Pizza';
import Vegetariana from './Vegetarianas';
import Prato from './Prato'

function Main () {
    




     

        return (  
            <main className="main-container"> 
                    <Pizzas/>
                    <Vegetariana />
                    <Prato/>
            </main>


        );
    
}
 
export default Main;