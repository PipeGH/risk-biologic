import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./MenuP.css";
export default function MenuP() {
  
    const navigate = useNavigate();
    const [error, setError] = useState();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try{
      navigate("/Intro1");
          
      } catch (error) {
        
        setError(error.message);
      }
      
    };
    const handleSubmit2= async (e) => {
      e.preventDefault();
      setError("");
      try{
      navigate("/Guia");
          
      } catch (error) {
        
        setError(error.message);
      }
      
    };
   
  return (
    <div>
        <body className="body2">
          <div className="error1">
            {error && <p className="alert1">{error}</p>}
            <br />
<<<<<<< HEAD
            <div className="container1">
              <div className="title1">¡Buena Suerte!</div>
              <div className="content1">
                <form>
                  <div className="button1" onClick={handleSubmit}>
                    <input type="submit" value=" Comenzar" />
                  </div>
                  <div className="button1" onClick={handleSubmit2}>
=======
            <div class="container1">
              <div class="title1">¡Buena Suerte!</div>
              <div class="content1">
                <form>
                  <div class="button1" onClick={handleSubmit}>
                    <input type="submit" value=" Comenzar" />
                  </div>
                  <div class="button1" onClick={handleSubmit2}>
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
                    <input type="submit" value=" Intrucciones"/>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </body>
      </div>
  )
}
