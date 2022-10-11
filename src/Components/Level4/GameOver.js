import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import {
  getFirestore,
  collection,
  where,
  getDocs,
  query,
} from "firebase/firestore";
import { app } from "../../firebase";
import docty from "../images/Enfermero2.png";
import "./GameOver.css";
export default function GameOver() {
  const [datos, setDatos] = useState([]);
  const db = getFirestore(app);
  const [setError] = useState();
  const { user } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      navigate("/Creditos");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const getDatos = async () => {
      try {
        const q = query(
          collection(db, "user"),
          where("email", "==", user.email)
        );
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push(doc.id, " => ", doc.data());
          setDatos(docs);
        });
      } catch (error) {
        setError(error);
      }
    };
    getDatos();
  });
  return (
    <div class="body-f">
      <div class="container-f">
        <div class="title1">
          Felicidades
          {datos.map((dato) => (
            <div key={dato.id}>
              <span className="span-n">{dato.displayName} </span>
            </div>
          ))}
        </div>
        <div class="content-f">
          <span className="span-f">
            El juego ha terminado, ojala los conocimientos
            adquiridos mediante las dinámicas de este recurso educativo sean de
            ayuda para tus estudios, !Exitos¡   
          </span>
          <span className="span-f">Se despide Docty.</span>
          <img src={docty} alt="" />
          <form onSubmit={handleSubmit}>
            <input type="submit" value="Finalizar" className="button-f" />
          </form>
        </div>
      </div>
    </div>
  );
}
