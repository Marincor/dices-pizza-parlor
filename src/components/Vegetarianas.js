import React, { useState } from 'react';



import { VegProducts } from './Products';

function Vegetariana() {


    const [quantidade, setQuantidade] = useState(0);

   
  
    function updateState() {
       
        
        let soma = 1;
        
        VegProducts.map(atributo => {

            soma += atributo.quantidade
        })
       
        
        
       

        setQuantidade(soma)
        sessionStorage.setItem('currentVeg',JSON.stringify(quantidade));
        
    }


    function AddtoPlate2 (e) {
        const btnClicked = e.target.id;
        VegProducts[btnClicked].quantidade++

        sessionStorage.setItem('produtosveganos', JSON.stringify(VegProducts));
        console.log(VegProducts)
        console.log(VegProducts[btnClicked])
        updateState();
    }
    





        return ( 
            <section className='main__section veg' id="Veg" >
                <h2 className="main__section__titulo">Vegetarianas</h2>
                {VegProducts.map(objeto => {

                    return (
                    

                    <div className="main__section__item" >
                        <p className="main__section__texto">{objeto.nome}</p>
                        <img src={objeto.img} alt='pizza' className="main__section__img"/>
                        <p className="main__section__price">R$ {objeto.preco}</p>
                        <button className="main__section_btn" id={objeto.id} onClick={AddtoPlate2}>Adicionar ao prato 🍽️</button>
                        <p> <a href="#prato" className="main__section__link" onClick={()=>{

                            window.location.href="html/#prato"
                        }} >ir para o prato</a> </p>
                    </div>



                    )




                })}
            </section>
         );
    
}
 
export default Vegetariana;