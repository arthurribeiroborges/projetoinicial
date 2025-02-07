import "./NewComponent.css";

const NewComponent = () => {
  const isGerente = true;

  return (
    <div>
      <h1
        style={
          isGerente
            ? { color: "aquamarine", backgroundColor: "black" } //se der verdadeiro
            : { color: "red", backgroundColor: "lightblue" }  //se der falso
        }
      >
        Aqui vem uma estilização
      </h1>

      <p className="nj">Neymar o melhor do mundo</p>
      <img
        src="https://s2.glbimg.com/6IjQk2u0hIO2iIiymoNz5JUNpKY=/560x350/e.glbimg.com/og/ed/f/original/2016/03/15/gettyimages-451112156.jpg"
        alt="Neymar"
      />
      <p
        style={{ color: "purple", fontSize: "40px", backgroundColor: "yellow" }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        assumenda laboriosam quod nobis quam, in perferendis mollitia sunt quo
        quisquam, dolores possimus exercitationem, blanditiis sapiente dolorem
        debitis eligendi quibusdam eos.
      </p>
    </div>
  );
};

export default NewComponent;
