import React, {useState}from "react";
import Nav from "./components/Nav";
import "./assets/css/reset.css";
import "./assets/css/app.css";
import PizzaBD from "./assets/img/pizza_background.jpg";
import Slogan from "./components/Slogan";
import Main from "./components/Main";
import {PizzasProducts, VegProducts} from '../src/components/Products'
import Footer from "./components/Footer";
import '../src/assets/css/footer/footer.css'
function App() {

  const [frangoCatupiry, setFrangoCatupiry] = useState({
    preco: PizzasProducts[0].preco,
    quantidade: 0,
    total: 0,
  });
  const [caipira, setCaipira] = useState({
    preco: PizzasProducts[1].preco,
    quantidade: 0,
    total: 0,
  });

  const [peperoni, setPeperoni] = useState({
    preco: PizzasProducts[2].preco,
    quantidade: 0,
    total: 0,
  });
  const [espinafre, setEspinafre] = useState({
    preco: VegProducts[0].preco,
    quantidade: 0,
    total: 0,
  });
  const [brocolis, setBrocolis] = useState({
    preco: VegProducts[1].preco,
    quantidade: 0,
    total: 0,
  });
  const [cebola, setCebola] = useState({
    preco: VegProducts[2].preco,
    quantidade: 0,
    total: 0,
  });



  const [pizzas, setPizzas] = useState({
    sabores: "",
    quantidade: 0,
    total1: 0,
    total2:0
  });

 

  
  
  return (

    
    <>
      <header
        className="App"
        style={{
          backgroundImage: `url(${PizzaBD})`,
        }
        
        }
      >
        <Nav
         pizzas={pizzas} 
        />
        <Slogan />
      </header>
        <Main
        frangoCatupiry={frangoCatupiry}
        setFrangoCatupiry={setFrangoCatupiry}
        caipira={caipira}
        setCaipira={setCaipira}
        peperoni={peperoni}
        setPeperoni={setPeperoni}
        pizzas={pizzas}
        setPizzas={setPizzas}
        espinafre={espinafre}
        setEspinafre={setEspinafre}
        brocolis={brocolis}
        setBrocolis={setBrocolis}
        cebola={cebola}
        setCebola={setCebola}
        />
        <Footer/>
    </>
  );
}

export default App;
