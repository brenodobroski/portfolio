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
            <a onClick={scrollAbout} href="">
              <p>// about-me</p>
            </a>
          </div>
        </div>
        <div className="right">
          <label className="container">
            <input type="checkbox" />
            <div className="checkmark">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>
          <a href="" className="contact-me">
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
            Um site para registrar despesas, receitas e mostrar o balanço, conta com tela de autenticação e filtros mensais
            "
            linkGithub="https://github.com/brenodobroski/wallet-app"
            linkSite="https://wallet-app-peach.vercel.app/"
            circleProject="./circle-wallet.svg"
          />
          <CardProject
            title="Wallet App"
            img="./walletApp.svg"
            desc="Tecnologias usadas: HTML/CSS/JS.
            Um site para registrar despesas, receitas e mostrar o balanço, conta com tela de autenticação e filtros mensais
            "
            linkGithub="https://github.com/brenodobroski/wallet-app"
            linkSite="https://wallet-app-peach.vercel.app/"
            circleProject="./circle-wallet.svg"
          />
        </Carousel>
      </section>

      <section className="s-about-me" id="s-about-me">
        <h2>// About me</h2>
        <p>
          Tenho 21 anos e comecei a migrar para programação em 2021, antes
          cursava economia e decidi largar tudo para me dedicar a essa área que
          sempre sonhei, meu maior objetivo é me tornar um desenvolvedor
          Full-Stack e estou em busca do meu primeiro emprego na área.
        </p>
        <BtnAbout />
      </section>
    </div>
  );
};

export default Home;
