import { useState } from 'react'

const TestUseState = () => {
    let numero = 10; 
    console.log(numero);  

    const [number, setNumber] = useState(7);
  return (
    <div>
        <h2>Teste de troca de numero sem useState</h2>
        <h3>Valor atual {numero}</h3>
      <button style ={{ backgroundColor: "bluesky", color: "black", marginRight: '5px',  borderRadius: '25px'}} onClick={() => (numero = 20, console.log(numero))}>Trocar</button>

      <h2>Teste de troca de numero com useState</h2>
      <h3>Valor Atual: {number}</h3>
      <button style ={{ backgroundColor: "purple", color: "yellow", marginRight: '5px', borderRadius: '25px'}} onClick={() => {setNumber(number - 1)}}></button>
      <button style ={{ backgroundColor: "purple", color: "yellow", marginRight: '5px', borderRadius: '25px'}} onClick={() => {setNumber(number + 1)}}></button>
      <button style ={{ backgroundColor: "purple", color: "yellow", marginRight: '5px', borderRadius: '25px'}} onClick={() => {setNumber(7)}}>Resetar</button>
    </div>
  )
}

export default TestUseState
