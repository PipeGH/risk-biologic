import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import papelh from "../images/papelh.png";
import carton from "../images/carton.png";
import botella from "../images/botella.png";
import vaso from "../images/vaso.png";
import manzana from "../images/manzana.png";
import cascara from "../images/cascara.png";
import jeringa from "../images/jeringa.png";
import guantes from "../images/guantes.png";
import gasa from "../images/gasa.png";
import Navbar from "../Navbar/Navbar";
import "./Level3.css";

export default function Level3() {
 
  const itemsFromBackend = [
    { id: "residuo1", content: papelh },
    { id: "residuo2", content: vaso },
    { id: "residuo3", content: carton },
    { id: "residuo4", content: botella },
    { id: "residuo5", content: jeringa },
    { id: "residuo6", content: guantes },
    { id: "residuo7", content: gasa },
    { id: "residuo8", content: manzana },
    { id: "residuo9", content: cascara },
  ].sort(() => Math.random() - 0.5)
  const columnsFromBackend = {
    list: {
      id: "list",
      name: "Lista de Residuos",
      items: itemsFromBackend,
    },
    NoAprovOrd: {
      id: "NoAprovOrd",
      name: "No Aprovechables",
      items: [],
    },
    aprovechables: {
      id: "aprovechables",
      name: "Aprovechables",
      items: [],
    },
    peligrosos: {
      id: "peligrosos",
      name: "Peligrosos",
      items: [],
    },
    organicos: {
      id: "organicos",
      name: "Organicos",
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
    if (
      destination.droppableId === "NoAprovOrd" &&
      draggableId === "residuo1" 
      
      ) {
      setAlert("correcta");
      setTimeout(function () {
        setAlert("");
      }, 800);
      value.val = "papel higienico";
 
    } 
    else if (
      destination.droppableId !== "NoAprovOrd" &&
      draggableId === "residuo1" 
    
      ) {
      setError("¿Estas seguro?");
      setTimeout(function () {
        setError("");
      }, 800);
      value.val = "incorrecto";
      setColumns({
        ...columns,
      });
    } 
    else if (
      destination.droppableId === "NoAprovOrd" &&
      draggableId === "residuo2"
      ) {
      setAlert("correcta");
      setTimeout(function () {
        setAlert("");
      }, 800);
      value.val2 = "vaso carton";
 
    }
    else if (
      destination.droppableId !== "NoAprovOrd" &&
      draggableId === "residuo2"
      ){
      setError("¿Estas seguro?");
      setTimeout(function () {
        setError("");
      }, 800);
      value.val2 = "incorrecto";
      setColumns({
        ...columns,
      });
    } 
    else if (
      destination.droppableId === "aprovechables" &&
      draggableId === "residuo3"
      ) {
      setAlert("correcta");
      setTimeout(function () {
        setAlert("");
      }, 800);
      value.val3 = "caja carton";
 
    }
    else if (
      destination.droppableId !== "aprovechables" &&
      draggableId === "residuo3"
      ){
      setError("¿Estas seguro?");
      setTimeout(function () {
        setError("");
      }, 800);
      value.val3 = "incorrecto";
      setColumns({
        ...columns,
      });
    } 
    else if (
      destination.droppableId === "aprovechables" &&
      draggableId === "residuo4"
      ) {
      setAlert("correcta");
      setTimeout(function () {
        setAlert("");
      }, 800);
      value.val4 = "botella";
 
    }
    else if (
      destination.droppableId !== "aprovechables" &&
      draggableId === "residuo4"
      ) {
      setError("¿Estas seguro?");
      setTimeout(function () {
        setError("");
      }, 800);
      value.val4= "incorrecto";
      setColumns({
        ...columns,
      });
    } 
    else if (
      destination.droppableId === "peligrosos" &&
      draggableId === "residuo5"
      ) {
      setAlert("correcta");
      setTimeout(function () {
        setAlert("");
      }, 800);
      value.val5 = "jeringa";
    }
    else if (
      destination.droppableId !== "peligrosos" &&
      draggableId === "residuo5"
      ) {
      setError("¿Estas seguro?");
      setTimeout(function () {
        setError("");
      }, 800);
      value.val5 = "incorrecto";
      setColumns({
        ...columns,
      });
    } 
    else if (
      destination.droppableId === "peligrosos" &&
      draggableId === "residuo6"
      ) {
      setAlert("correcta");
      setTimeout(function () {
        setAlert("");
      }, 800);
      value.val6 = "guantes";
 
    }
    else if (
      destination.droppableId !== "peligrosos" &&
      draggableId === "residuo6"
      ) {
      setError("¿Estas seguro?");
      setTimeout(function () {
        setError("");
      }, 800);
      value.val6 = "incorrecto";
      setColumns({
        ...columns,
      });
    }
      else if (
        destination.droppableId === "peligrosos" &&
        draggableId === "residuo7"
        ) {
        setAlert("correcta");
        setTimeout(function () {
          setAlert("");
        }, 800);
        value.val7 = "gasa";
   
      }
      else if (
        destination.droppableId !== "peligrosos" &&
        draggableId === "residuo7"
        ) {
        setError("¿Estas seguro?");
        setTimeout(function () {
          setError("");
        }, 800);
        value.val7 = "incorrecto";
        setColumns({
          ...columns,
        });
      } 
      else if (
        destination.droppableId === "organicos" &&
        draggableId === "residuo8"
        ) {
        setAlert("correcta");
        setTimeout(function () {
          setAlert("");
        }, 800);
        value.val8 = "cascara";
   
      }
      else if (
        destination.droppableId !== "organicos" &&
        draggableId === "residuo8"
        ) {
        setError("¿Estas seguro?");
        setTimeout(function () {
          setError("");
        }, 800);
        value.val8 = "incorrecto";
        setColumns({
          ...columns,
        });
      } 
      else if (
        destination.droppableId === "organicos" &&
        draggableId === "residuo9"
        ) {
        setAlert("correcta");
        setTimeout(function () {
          setAlert("");
        }, 800);
        value.val9 = "manzana";
   
      }
      else  if (
        destination.droppableId !== "organicos" &&
        draggableId === "residuo9"
        ){
        setError("¿Estas seguro?");
        setTimeout(function () {
          setError("");
        }, 800);
        value.val9 = "incorrecto";
        setColumns({
          ...columns,
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
    val6: "sin arrastrar",
    val7: "sin arrastrar",
    val8: "sin arrastrar",
    val9: "sin arrastrar",
  };
  const [value] = useState(valor);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [alert, setAlert] = useState();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(19);
  const [areDisabled, setAreDisabled] = useState(false);
  const [stateModal, setStateModal] = useState(false);


  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (
        value.val === "sin arrastrar" &&
        value.val2 === "sin arrastrar" &&
        value.val3 === "sin arrastrar" &&
        value.val4 === "sin arrastrar" &&
        value.val5 === "sin arrastrar" &&
        value.val6 === "sin arrastrar" &&
        value.val7 === "sin arrastrar" &&
        value.val8 === "sin arrastrar" &&
        value.val9 === "sin arrastrar"
      ) {
        e.preventDefault();
        setStateModal(false);
        setAreDisabled(false);
        setMinutes(0);
        setSeconds(10);
      } else if (
        value.val === "papel higienico" &&
        value.val === "caja jugo" &&
        value.val === "vaso carton " &&
        value.val4 === "empaque carton" &&
        value.val5 === "botella plastico" &&
        value.val6 === "periodico" &&
        value.val7 === "gasa"
      ) {
        navigate("/Feedback");
      } else {
        navigate("/Feedback2");
      }
    } catch (error) {
      setError(error.message);
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
  }, [minutes, seconds]);
 
  return (
    <div className="body_l3">
      <div className="Navbar_l3">
        <Navbar />
      </div>
      {(error && <p className="error2">{error}</p>) ||
        (alert && <p className="alert2">{alert}</p>)}
      <div className="app_container">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div key={columnId} className="dd_container">
                <h2>{column.name}</h2>
                <div className="time_remaining">
                  {!areDisabled ? (
                    <h2>
                      Tiempo: {minutes}:{seconds}
                    </h2>
                  ) : (
                    <h3>Se acabo tu tiempo</h3>
                  )}
                </div>
                <div>
                  <Droppable
                    droppableId={columnId}
                    key={columnId}
                    isDropDisabled={areDisabled}
                    direction="vertical"
                  >
                    {(provided) => {
                      return (
                        <div
                          className="drag_container"
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
                                      className="drop_container"
                                    >
                                      <img src={item.content} alt="" />
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
      </div>
      {stateModal && (
        <div
          className="overlay_l3"
          state={stateModal}
          changeState={setStateModal}
        >
          <div className="container_l3">
            <div className="title1">Retroalimentacion</div>
            <div className="content_l3">
              <form onSubmit={handleSubmit2}>
                <span className="span_l3">Tu resultado es el siguiente</span>
                <br />
                <span className="span_l3">Residuos No Aprovechables</span>
                  <p>{value.val}</p>
                  <p>{value.val2}</p>
                <span className="span_l3">Residuos Aprovechables</span>
                <p>{value.val3}</p>
                <p>{value.val4}</p>
                <span className="span_l3">Residuos Peligrosos</span>
                <p>{value.val7}</p>
                  <p>{value.val8}</p>
                  <p>{value.val9}</p>
                  <span className="span_l3">Residuos Organicos</span>
                  <p>{value.val5}</p>
                  <p>{value.val6}</p>
                <span className="span_l3">
                  Por favor, presiona el siguiente boton.
                </span>
                <input type="submit" value=" Continuar" className="button_l3" />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
