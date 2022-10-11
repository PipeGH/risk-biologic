import React, {useState} from "react";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";


export default function Level2() {

  const [stateModal] = useState(false);
  const [stateModal2] = useState(false);
  const [stateModal3] = useState(false);
  const [stateModal4] = useState(false);


  return (
    <div className="body-l2">
      {!stateModal && (
        <>
         <Question1/>
        </>
      )}
       {stateModal2 && (
        <>
         <Question2/>
        </>
      )}
      {stateModal3 && (
        <>
         <Question3/>
        </>
      )}
      {stateModal4 && (
        <>
         <Question4/>
        </>
      )}
     
    </div>
  );
}
