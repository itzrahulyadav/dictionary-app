import styled from "styled-components";

export const Form = styled.form`
     background:white;
     border-radius:8px;
     width:40%;
     min-width:20%;
     display:flex;
     flex-direction:column;
     align-items:center;
     justify-content:center;
     padding:10px;
     padding-top:20px;
     backdrop-filter:blur(80px);

     @media only screen and (max-width:768px)
     {
         width:90%;

     }
     
`