import React, { Component } from 'react';
import "../assets/css/nav/nav.css"
import "../assets/css/slogan/slogan.css"

function Slogan() {


    
        return (  

            <div className="slogan-container">
                <h1 className="slogan__texto"><strong>A</strong> deliciosa pizza assada no forno a lenha!</h1>
                <a href='#Pizzas'><button className="slogan__btn" >Faça seu pedido</button></a> 
            </div>

        );
   
}
 
export default Slogan ;