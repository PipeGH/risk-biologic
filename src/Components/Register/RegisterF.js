import { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  where,
  getDocs,
  query
} from "firebase/firestore";
import { app } from "../../firebase";
import "./RegisterF.css";
import enfermera from "../images/Enfermera3.png";
import enfermera2 from "../images/Enfermera2.png";
import enfermero from "../images/Enfermero3.png";
import enfermero2 from "../images/Enfermero2.png";

export default function RegisterF (){
  const valorInicial = {
    email: "",
    displayName: "",
    img_jugador: "",
  };
  let img = [
    enfermero,
    enfermera,
    enfermero2,
    enfermera2,

  ];
  
  const [jugador, setJugador] = useState(valorInicial);
  const [setDatos] = useState([]);
  const db = getFirestore(app);
  const [error, setError] = useState();
  const [selectedPlayer, setSelectedPlayer] = useState({ checked: null });

  const { user } = useAuth();

  

  const handleChange = ({ target: { name, value } }) => {
    setJugador({ ...jugador, [name]: value });
    setSelectedPlayer({ ...selectedPlayer, checked: value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (jugador.email === user.email) {
      try {
        await addDoc(collection(db, "user"), {
          ...jugador,
          ...selectedPlayer,
        });
        navigate("../MenuP");
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("Correos diferentes. Intentelo nuevamente.");
      setTimeout(function () {
        setError("");
      }, 800);
      navigate("/RegisterF");
      setTimeout(function () {
        window.location.reload();
      }, 800);
      setJugador({ ...valorInicial });
      setSelectedPlayer({ ...valorInicial });
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
        console.log(error);
      }
    };
    getDatos();
  },);

  return (
      <div className="body-rf">
        <div className="error1">
          {error && <p className="alert1">{error}</p>}
          <br />
          <div className="container-rf">
            <div className="title2">Bienvenido</div>
            <div className="content-rf">
              <form onSubmit={handleSubmit}>
                <div className="user-details-rf">
                  <div className="input-box-rf">
                    <span className="details-rf">
                      Confirma tu Correo Electronico
                    </span>
                    <input
                      type="text"
                      name="email"
                      placeholder="ejemplo@email.com"
                      required
                      onChange={handleChange}
                      value={jugador.email}
                    />
                  </div>
                  <div className="input-box-rf">
                    <span className="details-rf">Nombre de Jugador</span>
                    <input
                      className="name"
                      type="text"
                      name="displayName"
                      placeholder="Nickname"
                      required
                      onChange={handleChange}
                      value={jugador.displayName}
                    />
                  </div>
                </div>
                <div className="radio-details-rf">
                  <span className="radio-title-rf">Selecciona Jugador</span>
                  <div className="category">
                    <label>
                      <span className="dot one"></span>
                      <input
                        type="radio"
                        name="img_jugador"
                        value={img[0]}
                        checked={selectedPlayer.checked === img[0]}
                        onChange={handleChange}
                      />
                      Enfermero
                      <img src={img[2]} alt="" width="100px" height="80px" />
                    </label>
                    <label>
                      <span className="dot two"></span>
                      <input
                        type="radio"
                        name="img_jugador"
                        value={img[1]}
                        checked={selectedPlayer.checked === img[1]}
                        onChange={handleChange}
                      />
                      Enfermera
                      <img src={img[3]} alt="" width="100px" height="80px" />
                    </label>
                  </div>
                </div>
                  <input type="submit" value="Guardar"  className="button1"/>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};
