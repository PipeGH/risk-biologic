import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  
    const navigate = useNavigate();
    const [error, setError] = useState();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try{
      navigate("./login");
          
      } catch (error) {
        
        setError(error.message);
      }
    };
   
  return (
    <div className='body-p'>
        <form onSubmit={handleSubmit}>
          <div className="wrapper-p">
            <h2 data-text="👋&nbsp;Bienvenido👋&nbsp;"> 👋&nbsp;Bienvenido👋&nbsp;</h2>
         </div>  
          <input type="submit" value="Comenzar" className='button-p'/>
        </form>
    </div>
  )
}


