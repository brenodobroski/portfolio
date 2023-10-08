/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import "./Home.scss";
import CardHabilities from "./components/CardHabilities/CardHabilities";
import CardProject from "./components/CardProject/CardProject";

const Home = () => {
  const scrollHeader = () => {
    const element = document.getElementById("s-hero");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }

    console.log("teste");
  };

  const scrollHabilities = () => {
    const element = document.getElementById("s-habilities");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollProjects = () => {
    const element = document.getElementById("s-projects");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  const item = document.querySelectorAll(".header-link");

  item.forEach((nav) => {
    nav.addEventListener("click", (event) => {
      event.preventDefault();

      item.forEach((itemNav) => {
        itemNav.classList.remove("active");
      });

      nav.classList.add("active");
    });
  });

  return (
    <div className="Home" onScroll={handleScroll}>
      <header
        id="header"
        style={{ backgroundColor: scrollTop ? "black" : "transparent" }}
      >
        <div className="left">
          <div className="header-link breno-dobroski">
            <p>
              <a href="">
                breno-dobroski.<span>_</span>
              </a>
            </p>
          </div>
          <div className="header-link hello active">
            <a onClick={scrollHeader} href="">
              <p>// hello</p>
            </a>
          </div>
          <div className="header-link habilities">
            <a onClick={scrollHabilities} href="">
              <p>// habilities</p>
            </a>
          </div>
          <div className="header-link projects">
            <a onClick={scrollProjects} href="">
              <p>// projects</p>
            </a>
          </div>
          <div className="header-link about-me">
            <a href="">
              <p>// about-me</p>
            </a>
          </div>
        </div>
        <div className="right">
          <a href="">
            <p>// contact-me</p>
          </a>
        </div>
      </header>
      <section className="s-hero" id="s-hero">
        <div className="s-hero__text">
          <h3 className="s-hero__toptitle">Ola, eu sou</h3>
          <h1>Breno Dobroski</h1>
          <h2 className="s-hero__subtitle"> &gt; Web developer </h2>

          <div className="s-hero__stats">
            <div className="s-hero__number">
              <h4 className="comment">// meu numero</h4>
              <p>
                <span className="const stat">const</span>{" "}
                <span className="name stat">number</span>{" "}
                <span className="const stat">=</span>{" "}
                <span className="name stat">21 97045-2147</span>{" "}
              </p>
            </div>
            <div className="s-hero__email">
              <h4 className="comment">// email</h4>
              <p>
                <span className="const stat">const</span>{" "}
                <span className="name stat">email</span>{" "}
                <span className="const stat">=</span>{" "}
                <span className="string stat">
                  &ldquo;brenodobroski@gmail.com&ldquo;
                </span>{" "}
              </p>
            </div>
            <div className="s-hero__github">
              <h4 className="comment">// github</h4>
              <p>
                <span className="const stat">const</span>{" "}
                <span className="name stat">github</span>{" "}
                <span className="const stat">=</span>{" "}
                <span className="string stat">
                  <a
                    href="https://github.com/brenodobroski"
                    target="blank"
                    className="github-link"
                  >
                    &ldquo;https://github.com/brenodobroski&ldquo;
                  </a>
                </span>{" "}
              </p>
            </div>
            <div className="s-hero__linkedin">
              <h4 className="comment">// linkedin</h4>
              <p>
                <span className="const stat">const</span>{" "}
                <span className="name stat">linkedin</span>{" "}
                <span className="const stat">=</span>{" "}
                <span className="string stat">
                  <a
                    href="https://linkedin.com/in/brenodobroski"
                    target="blank"
                    className="github-link"
                  >
                    &ldquo;https://linkedin.com/in/brenodobroski&ldquo;
                  </a>
                </span>{" "}
              </p>
            </div>
          </div>

          <button className="scroll-btn">
            <div className="scroll"> </div>
          </button>
        </div>

        <div className="s hero__background">
          <div className="blur"></div>
          <img className="circle" src="./circle.svg" alt="" />
        </div>
      </section>

      <section className="s-habilities" id="s-habilities">
        <h2 className="s-habilities__title">// habilities</h2>
        <div className="cards">
          <CardHabilities
            logo="./react.svg"
            maxWidth="70px"
            title="React"
            desc="React é uma ferramenta poderosissima e que ando buscando melhorar bastante,
comecei a estudar a pouco e estou me aperfeiçoando
"
          />
          <CardHabilities
            logo="./sass.svg"
            maxWidth="85px"
            title="SASS"
            desc="Conheci o SASS no inicio de 2022 e realmente fiquei encantado, venho evoluindo rapidamente na linguagem e sempre me aprimorando, hoje em dia não programo sem."
          />
          <CardHabilities
            logo="./git.svg"
            maxWidth="100px"
            title="GIT"
            desc="Tenho bons conhecimentos de git, criação de branches, pull, push, merge, e tambem conhecimentos de github como pull request, documentações e etc

"
          />
          <CardHabilities
            logo="./node.svg"
            maxWidth="50px"
            title="Node"
            desc="Comecei a estudar Node a pouco mas ja tenho conhecimento de criação de API Rest e estou ainda fazendo cursos sobre
"
          />
          <CardHabilities
            logo="./next.svg"
            maxWidth="30px"
            title="Next"
            desc="Comecei a estudar Next a pouco tempo mas já gostei muito da ferramenta, venho buscando bastante me aperfeiçoar na ferramenta.
"
          />
          <CardHabilities
            logo="./figma.svg"
            maxWidth="100px"
            title="Figma"
            desc="Ja fiz muitos cursos de UI design e gosto muito da ferramenta, domino muito bem e consigo criar designs bem bonitos, este site foi inteiramente feito por mim !
"
          />
        </div>
      </section>

      <section className="s-projects" id="s-projects">
        <h2>// projects</h2>
        <img src="./planet.svg" className="planet" alt="" />

        <div className="cards">
          <CardProject
            title="Redesign Neon"
            img="./neon.svg"
            desc="Tecnologias usadas: HTML/SASS/JS. O site foi completamente adaptado para celular, tablets e computadores, além de utilizar js para criar modais e menus nos botões"
            linkGithub="https://github.com/brenodobroski/neon-project"
            linkSite="https://redesign-neon.vercel.app/"
            circleProject="./circle-project.svg"
          />
          <CardProject
            title="Wallet App"
            img="./walletApp.svg"
            desc="Tecnologias usadas: HTML/CSS/JS.
            Um site para registrar despesas, receitas e mostrar o balanço, conta com tela de autenticação, criação de conta e filtros mensais
            "
            linkGithub="https://github.com/brenodobroski/wallet-app"
            linkSite="https://wallet-app-peach.vercel.app/"
            circleProject="./circle-wallet.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
