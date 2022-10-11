import styled from 'styled-components';
  
  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 90%;
   bottom: 50px;
   height: 20px;
   font-size: 45px;
   z-index: 1;
   cursor: pointer;
   color: #00482B;

   @media(max-width:496px){
      font-size: 30px;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   }

`

