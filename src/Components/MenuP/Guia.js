import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Guia.css";
import pdf from "../../assets/reporte.pdf";
export default function Guia() {
  const navigate = useNavigate();
  const [setError] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      navigate("/Intro1");
    } catch (error) {
      setError(error.message);
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
              <a href={pdf}>
                Tu dispositivo no puede visualizar los PDF, da click aqui para
                descargar
              </a>
            </object>
          </>
        ) : null}
          <form onSubmit={handleSubmit}>
          <div class="button-pdf">
            <input type="submit" value="Continuar" />
          </div>
        </form>
      </div>
    </div>
  );
}
