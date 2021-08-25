import React from "react";

import "../assets/css/main/main.css";
import Pizzas from "./Pizza";
import Vegetariana from "./Vegetarianas";
import Prato from "./Prato";


function Main({setFrangoCatupiry, frangoCatupiry, caipira, setCaipira, peperoni, setPeperoni, pizzas, setPizzas, espinafre, setEspinafre, brocolis,setBrocolis, cebola, setCebola}) {
  

  return (
    <main className="main-container">
      <Pizzas
        frangoCatupiry={frangoCatupiry}
        setFrangoCatupiry={setFrangoCatupiry}
        caipira={caipira}
        setCaipira={setCaipira}
        peperoni={peperoni}
        setPeperoni={setPeperoni}
        pizzas={pizzas}
        setPizzas={setPizzas}
      />
      <Vegetariana 
        espinafre={espinafre}
        setEspinafre={setEspinafre}
        brocolis={brocolis}
        setBrocolis={setBrocolis}
        cebola={cebola}
        setCebola={setCebola}
        pizzas={pizzas}
        setPizzas={setPizzas}

      />
      <Prato pizzas={pizzas} />
    </main>
  );
}

export default Main;
