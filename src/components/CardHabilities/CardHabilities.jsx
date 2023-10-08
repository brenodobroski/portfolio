/* eslint-disable react/prop-types */
import "./CardHabilities.scss";
const CardHabilities = ({ maxWidth, title, desc, logo }) => {
  return (
    <>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <img src={logo} alt="" />

              <div className="background-loader">
                <div
                  className="loader"
                  style={{ maxWidth: `${maxWidth}` }}
                ></div>
              </div>
              <strong className="hover-me">hover me</strong>
            </div>
          </div>
          <div className="front">
            <div className="img"></div>

            <div className="front-content">
              <div className="description">
                <div className="title">
                  <p className="title">
                    <h2>{title}</h2>
                  </p>
                </div>
                <p className="description__p">{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHabilities;
