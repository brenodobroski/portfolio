import "./Home.scss";
import CardHabilities from "./components/CardHabilities/CardHabilities";
import BtnAbout from "./components/btn-about/BtnAbout";

const Home = () => {
  return (
    <div>
      <BtnAbout />
      <CardHabilities
        maxWidth="70px"
        title="React"
        desc="React é uma ferramenta poderosissima e que ando buscando
                  melhorar bastante, comecei a estudar a pouco e estou me
                  aperfeiçoando"
      />
    </div>
  );
};

export default Home;
