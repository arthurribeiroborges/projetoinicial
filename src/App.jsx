import "./App.css";
import MyComponent from "./components/MyComponent";
import NewComponent from "./components/NewComponent";

function App() {
  return (
    <>

    <NewComponent />
    {/* Seu componente deve ser renderizado aqui */}
      <h1>Meu título</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt
        error tenetur ratione eius enim beatae aperiam molestiae quod ipsa ullam
        repellat, quasi necessitatibus adipisci labore nisi odit quidem nihil.
      </p>
      <MyComponent/>
    </>
  );
}

export default App;
