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
          <div class="error1">
            {error && <p class="alert1">{error}</p>}
            <br />
            <div class="container1">
              <div class="title1">¡Buena Suerte!</div>
              <div class="content1">
                <form>
                  <div class="button1" onClick={handleSubmit}>
                    <input type="submit" value=" Comenzar" />
                  </div>
                  <div class="button1" onClick={handleSubmit2}>
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
