import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary container-fluid">
      <div className="row align-items-center">
        <div className="col m-5">
          <p className="fs-6 text-light">
            Dirección: Av. Leandro N. Alem 232. CABA. Código Postal: C1002ABE
          </p>
        </div>
        <div className="col text-center">
          <p>
            <a className="m-1" href="https://www.facebook.com/camaraelectoral/" target="blank">
              <img
                src="https://www.electoral.gob.ar/nuevo/img/icono_face.png"
                onmouseover="this.src='https://www.electoral.gob.ar/nuevo/img/icono_face_HOVER.png'"
                onmouseout="this.src='https://www.electoral.gob.ar/nuevo/img/icono_face.png'"
                alt=""
              />
            </a>
            <a
              className="m-1" href="https://twitter.com/camaraelectoral?lang=es"
              target="blank"
            >
              <img
                src="https://www.electoral.gob.ar/nuevo/img/icono_tw.png"
                onmouseover="this.src='https://www.electoral.gob.ar/nuevo/img/icono_tw_HOVER.png'"
                onmouseout="this.src='https://www.electoral.gob.ar/nuevo/img/icono_tw.png'"
              />
            </a>
            <a
              className="m-1" href="https://www.youtube.com/channel/UCRWTpSSNFDgtGuYphlUBOjA"
              target="blank"
            >
              <img
                src="https://www.electoral.gob.ar/nuevo/img/icono_YOUTUBE.png"
                onmouseover="this.src='https://www.electoral.gob.ar/nuevo/img/icono_YOUTUBE_HOVER.png'"
                onmouseout="this.src='https://www.electoral.gob.ar/nuevo/img/icono_YOUTUBE.png'"
              />
            </a>
            <a
              className="m-1" href="https://www.instagram.com/camaraelectoral/?hl=es-la"
              target="blank"
            >
              <img
                src="https://www.electoral.gob.ar/nuevo/img/icono_INSTAG.png"
                onmouseover="this.src='https://www.electoral.gob.ar/nuevo/img/icono_INSTAG_HOVER.png'"
                onmouseout="this.src='https://www.electoral.gob.ar/nuevo/img/icono_INSTAG.png'"
              />
            </a>
          </p>
        </div>
        <div className="col text-end">
          <a>
            <img
              src="https://www.electoral.gob.ar/nuevo/img/logo_cne_blanco_pie.png"
              alt="cne"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
