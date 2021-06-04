import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/styles.app";
import moedaSvg from "./assets/dolarhoje.png";
import { useState } from "react";

export function App() {
const [dolar,setDolar] = useState(1);
const [real,setReal] = useState(5.35);
const currentDolar = 5.35;
  
  function dolarToReal(event){
    setDolar(event.target.value);
    setReal(currentDolar*event.target.value);
  }
  function realToDolar(event){
    setReal(event.target.value);
    setDolar(event.target.value/ currentDolar);
  }
  return <>
  <GlobalStyle/>
  <Container>
    <img src={moedaSvg} alt="dolarhoje"/>

    <div>
      <div>
        <span>US$</span>
        <input type="number" value={dolar} min={0} onChange={dolarToReal} />
      </div>
      <span>vale</span>
      <div>
        <span>R$</span>
        <input type="number" value={real} min={0} onChange={realToDolar}/>
      </div>
      <span>hoje</span>
    </div>
  </Container>
  </>;
}
