import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #23394d; 
  
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;

  p {
    &:nth-child(2) {
      color: #fff;
    }
  }
  

  svg {
    fill: #e07924;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 700px) {
    background-color: #23394d;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }

`;

export const MenuItem = styled.li`
  

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #64b2ff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;


  &:hover {
    color: #fff;
    
    transition: 0.5s all ease;

    div {
      svg {
        fill: #00C853;
      }
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: #00C853;
      margin-right: 0.5rem;
    }

   
  }
  img{
  
    height: 40px;
    border-radius:50%;
    background-color:#23394d;

  }
  span{
    margin-left:10px;
    font-size:18px;
  }
  
  @media screen and (max-width: 760px) {
    div {
      width: 100%;
      justify-content: center;

      svg {
        display: flex;
      }
    }
    span{
      font-size:20px;
      margin-left:10px;
      text-align:center;
      
    }
    img{
      height:40px;
      margin-left:-10px;
    }
  } 
  @media screen and (max-width: 520px) {
    div {
      width: 100%;
      justify-content: center;

      svg {
        display: flex;
      }
    }
    span{
      font-size:20px;
      margin-left:10px;
      text-align:center;
      
    }
    img{
      height:40px;
      margin-left:-10px;
    }
  }
  `;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: #00C853;
      margin-right: 0.5rem;
    }
  }
`;

