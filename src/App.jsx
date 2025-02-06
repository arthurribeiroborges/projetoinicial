import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img
            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/games/switch/s/spongebob-krusty-cook-off-switch/description-image"
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/games/switch/s/spongebob-krusty-cook-off-switch/description-image"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Bob Esponja</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        laborum labore reiciendis. Inventore quia autem quidem et fugit tempore
        amet cumque distinctio sint vero placeat ad adipisci repellat, sit
        dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Incidunt voluptatum suscipit commodi omnis totam a, quia, iusto officia
        eius repellendus quos sapiente enim aliquam maiores eos voluptate
        reprehenderit dolorum ipsa.
      </p>
    </>
  );
}

export default App;
