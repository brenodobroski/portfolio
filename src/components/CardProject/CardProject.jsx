import "./CardProject.scss";

const CardProject = () => {
  return (
    <div className="CardProject">
      <h2 className="CardProject__title">Redesign Neon</h2>
      <img src="./neon.svg" alt="" />
      <p className="CardProject__p">
        Tecnologias usadas: HTML/SASS/JS. O site foi completamente adaptado para
        celular, tablets e computadores, além de utilizar js para criar modais e
        menus nos botões
      </p>
    </div>
  );
};

export default CardProject;
