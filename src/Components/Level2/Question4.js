import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import residuos2 from "../images/residuos2.jpg";
import audio from "../sounds/correct.mp3";
import audio2 from "../sounds/incorrect.mp3";
import "./Question4.css";

export default function Question4() {
  const itemsFromBackend = [
    { id: "opcion1", content: "Bacterias" },
    { id: "opcion2", content: "Virus" },
    { id: "opcion3", content: "Hongos" },
    { id: "opcion4", content: "Sarcoparasitos",},
    { id: "opcion5", content: "Protozoos y Helmintos",
    },
  ];

  const columnsFromBackend = {
    list: {
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
        sound.play();
        setAlert("correcta");
        setTimeout(function () {
          setAlert("");
        }, 800);
        value.val = "correcta";
        
      }
      else if (
        draggableId === "opcion1" &&
        destination.droppableId !== "respuestas"
      ) {
        sound2.play();
        setError("¿Estas seguro?");
        setTimeout(function () {
          setError("");
        }, 1000);
        setColumns({
            ...columns,
          });
      }  
      else if (
        draggableId === "opcion2" &&
        destination.droppableId === "respuestas"
      ) {
        sound.play();
        setAlert("correcta");
        setTimeout(function () {
          setAlert("");
        }, 800);
        value.val2 = "correcta";
      } 
      else if (
        draggableId === "opcion2" &&
        destination.droppableId !== "respuestas"
      ) {
        sound2.play();
        setError("¿Estas seguro?");
        setTimeout(function () {
          setError("");
        }, 1000);
        setColumns({
            ...columns,
          });
      }  
      else if (
        draggableId === "opcion3" &&
        destination.droppableId === "respuestas"
      ) {
        sound.play();
        setAlert("correcta");
        setTimeout(function () {
          setAlert("");
        }, 800);
        value.val3 = "correcta";
      } 
      else if (
        draggableId === "opcion3" &&
        destination.droppableId !== "respuestas"
      ) {
        sound2.play();
        setError("¿Estas seguro?");
        setTimeout(function () {
          setError("");
        }, 1000);
        setColumns({
            ...columns,
          });
      }  
      else if (
        draggableId === "opcion4" &&
        destination.droppableId === "respuestas"
      ) {
        sound2.play();
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
      )  {
        sound.play();
        setAlert("correcta");
        setTimeout(function () {
          setAlert("");
        }, 800);
        value.val5 = "correcta";
      } 
      else if (
        draggableId === "opcion5" &&
        destination.droppableId !== "respuestas"
      ) {
        sound2.play();
        setError("¿Estas seguro?");
        setTimeout(function () {
          setError("");
        }, 1000);
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
    val5: "sin arrastrar",
  };
  const [value] = useState(valor);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [alert, setAlert] = useState();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(50);
  const [areDisabled, setAreDisabled] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [stateModal4] = useState(false);

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
        sound.play();
        setStateModal(!stateModal);
        setMinutes(0);
        setSeconds(50);
        setAreDisabled(false);
      } else if (
        value.val === "correcta" &&
        value.val2 === "correcta" &&
        value.val3 === "correcta" &&
        (value.val4 === "correcta" ||
         value.val4 === "incorrecta" ||
         value.val4 === "sin arrastrar") &&
        value.val5 === "correcta" 
      ) {
        sound.play();
        navigate("/Level3");
        setStateModal(!stateModal);
      } else {
        sound.play();
        setTimeout(function(){
            window.location.reload();
            setMinutes(0);
            setSeconds(50);
            setAreDisabled(!stateModal);}, 100);
        
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

  itemsFromBackend.sort(() => Math.random() - 0.5);
  return (
    <div className="body-q4">
      <div class="Navbar-q4">
        <Navbar />
      </div>
      <span>
        {(error && <p class="error-q4">{error}</p>) ||
          (alert && <p class="alert-q4">{alert}</p>)}
      </span>
      {!stateModal4 && (
        <>
          <div className="question4">
            <p>
              Se considera riesgo biológico a la posible exposición a
              microorganismos que puedan dar lugar a enfermedades, dentro del
              entorno laboral existiendo transmisión por vía respiratoria,
              digestiva, sanguínea, piel o mucosas. Teniendo en cuenta lo
              anterior, mencione 4 tipos de agentes biológicos existentes.
            </p>
            <div>
              <img src={residuos2} alt="" />
            </div>
            <div className="time-remaining">
              {!areDisabled ? (
                <h2>
                  Tiempo: {minutes}:{seconds}
                </h2>
              ) : (
                <h3>Se acabo tu tiempo para esta pregunta</h3>
              )}
            </div>
          </div>
          <div className="app-container-q4">
            <DragDropContext
              onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
              {Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <div key={columnId} className="dd-container-q4">
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
                              className="drag-container-q4"
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
                                          className="drop-container-q4"
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
                <form onSubmit={handleSubmit2}>
                  <div class="button_next4">
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
          className="overlay-q4"
          state={stateModal}
          changeState={setStateModal}
        >
          <div class="container-q4">
            <div class="title1">Retroalimentacion</div>
            <div class="content-q4">
              <form onSubmit={handleSubmit}>
                <span className="span-q4">Tu resultado es el siguiente:</span>
                <br />
                <span className="span-q4">
                  Bacterias:
                </span>
                <p>{value.val}</p>
                <span className="span-q4">
                  Virus:
                </span>
                <p>{value.val2}</p>
                <span className="span-q4">
                  Hongos:
                </span>
                <p>{value.val3}</p>
                <span className="span-q4">
                  Sarcoparasitos:
                </span>
                <p>{value.val4}</p>
                <span className="span-q4">
                  Protozoos y Herlmintos:
                </span>
                <p>{value.val5}</p>
                <span className="span-q4">
                  Por favor, presiona el siguiente boton.
                </span>
                <input type="submit" value=" Continuar" className="button-q4" />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
