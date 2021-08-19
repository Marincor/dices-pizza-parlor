import React from "react";
import Nav from "./components/Nav";
import "./assets/css/reset.css";
import "./assets/css/app.css";
import PizzaBD from "./assets/img/pizza_background.jpg";
import Slogan from "./components/Slogan";
import Main from "./components/Main";

function App() {


 

  
  
  return (

    
    <>
      <header
        className="App"
        style={{
          backgroundImage: `url(${PizzaBD})`,
        }
        
        }
      >
        <Nav />
        <Slogan />
      </header>
        <Main/>

    </>
  );
}

export default App;
