import React from 'react'

const ShowEvents = () => {
    const teste = (e) =>{
        console.log(e)
        console.log("Função externa atividada");
    }
  return (
    <div>
      <button onClick={teste}>Ativar função externa</button>
      <br></br><br />
      <button onClick={() => console.log("Função interna ativada")}>Ativar função interna</button>
    </div>
  )
}

export default ShowEvents
