import "./CardProject.scss";

const CardProject = () => {
  return (
    <div className="CardProject">
      <div className="background-blur-project"></div>
      <img
        className="CardProject__circle-project"
        src="./circle-project.svg"
        alt=""
      />
      <div className="CardProject__text">
        <h2 className="CardProject__title">Redesign Neon</h2>
        <img className="CardProject__img" src="./neon.svg" alt="" />

        <div className="background-blur-p">
          <p className="CardProject__p">
            Tecnologias usadas: HTML/SASS/JS. O site foi completamente adaptado
            para celular, tablets e computadores, além de utilizar js para criar
            modais e menus nos botões
          </p>

          <button className=""> Link para o github</button>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
