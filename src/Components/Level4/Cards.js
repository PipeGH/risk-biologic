import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Navbar from "../Navbar/Navbar";
import "./Cards.css";

function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/html.png", stat: "" },
      { id: 1, img: "/img/html.png", stat: "" },
      { id: 2, img: "/img/css.png", stat: "" },
      { id: 2, img: "/img/css.png", stat: "" },
      { id: 3, img: "/img/js.png", stat: "" },
      { id: 3, img: "/img/js.png", stat: "" },
      { id: 4, img: "/img/scss.png", stat: "" },
      { id: 4, img: "/img/scss.png", stat: "" },
      { id: 5, img: "/img/react.png", stat: "" },
      { id: 5, img: "/img/react.png", stat: "" },
      { id: 6, img: "/img/vue.png", stat: "" },
      { id: 6, img: "/img/vue.png", stat: "" },
      { id: 7, img: "/img/angular.png", stat: "" },
      { id: 7, img: "/img/angular.png", stat: "" },
      { id: 8, img: "/img/nodejs.png", stat: "" },
      { id: 8, img: "/img/nodejs.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const [areDisabled, setAreDisabled] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const navigate = useNavigate();

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

    if (items[current].id === 1 && items[prev].id === 1) {
      value.val = "pareja encontrada 1";
    } else if (items[current].id === 2 && items[prev].id === 2) {
      value.val2 = "pareja encontrada 2";
    } else if (items[current].id === 3 && items[prev].id === 3) {
      value.val3 = "pareja encontrada 3";
    } else if (items[current].id === 4 && items[prev].id === 4) {
      value.val4 = "pareja encontrada 4";
    } else if (items[current].id === 5 && items[prev].id === 5) {
      value.val5 = "pareja encontrada 5 ";
    } else if (items[current].id === 6 && items[prev].id === 6) {
      value.val6 = "pareja encontrada 6 ";
    } else if (items[current].id === 7 && items[prev].id === 7) {
      value.val7 = "pareja encontrada 7 ";
    } else if (items[current].id === 8 && items[prev].id === 8) {
      value.val8 = "pareja encontrada 8";
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
      e.preventDefault();

      if (
        value.val === "sin encontrar" &&
        value.val2 === "sin encontrar" &&
        value.val3 === "sin encontrar" &&
        value.val4 === "sin encontrar" &&
        value.val5 === "sin encontrar" &&
        value.val6 === "sin encontrar" &&
        value.val7 === "sin encontrar" &&
        value.val8 === "sin encontrar" 
      ) {
        setTimeout(function(){
          window.location.reload();
          setMinutes(0);
          setSeconds(40);
          setAreDisabled(false);}, 100);
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
        navigate("/Level1");
        
      } else {
        setTimeout(function(){
            window.location.reload();
            setMinutes(0);
            setSeconds(40);
            setAreDisabled(false);}, 100);
        
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
      </div>
      {stateModal && (
        <div
          className="overlay-l4"
          state={stateModal}
          changeState={setStateModal}
        >
          <div class="popup-l4">
            <div class="title1">Retroalimentacion</div>
            <div class="content-l4">
              <form onSubmit={handleSubmit}>
                <span className="span-l4">Parejas encontradas</span>
                <br />
                <span className="span-l4">Bacterias:</span>
                <p>{value.val}</p>
                <span className="span-l4">Virus:</span>
                <p>{value.val2}</p>
                <span className="span-l4">Hongos:</span>
                <p>{value.val3}</p>
                <span className="span-l4">Sarcoparasitos:</span>
                <p>{value.val4}</p>
                <span className="span-l4">Protozoos y Herlmintos:</span>
                <p>{value.val5}</p>
                <span className="span-l4">Protozoos y Herlmintos:</span>
                <p>{value.val6}</p>
                <span className="span-l4">Protozoos y Herlmintos:</span>
                <p>{value.val7}</p>
                <span className="span-l4">Protozoos y Herlmintos:</span>
                <p>{value.val8}</p>
                <span className="span-l4">
                  Por favor, presiona el siguiente boton.
                </span>
                <input type="submit" value=" Continuar" className="button-l4" />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
