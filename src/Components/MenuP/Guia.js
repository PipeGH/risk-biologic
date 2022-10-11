import React from "react";
import { useNavigate } from "react-router-dom";
import "./Guia.css";
import pdf from "../../docs/prueba.pdf";
export default function Guia() {
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      navigate(-1);
    } catch (error) {
      Error(error.message);
    }
  };

  return (
    <div className="body-pdf">
      <div className="container-pdf">
        {pdf ? (
          <>
            <object
              data={pdf}
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <p> Tu dispositivo no puede visualizar los PDF, da click en este link para
                descargar el instructivo del juego</p>
              <a href={pdf}>
                Descargar
              </a>
            </object>
          </>
        ) : null}
          <form onSubmit={handleSubmit}>
          <div className="button-pdf">
            <input type="submit" value="Continuar" />
          </div>
        </form>
      </div>
    </div>
  );
}
