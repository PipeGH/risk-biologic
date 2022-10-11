import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Navbar from "../Navbar/Navbar";
import preg3 from "../images/lav_manos.jpg";
import audio from "../sounds/correct.mp3";
import audio2 from "../sounds/incorrect.mp3";
import {FaArrowCircleDown} from 'react-icons/fa';
import {Button} from './Scroll';
import "./Question3.css";

export default function Question3() {
  const itemsFromBackend = [
    { id: "opcion1", content: "Mojarse las manos" },
    { id: "opcion2", content: "Aplicar suficiente jabón para cubrir toda la mano." },
    { id: "opcion3", content: "Frotar las palmas entre si." },
    { id: "opcion4", content: "Frotar la palma de la mano derecha contra el dorso de la mano izquierda." },
    { id: "opcion5", content: "Frotar las palmas de las manos entre sí , con los dedos entrelazados." },
    
   
  ].sort(() => Math.random() - 0.5);

  const columnsFromBackend = {
    list1: {
      id: "list",
      name: "Lista de Opciones",
      items: itemsFromBackend,
    },
    respuestas: {
      id: "respuestas",
      name: "Respuestas",
      items: [],
    },
  };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
    if (draggableId === "opcion1" && 
      (destination.droppableId ==="respuestas")&& 
      destination.index === 0) {
        sound.play();
        setAlert("correcta");
        setTimeout(function () {
          setAlert("");
        }, 800);
        

      value.val = "correcta";
    } 
    else if (
      draggableId === "opcion1" &&
      (destination.droppableId ==="respuestas")&& 
      destination.index !== 0
    ) {
      sound2.play();
      setError("¿Estás seguro?");
      setTimeout(function () {
        setError("");
      }, 1000);
      setColumns({
        ...columns,
      });
      value.val = "incorrecta";
    } 
    else if (
    draggableId === "opcion2" && 
    (destination.droppableId ==="respuestas")&& 
    destination.index === 1) {
      sound.play();
      setAlert("correcta");
      setTimeout(function () {
        setAlert("");
      }, 800);
    value.val2 = "correcta";
  } 
    else if (
    draggableId === "opcion2" &&
    (destination.droppableId ==="respuestas")&& 
    destination.index !== 1
    ) {
      sound2.play();
      setError("¿Estás seguro?");
      setTimeout(function () {
        setError("");
      }, 1000);
      setColumns({
        ...columns,
      });
      value.val2 = "incorrecta";
  } 
  else if (
    draggableId === "opcion3" && 
    (destination.droppableId ==="respuestas")&& 
    destination.index === 2) {
      sound.play();
      setAlert("correcta");
      setTimeout(function () {
        setAlert("");
      }, 800);
    value.val3 = "correcta";
  } else if (
    draggableId === "opcion3" &&
    (destination.droppableId ==="respuestas")&& 
    destination.index !== 2
  ) {
    sound2.play();
    setError("¿Estás seguro?");
    setTimeout(function () {
      setError("");
    }, 1000);
    setColumns({
      ...columns,
    });
    value.val3 = "incorrecta";
    }
    else if (
    draggableId === "opcion4" && 
    (destination.droppableId ==="respuestas")&& 
    destination.index === 3) {
      sound.play();
      setAlert("correcta");
      setTimeout(function () {
        setAlert("");
      }, 800);
    value.val4 = "correcta";
  } else if (
    draggableId === "opcion4" &&
    (destination.droppableId ==="respuestas")&& 
    destination.index !== 3
  ) {
    sound2.play();
    setError("¿Estás seguro?");
    setTimeout(function () {
      setError("");
    }, 1000);
    setColumns({
      ...columns,
    });
    value.val4 = "incorrecta";
    }
    else if (
    draggableId === "opcion5" && 
    (destination.droppableId ==="respuestas")&& 
    destination.index === 4) {
      setAlert("correcta");
      sound.play();
      setTimeout(function () {
        setAlert("");
      }, 800);
    value.val5 = "correcta";
  } else if (
    draggableId === "opcion5" &&
    (destination.droppableId ==="respuestas")&& 
    destination.index !== 4
  ) {
    sound2.play();
    setError("¿Estás seguro?");
    setTimeout(function () {
      setError("");
    }, 1000);
    setColumns({
      ...columns,
    });
    value.val5 = "incorrecta";
    }
    
    else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  const [columns, setColumns] = useState(columnsFromBackend);
  const valor = {
    val: "sin arrastrar",
    val2: "sin arrastrar",
    val3: "sin arrastrar",
    val4: "sin arrastrar",
    val5: "sin arrastrar",
  };
  const [value] = useState(valor);
  const [error, setError] = useState();
  const [alert, setAlert] = useState();
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(10);
  const [areDisabled, setAreDisabled] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [stateModal2] = useState(false);

  const sound = new Audio();
  sound.src = audio;
  const sound2 = new Audio();
  sound2.src = audio2;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      e.preventDefault();

      if (
        value.val === "sin arrastrar" &&
        value.val2 === "sin arrastrar" &&
        value.val3 === "sin arrastrar" &&
        value.val4 === "sin arrastrar" &&
        value.val5 === "sin arrastrar"
      ) {
        window.location.reload();
      } else if (
        value.val === "correcta" &&
        value.val2 === "correcta" &&
        value.val3 === "correcta" &&
        value.val4 === "correcta" &&
        value.val5 === "correcta" 
      ) {
        sound.play();
        window.location.replace('/Question4');
      } else {
        sound.play();
        window.location.reload();
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const handleSubmit2 = async (e) => {
    try {
      e.preventDefault();
      setError("");
    } catch (error) {}
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
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes, seconds]);


  const [visible, setVisible] = useState(true);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0){ 
      setVisible(false) 
    }  
    else if (scrolled <= 0){ 
      setVisible(true) 
    } 
  };
  const scrollToTop = () => {
    window.scrollTo({
      top:document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  
  return (
    <div className="body-q3">
      <div className="Navbar-q3">
        <Navbar />
      </div>
      <span>
        {(error && <p className="error-q3">{error}</p>) ||
          (alert && <p className="alert-q3">{alert}</p>)}
      </span>
      <Button>
        <FaArrowCircleDown
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </Button>
      {!stateModal2 && (
        <>
          <div className="question3">
            <p>
              En la iniciativa "Salve Vidas: límpiese las manos", según la
              Organización Mundial de la Salud (OMS) y la Organización
              Panamericana de la salud (OPS) ¿Cual es el orden de los primeros
              5 pasos?

            </p>
            <div>
              <img src={preg3} alt="" />
            </div>
            <div className="time-remaining-q3">
              {!areDisabled ? (
                <h2>
                  Tiempo: {minutes}:{seconds}
                </h2>
              ) : (
                <h3>Se acabó  tu tiempo para esta pregunta</h3>
              )}
            </div>
          </div>
          <div className="app-container-q3">
            <DragDropContext
              onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
              {Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <div key={columnId} className="dd-container-q3">
                    <h3>{column.name}</h3>
                    <div>
                      <Droppable
                        droppableId={columnId}
                        key={columnId}
                        isDropDisabled={areDisabled}
                        direction="horizontal"
                      >
                        {(provided) => {
                          return (
                            <div
                              className="drag-container-q3"
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                            >
                              {column.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    isDragDisabled={areDisabled}
                                  >
                                    {(provided) => {
                                      /*----------------------------------------------------------*/
                                      return (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          className="drop-container-q3"
                                        >
                                          <span aria-readonly="true"
                                    >{item.content}</span>
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                          );
                        }}
                      </Droppable>
                    </div>
                  </div>
                );
              })}
            </DragDropContext>
            <div>
                <form onSubmit={handleSubmit2}>
                  <div className="button_next3">
                    <input
                      type="submit"
                      value=" Continuar"
                      onClick={() => {
                        sound.play();
                        setStateModal(!stateModal);
                      }}
                    />
                  </div>
                </form>
            </div>
          </div>
        </>
      )}

      {stateModal && (
        <div
          className="overlay-q3"
          state={stateModal}
          changeState={setStateModal}
        >
          <div className="container-q3">
            <div className="title1">Retroalimentación</div>
            <div className="content-q3">
              <form onSubmit={handleSubmit}>
                <span className="span-q3">Tu resultado es el siguiente:</span>
                <br />
                <span className="span-q3">Mojarse las manos.</span>
                <p>{value.val}</p>
                <span className="span-q3">Aplicar suficiente jabón para cubrir toda la mano.</span>
                <p>{value.val2}</p>
                <span className="span-q3">Frotar las palmas entre si.</span>
                <p>{value.val3}</p>
                <span className="span-q3">Frotar la palma de la mano derecha contra el dorso de la mano izquierda.</span>
                <p>{value.val4}</p>
                <span className="span-q3">Frotar las palmas de las manos entre sí , con los dedos entrelazados.</span>
                <p>{value.val5}</p>
                <span className="span-q3">
                  Por favor, presiona el siguiente botón.
                </span>
                <input type="submit" value=" Continuar" className="button-q3" />
              </form>    
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
