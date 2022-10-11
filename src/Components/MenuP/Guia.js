<<<<<<< HEAD
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
=======
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
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
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
<<<<<<< HEAD
              <p> Tu dispositivo no puede visualizar los PDF, da click en este link para
                descargar el instructivo del juego</p>
              <a href={pdf}>
                Descargar
=======
              <a href={pdf}>
                Tu dispositivo no puede visualizar los PDF, da click aqui para
                descargar
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
              </a>
            </object>
          </>
        ) : null}
          <form onSubmit={handleSubmit}>
<<<<<<< HEAD
          <div className="button-pdf">
=======
          <div class="button-pdf">
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
            <input type="submit" value="Continuar" />
          </div>
        </form>
      </div>
    </div>
  );
}
