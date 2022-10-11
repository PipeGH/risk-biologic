import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Navbar from "../Navbar/Navbar";
import residuos from "../images/residuos.png";
import audio from "../sounds/correct.mp3";
import audio2 from "../sounds/incorrect.mp3";
import audio3 from "../sounds/glosario.mp3";
import { FaArrowCircleDown } from "react-icons/fa";
import {Button} from './Scroll';
import "./Question1.css";

export default function Question1() {
  const itemsFromBackend = [
    { id: "opcion1", content: "En una bolsa roja" },
    { id: "opcion2", content: "No se desechan, se reutilizan" },
    { id: "opcion3", content: "En el guardián" },
    { id: "opcion4", content: "Todas las anteriores" },
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

      if (
        draggableId === "opcion1" &&
        destination.droppableId === "respuestas"
      ) {
        sound2.play();
        setError("¿Estás  seguro?");
        setTimeout(function () {
          setError("");
        }, 1000);
        setColumns({
          ...columns,
        });
        value.val = "incorrecta";
      } else if (
        draggableId === "opcion2" &&
        destination.droppableId === "respuestas"
      ) {
        sound2.play();
        setError("¿Estás  seguro?");
        setTimeout(function () {
          setError("");
        }, 1000);
        setColumns({
          ...columns,
        });
        value.val2 = "incorrecta";
      } else if (
        draggableId === "opcion3" &&
        destination.droppableId === "respuestas"
      ) {
        sound.play();
        setAlert("Correcta");
        setTimeout(function () {
          setAlert("");
        }, 1000);
        value.val3 = "correcta";
      } else if (
        draggableId === "opcion4" &&
        destination.droppableId === "respuestas"
      ) {
        sound2.play();
        setError("¿Estás  seguro?");
        setTimeout(function () {
          setError("");
        }, 1000);
        value.val4 = "incorrecta";
        setColumns({
          ...columns,
        });
      }
    } else {
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
  };
  const [value] = useState(valor);
  const [error, setError] = useState();
  const [alert, setAlert] = useState();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(40);
  const [areDisabled, setAreDisabled] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [stateModal1] = useState(false);

  const sound = new Audio();
  sound.src = audio;
  const sound2 = new Audio();
  sound2.src = audio2;
  const sound3 = new Audio();
  sound3.src = audio3;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      e.preventDefault();
      if (
        value.val === "sin arrastrar" &&
        value.val2 === "sin arrastrar" &&
        value.val3 === "sin arrastrar" &&
        value.val4 === "sin arrastrar"
      ) {
        sound.play();
        window.location.reload();
      } else if (
        (value.val === "incorrecta" || value.val === "sin arrastrar") &&
        (value.val2 === "incorrecta" || value.val2 === "sin arrastrar") &&
        value.val3 === "correcta" &&
        (value.val4 === "incorrecta" || value.val4 === "sin arrastrar")
      ) {
        sound.play();
        window.location.replace("/Question2");
      } else {
        window.location.reload();
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const handleSubmit2 = async (e) => {
    try {
      e.preventDefault();
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
    <div className="body-q1">
      <div class="Navbar-q1">
        <Navbar />
      </div>

      <span>
        {(error && <p class="error-q1">{error}</p>) ||
          (alert && <p class="alert-q1">{alert}</p>)}
      </span>
      <Button className="arrow_down">
        <FaArrowCircleDown
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </Button>
      {!stateModal1 && (
        <>
          <div className="question1">
       
            <p>
              Según la nueva resolución 2184 de 2019 sobre la clasificación de
              residuos hospitalarios, ¿donde se debe desechar las agujas
              previamente contaminadas?
            </p>
            <div>
              <img src={residuos} alt="" />
            </div>
            <div className="time-remaining-q1">
              {!areDisabled ? (
                <h2>
                  Tiempo: {minutes}:{seconds}
                </h2>
              ) : (
                <h3>Se acabó tu tiempo para esta pregunta</h3>
              )}
            </div>
          </div>
          <div className="app-container-q1">
            <DragDropContext
              onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
              {Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <div key={columnId} className="dd-container-q1">
                    <h2>{column.name}</h2>
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
                              className="drag-container-q1"
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
                                          className="drop-container-q1"
                                        >
                                          <span aria-readonly="true">{item.content}</span>
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
                  <div class="button_next1">
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
          className="overlay-q1"
          state={stateModal}
          changeState={setStateModal}
        >
          <div class="container-q1">
            <div class="title1">Retroalimentación</div>
            <div class="content-q1">
              <form onSubmit={handleSubmit}>
                <span className="span-q1">Tu resultado es el siguiente:</span>
                <br />
                <span className="span-q1">En una bolsa roja</span>
                <p>{value.val}</p>
                <span className="span-q1">No se desechan, se reutilizan</span>
                <p>{value.val2}</p>
                <span className="span-q1">En el guardián</span>
                <p>{value.val3}</p>
                <span className="span-q1">Todas las anteriores</span>
                <p>{value.val4}</p>
                <span className="span-q1">
                  Por favor, presiona el siguiente botón.
                </span>
                <input type="submit" value=" Continuar" className="button-q1" />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
