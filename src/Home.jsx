/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import "./Home.scss";
import CardHabilities from "./components/CardHabilities/CardHabilities";
import CardProject from "./components/CardProject/CardProject";
import BtnAbout from "./components/Btn-about/BtnAbout";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Home = () => {
  // ------------------------- JAVASCRIPT ------------------------------

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

  const scrollAbout = () => {
    const element = document.getElementById("s-about-me");
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

  // ---------------------------- HTML --------------------------------

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
              <p># hello</p>
            </a>
          </div>
          <div className="header-link habilities">
            <a onClick={scrollHabilities} href="">
              <p># habilities</p>
            </a>
          </div>
          <div className="header-link projects">
            <a onClick={scrollProjects} href="">
              <p># projects</p>
            </a>
          </div>
          <div className="header-link about-me">
            <a onClick={scrollAbout} href="">
              <p># about-me</p>
            </a>
          </div>
        </div>
        <div className="right">
          <a
            target="blank"
            href="https://wa.me/5521970452147?text=Ol%C3%A1%2C+acabei+de+ver+seu+portfolio+e+me+interessei+em+seu+trabalho%2C+pode+me+contar+mais+%3F"
            className="contact-me"
          >
            <p># contact-me</p>
          </a>
        </div>
      </header>
      <section className="s-hero" id="s-hero">
        <div className="s-hero__text">
          <h3 className="s-hero__toptitle">Ola, eu sou</h3>
          <h1>Breno Dobroski</h1>
          <h2 className="s-hero__subtitle"> &gt; Data Scientist </h2>

          <div className="s-hero__stats">
            <div className="s-hero__number">
              <h4 className="comment"># my number</h4>
              <p>
                <span className="name stat">number</span>{" "}
                <span className="const stat">=</span>{" "}
                <span className="name stat">21 97045-2147</span>{" "}
              </p>
            </div>
            <div className="s-hero__email">
              <h4 className="comment"># email</h4>
              <p>
                <span className="name stat">email</span>{" "}
                <span className="const stat">=</span>{" "}
                <span className="string stat">
                  &ldquo;brenodobroski@gmail.com&ldquo;
                </span>{" "}
              </p>
            </div>
            <div className="s-hero__github">
              <h4 className="comment"># github</h4>
              <p>
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
              <h4 className="comment"># linkedin</h4>
              <p>
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
        <div
          style={{ backgroundColor: scrollTop ? "black" : "transparent" }}
          className="social-links"
        >
          <div id="twitter" className="social-btn flex-center">
            <img src="./github.svg" alt="" />
            <a href="https://github.com/brenodobroski" target="blank">
              @brenodobroski
            </a>
          </div>

          <div id="linkedin" className="social-btn flex-center">
            <img src="./linkedin.svg" alt="" />
            <a href="https://linkedin.com/in/brenodobroski" target="blank">
              in/brenodobroski
            </a>
          </div>

          <div id="github" className="social-btn flex-center">
            <img src="email.svg" alt="" />
            <span>
              brenodobroski <br />
              @gmail.com
            </span>
          </div>
          <div id="github" className="social-btn flex-center">
            <img src="phone.svg" alt="" />
            <span>(21) 97045-2147</span>
          </div>
        </div>

        <div className="s hero__background">
          <div className="blur"></div>
          <img className="circle" src="./circle.svg" alt="" />
        </div>
      </section>

      <section className="s-habilities" id="s-habilities">
        <h2 className="s-habilities__title"># habilities</h2>
        <div className="cards">
          <CardHabilities
            logo="./python.svg"
            maxWidth="100px"
            title="Python"
            desc="Minha principal ferramenta, possuo conhecimento sólido do python e de suas bibliotecas como scikit-learn, pandas e etc.
"
          />
          <CardHabilities
            logo="./sql.svg"
            maxWidth="80px"
            title="SQL"
            desc="Tenho uma boa base e estou evoluindo na utilização do SQL"
          />
          <CardHabilities
            logo="./git.svg"
            maxWidth="100px"
            title="GIT"
            desc="Possuo sólidos conhecimentos em Git, incluindo criação de branches, operações de pull, push, merge, bem como familiaridade com as funcionalidades do GitHub, como pull requests, documentação, entre outras.

"
          />
          <CardHabilities
            logo="./powerbi.svg"
            maxWidth="80px"
            title="Power BI"
            desc="Tenho ótimo conhecimento em Power BI em construções de dashboards interativos, alguns dos projetos estão na aba projects.
"
          />
          <CardHabilities
            logo="./machinelearning.svg"
            maxWidth="50px"
            title="Machine Learning"
            desc="Estou me aperfeiçoando em criação de modelos preditivos e IA utilizando o scikit-learn, atualmente já crio modelos de árvore de decisão com facilidade
"
          />
          <CardHabilities
            logo="./figma.svg"
            maxWidth="100px"
            title="Figma"
            desc="Tenho domínio sólido e consigo criar designs atrativos. Este site foi totalmente criado por mim! Me auxilia na criação de dashboards mais intuitivos para o púbico final.
"
          />
        </div>
      </section>

      <section className="s-projects" id="s-projects">
        <h2># projects</h2>
        <img src="./planet.svg" className="planet" alt="" />

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
          itemClass="carousel-item"
          dotListClass="custom-dot-list-style"
          sliderClass="slider-class"
          removeArrowOnDeviceType="mobile"
        >
          <CardProject
            title="Análise Preditiva de Consumo de Energia Residencial "
            img="./Dashboard BI.svg"
            desc="Projeto de Análise Preditiva ponta a ponta com mais de 2 milhões de registros de consumo de energia residencial utilizando XGBoost
            "
            linkGithub="https://github.com/brenodobroski/Projeto-Semantix/tree/main"
            linkSite="https://github.com/brenodobroski/Projeto-Semantix/tree/main"
            circleProject="./Ellipse 3.svg"
          />
          <CardProject
            title="Previsão de Intenção de Compra em E-commerce"
            img="./matriz confusao.svg"
            desc="Projeto realizado para prever a intenção de compra de um e-commerce utilizando Random Forest atingindo uma acurácia de 89.71%"
            linkGithub="https://github.com/brenodobroski/Previsao-Intencao-de-Compra/tree/main"
            linkSite="https://github.com/brenodobroski/Previsao-Intencao-de-Compra/tree/main"
            circleProject="./Ellipse 4.svg"
          />
          <CardProject
            title="Previsão de Risco de Doenças Cardiovasculares"
            img="./cardio.svg"
            desc="Projeto realizado para prever o risco de doenças cardiovasculares utilizando Pandas, Matplotlib, Regressão Logística e Curva ROC "
            linkGithub="https://github.com/brenodobroski/Projeto-DoencasCardiovasculares/tree/main"
            linkSite="https://github.com/brenodobroski/Projeto-DoencasCardiovasculares/tree/main"
            circleProject="./circle-movie.svg"
          />
        </Carousel>
      </section>

      <section className="s-about-me" id="s-about-me">
        <h2># About me</h2>
        <p>
          Oi! Eu sou o Breno! Sou estudante de Estátistica e Data Science
          <br />
          <br /> Comecei minha carreira na área de finanças muito pelo meu entorno pois meus pais são empresários, porém sempre fui muito próximo da área de T.i e por sempre ter ajudado meus pais nos negócios vi a oportunidade de unir as duas coisas que mais gosto, finanças e t.i,
          atualmente estou cursando Ciência de Dados pela Estácio e também finalizei o curso profissionalizante de Ciência de Dados pela EBAC com mais de 500 horas e 9 meses de duração aonde tive contato com toda a área de dados, desde a limpeza dos dados, processamento, analise profunda com estatística, gráficos utilizando matplotlib, plotly e seaborn e com a criação de modelos de Machine Learning como Regressão Logistica, SVM, RandomForest e XGBoost, anteriormente já tive contato com várias áreas de TI tendo bom conhecimento em front-end, API, Segurança
          e também muitos conhecimentos de estatística como testes de hipótese por exemplo.
          .
        </p>
        <div className="btns">
          <BtnAbout />
          <a
            target="blank"
            href="./Curriculo Breno Dobroski.pdf"
            download="Curriculo Breno Dobroski.pdf"
            className="btn-curriculo"
          >
            <button className="btn-site-project btn-curriculo-true">
              Download curriculo
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
