import { useState } from "react"

const UseList = () => {
    const [lista] = useState(["Pedro", "Tiago", "João"])

    const [usuarios]= useState([
        {id: 1, nome: "Mateus", login:"mateus@gmail.com"},
        {id: 1, nome: "Marcos", login:"marcos@gmail.com"},
        {id: 1, nome: "Joao", login:"joao@gmail.com"}, 
    ])
  return (
    <div>
      <p>Nome: {lista[0]}</p>
      <p>Nome: {lista[1]}</p>
      <p>Nome: {lista[2]}</p>

      <ul>
        {lista.map((valorItem, numeroIndice) => (<li key={numeroIndice}>{valorItem}</li>))}
      </ul>
      <ul>
      {usuarios.map( (user) => ( <h4 key={user.id}> o Nome é: {user.nome} - Seu login é {user.login}</h4>))}
      </ul>
    </div>
  )
}

export default UseList
