import { useEffect, useState } from "react";

export default function App() {
  // const [numero, setNumero] = useState(0);
  const [input, setInput] = useState("...");
  
  // function somarNumero(){
    
  //  }
  
  useEffect( () => {
    if(input.length >= 25){
      alert('Você está excedendo a quantidade máxima de caracteres...')
    }

    console.log('mudou aqui');
    
  }, [input])
  
  
  
  
  
  
  
  return (
    <div>
      {/* <p>Somar número: {numero}</p>
      <button onClick={somarNumero()}>Somar</button> */}

      <p>O que está sendo digitado no input: {input}</p>;
      <input onChange={event => setInput(event.target.value)}></input>

    </div>
  );
}

