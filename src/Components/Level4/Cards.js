import { useState, useEffect } from "react";
import Card from "./Card";
import Navbar from "../Navbar/Navbar";
import virus from "./../images/virus.png";
import guardian from "./../images/guardian.png";
import bacteria from "./../images/bacteria.png";
import protozoo from "./../images/protozoo.png";
import desinf from "./../images/desinfectante.png";
import tapabocas from "./../images/tapabocas.png";
import lavadom from "./../images/lav_manos3.png";
import vacuna from "./../images/vacuna2.png";
import audio from "../sounds/correct.mp3";
import audio2 from "../sounds/incorrect.mp3";
import "./Cards.css";
export default function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: virus, stat: "" },
      { id: 1, img: virus, stat: "" },
      { id: 2, img: guardian, stat: "" },
      { id: 2, img: guardian, stat: "" },
      { id: 3, img: bacteria, stat: "" },
      { id: 3, img: bacteria, stat: "" },
      { id: 4, img: protozoo , stat: "" },
      { id: 4, img: protozoo , stat: "" },
      { id: 5, img: desinf, stat: "" },
      { id: 5, img: desinf, stat: "" },
      { id: 6, img: tapabocas, stat: "" },
      { id: 6, img: tapabocas, stat: "" },
      { id: 7, img: lavadom, stat: "" },
      { id: 7, img: lavadom, stat: "" },
      { id: 8, img: vacuna, stat: "" },
      { id: 8, img: vacuna, stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(50);
  const [areDisabled, setAreDisabled] = useState(false);
  const [stateModal, setStateModal] = useState(false);

  const valor = {
    val: "sin encontrar",
    val2: "sin encontrar",
    val3: "sin encontrar",
    val4: "sin encontrar",
    val5: "sin encontrar",
    val6: "sin encontrar",
    val7: "sin encontrar",
    val8: "sin encontrar",
  };
  const [value] = useState(valor);
  const sound = new Audio();
  sound.src = audio;
  const sound2 = new Audio();
  sound2.src = audio2;
  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }

    if ( items[prev].id === 1 && items[current].id === 1) {
      value.val = "pareja encontrada 1";
      sound.play();
    }
    else if (items[prev].id === 1 && items[current].id !== 1) {
      value.val = "pareja no encontrada 1";
      sound2.play();
    }
    else if ( items[prev].id === 2 && items[current].id === 2) {
      value.val2 = "pareja encontrada 2";
      sound.play();
    }
    else if (items[prev].id === 2 && items[current].id !== 2) {
      value.val2 = "pareja no encontrada 2";
      sound2.play();
    }
    else if ( items[prev].id === 3 && items[current].id === 3) {
      value.val3 = "pareja encontrada 3";
      sound.play();
    }
    else if (items[prev].id === 3 && items[current].id !== 3) {
      value.val3 = "pareja no encontrada 3";
      sound2.play();
    }
    else if ( items[prev].id === 4 && items[current].id === 4) {
      value.val4 = "pareja encontrada 4";
      sound.play();
    }
    else if (items[prev].id === 4 && items[current].id !== 4) {
      value.val4 = "pareja no encontrada 4";
      sound2.play();
    }
    else if ( items[prev].id === 5 && items[current].id === 5) {
      value.val5 = "pareja encontrada 5";
      sound.play();
    }
    else if (items[prev].id === 5 && items[current].id !== 5) {
      value.val5 = "pareja no encontrada 5";
      sound2.play();
    }
    else if ( items[prev].id === 6 && items[current].id === 6) {
      value.val6 = "pareja encontrada 6";
      sound.play();
    }
    else if (items[prev].id === 6 && items[current].id !== 6) {
      value.val6 = "pareja no encontrada 6";
      sound2.play();
    }
    else if ( items[prev].id === 7 && items[current].id === 7) {
      value.val7 = "pareja encontrada 7";
      sound.play();
    }
    else if (items[prev].id === 7 && items[current].id !== 7) {
      value.val7 = "pareja no encontrada 7";
      sound2.play();
    }
    else if ( items[prev].id === 8 && items[current].id === 8) {
      value.val8 = "pareja encontrada 8";
      sound.play();
    }
    else if (items[prev].id === 8 && items[current].id !== 8) {
      value.val8 = "pareja no encontrada 8";
      sound2.play();
    }
  }
  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {     
      if (
        value.val === "sin encontrar" &&
        value.val2 === "sin encontrar" &&
        value.val3 === "sin encontrar" &&
        value.val4 === "sin encontrar" &&
        value.val8 === "sin encontrar" 
      ) {
        e.preventDefault();
        sound.play();
        window.location.reload();
   
      } else if (
        value.val === "pareja encontrada 1" &&
        value.val2 === "pareja encontrada 2" &&
        value.val3 === "pareja encontrada 3" &&
        value.val4 === "pareja encontrada 4" && 
        value.val5 === "pareja encontrada 5" &&
        value.val6 === "pareja encontrada 6" &&
        value.val7 === "pareja encontrada 7" &&
        value.val8 === "pareja encontrada 8" 
      ) {
        sound.play();
        window.location.replace("/GameOver");  
      } else {
          window.location.reload();   
      }
    } catch (error) {
      error(error.message);
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (minutes !== 0 && seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (minutes === 0 && seconds === 0) {
        setMinutes(0);
        setSeconds(0);
        setAreDisabled(true);
        setStateModal(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds, items]);

  return (
    <div className="body-l4">
      <div className="Navbar-l4">
        <Navbar />
        </div>
        <div className="time-remaining-l4">
          {!areDisabled ? (
            <h2>
              Tiempo: {minutes}:{seconds}
            </h2>
          ) : (
            <h3>Se acabo tu tiempo para esta pregunta</h3>
          )}
        </div>
        <div className="container-l4">
          {items.map((item, index) => (
            <Card
              key={index}
              item={item}
              id={index}
              handleClick={handleClick}
            />
          ))}
        </div>
  
      {stateModal && (
        <div
          className="overlay-l4"
          state={stateModal}
          changeState={setStateModal}
        >
          <div class="popup-l4">
            <div class="title1">Retroalimentación</div>
            <div class="content-l4">
              <form onSubmit={handleSubmit}>
                <span className="span-l4">Parejas a encontrar:</span>
                <br />
                <span className="span-l4">Virus:</span>
                <p>{value.val}</p>
                <span className="span-l4">Guardian:</span>
                <p>{value.val2}</p>
                <span className="span-l4">Bacteria:</span>
                <p>{value.val3}</p>
                <span className="span-l4">Protozoo:</span>
                <p>{value.val4}</p>
                <span className="span-l4">Jabon desinfectante:</span>
                <p>{value.val5}</p>
                <span className="span-l4">Elemento de bioseguridad:</span>
                <p>{value.val6}</p>
                <span className="span-l4">Lavado de manos</span>
                <p>{value.val7}</p>
                <span className="span-l4">Vacuna</span>
                <p>{value.val8}</p>
                <span className="span-l4">
                  Por favor, presiona el siguiente botón.
                </span>
                <input type="submit" value=" Siguiente" className="button-l4" />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

