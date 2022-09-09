import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import preg2 from "../images/preg2.jpg"
import audio  from "./clock.mp3";
import audio2  from "./correct.mp3";
import "./Question2.css";

export default function Question2() {
 
  const itemsFromBackend = [
    { id: "opcion1", content: "Antes del contacto directo con el paciente" },
    { id: "opcion2", content: "Antes de realizar una tarea limpia o aséptica" },
    { id: "opcion3", content: "Después de exposición a fluidos corporales" },
    { id: "opcion4", content: "Después de estar en contacto con el entorno del paciente"},
    { id: "opcion5", content: "Después de realizar una tarea limpia o aséptica"},
    { id: "opcion6", content: "Después de contacto con el paciente"}
  ];

  const columnsFromBackend = {
    list1: {
      id: "list",
      name: "Lista de Opciones",
      items: itemsFromBackend,
    },
    respuestas: {
      id: "respuestas",
      name: "respuestas",
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
        setError("¿Estas seguro?");
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
        
        setError("¿Estas seguro?");
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
        setError("¿Estas seguro?");
        setTimeout(function () {
          setError("");
        }, 1000);
        value.val3 = "incorrecta";
        setColumns({
          ...columns,
        });
      }
        else if (
        draggableId === "opcion4" &&
        destination.droppableId === "respuestas"
      ) {
        setError("¿Estas seguro?");
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
        destination.droppableId === "respuestas"
      ) {
        setAlert("correcta");
        sound2.play();
        setTimeout(function () {
          setAlert("");
        }, 800);
        value.val5 = "correcta";
      } else if (
        draggableId === "opcion5" &&
        destination.droppableId === "list"
      ) {
        setError("¿Estas seguro?");
        setTimeout(function () {
          setError("");
        }, 1000);
        setColumns({
          ...columns,
        });
        setError("¿Estas seguro?");
        setTimeout(function () {
          setError("");
        }, 1000);
      }
      else if (
        draggableId === "opcion6" &&
        destination.droppableId === "respuestas"
      ) {
        setError("¿Estas seguro?");
        setTimeout(function () {
          setError("");
        }, 1000);
        setColumns({
          ...columns,
        });
        value.val6 = "incorrecta";
      } 
  }else {
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
    val6: "sin arrastrar"
  };
  const [value] = useState(valor);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [alert, setAlert] = useState();
  const [minutes, setMinutes] = useState(0);
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
        value.val5 === "sin arrastrar" &&
        value.val6 === "sin arrastrar"
      ) {
        sound2.play();
        setStateModal(!stateModal);
        setMinutes(0);
        setSeconds(10);
        setAreDisabled(false);
      } else if (
        (value.val === "incorrecta" ||
        value.val === "sin arrastrar") &&
        (value.val2 === "incorrecta" ||
        value.val2 === "sin arrastrar") &&
        (value.val3 === "incorrecta" ||
        value.val3 === "sin arrastrar") &&
        (value.val4 === "incorrecta" ||
        value.val4 === "sin arrastrar") &&
        value.val5 === "correcta" &&
        (value.val6 === "incorrecta" ||
        value.val6 === "sin arrastrar")
       ){
        sound2.play();
        navigate("/Question3");
        setStateModal(!stateModal);
      } else {
        sound2.play();
        navigate("/Feedback2");
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

  if (minutes === 0 && seconds === 59) {
    sound.play();
  }
  if (minutes === 0 && seconds === 0) {
    sound.playing = false;
  }
  itemsFromBackend.sort(() => Math.random() - 0.5);
  return (
    <div className="body-q2">
      <div class="Navbar-q2">
        <Navbar />
      </div>
      <span>
        {(error && <p class="error-q2">{error}</p>) ||
          (alert && <p class="alert-q2">{alert}</p>)}
      </span>
      {!stateModal2 && (
        <>
          <div className="question2">
            <p>
            Teniendo en cuenta los 5 momentos del lavado de manos, seleccione el que NO
            pertenece a estos.
            </p>
            <div><img src={preg2} alt="" /></div>
            <div className="time-remaining">
              {!areDisabled ? (
                <h2>
                  Tiempo: {minutes}:{seconds}
                </h2>
              ) : (
                <h3>
                  Se acabo tu tiempo para esta pregunta
                </h3>
              )}
            </div>
            
          </div>
          <div className="app-container-q2">
            <DragDropContext
              onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
              {Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <div key={columnId} className="dd-container-q2">
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
                              className="drag-container-q2"
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
                                          className="drop-container-q2"
                                        >
                                          <span>{item.content}</span>
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
              {!areDisabled ? (
                <form onSubmit={handleSubmit2}>
                  <div class="button_next2">
                    <input
                      type="submit"
                      value=" Continuar"
                      disabled={areDisabled}
                    />
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit2}>
                  <div class="button_next2">
                    <input
                      type="submit"
                      value=" Continuar"
                      onClick={() => {
                        sound2.play();
                        setStateModal(!stateModal);
                      }}
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
        </>
      )}

      {stateModal && (
        <div
          className="overlay-q2"
          state={stateModal}
          changeState={setStateModal}
        >
          <div class="container-q2">
            <div class="title1">Retroalimentacion</div>
            <div class="content-q2">
              <form onSubmit={handleSubmit}>
                <span className="span-q2">Tu resultado es el siguiente:</span>
                <br />
                <span className="span-q2">Antes del contacto directo con el paciente:</span>
                <p>{value.val}</p>
                <span className="span-q2">Antes de realizar una tarea limpia o aséptica:</span>
                <p>{value.val2}</p>
                <span className="span-q2">Después de exposición a fluidos corporales:</span>
                <p >{value.val3}</p>
                <span className="span-q2">Después de estar en contacto con el entorno del paciente:</span>
                <p >{value.val4}</p>
                <span className="span-q2">Después de realizar una tarea limpia o aséptica:</span>
                <p className="correct">{value.val5}</p>
                <span className="span-q2">Después de contacto con el paciente:</span>
                <p className ="valor">{value.val6}</p>
                <span className="span-q2">
                  Por favor, presiona el siguiente boton.
                </span>
                <input type="submit" value=" Continuar" className="button-q2" />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
