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
          <a
            target="blank"
            href="https://wa.me/5521970452147?text=Ol%C3%A1%2C+acabei+de+ver+seu+portfolio+e+me+interessei+em+seu+trabalho%2C+pode+me+contar+mais+%3F"
            className="contact-me"
          >
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
            desc="Já possuo algum conhecimento e estou focado em aprimorar minhas habilidades com o React, uma ferramenta incrivelmente poderosa que tenho explorado recentemente.
"
          />
          <CardHabilities
            logo="./sass.svg"
            maxWidth="85px"
            title="SASS"
            desc="Desde o início de 2022, tive a oportunidade de conhecer o SASS, e desde então, fiquei completamente cativado por essa linguagem. Venho progredindo rapidamente em minhas habilidades e, atualmente, não posso imaginar desenvolver sem ela."
          />
          <CardHabilities
            logo="./git.svg"
            maxWidth="100px"
            title="GIT"
            desc="Possuo sólidos conhecimentos em Git, incluindo criação de branches, operações de pull, push, merge, bem como familiaridade com as funcionalidades do GitHub, como pull requests, documentação, entre outras.

"
          />
          <CardHabilities
            logo="./node.svg"
            maxWidth="50px"
            title="Node"
            desc="Embora tenha começado a estudar Node.js recentemente, já adquiri conhecimentos na criação de APIs REST e continuo aprofundando meus conhecimentos por meio de cursos adicionais.
"
          />
          <CardHabilities
            logo="./next.svg"
            maxWidth="30px"
            title="Next"
            desc="Apesar de ter iniciado meus estudos em Next.js há pouco tempo, estou entusiasmado com a ferramenta e estou empenhado em aprimorar minhas habilidades com ela.
"
          />
          <CardHabilities
            logo="./figma.svg"
            maxWidth="100px"
            title="Figma"
            desc="Concluí diversos cursos de design de UI e tenho grande afinidade com essa ferramenta. Tenho domínio sólido e consigo criar designs atrativos. Este site foi totalmente criado por mim!
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
            title="Movie List"
            img="./movie.svg"
            desc="Tecnologias usadas: React/SASS/AXIOS/React Router. O site mostra uma listagem de filmes, com uma pagina de detalhes e campo de busca

            "
            linkGithub="https://github.com/brenodobroski/movie-list"
            linkSite="https://movie-list-flame-one.vercel.app/"
            circleProject="./circle-movie.svg"
          />
        </Carousel>
      </section>

      <section className="s-about-me" id="s-about-me">
        <h2>// About me</h2>
        <p>
          Oi! Eu sou o Breno! Sou estudante de Ciência da Computação
          <br />
          <br /> Comecei minha carreira na área de economia porém tive um
          primeiro contato com a área de tecnologia e me apaixonei, hoje faço
          muitos cursos e ja pude me envolver em alguns projetos que me deram
          conhecimentos como HTML / CSS, Javascript, React, Tailwind, SASS,
          Node.js, SQL e outros como vocês viram acima.
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
