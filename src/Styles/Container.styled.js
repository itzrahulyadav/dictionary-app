import styled from 'styled-components';
import girl from '../Images/girl.jpg';

export const Container = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        width:100vw;
        height:100vh;
        background:linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.7)),url(${girl});
        background-size:cover;
        background-position:center;
        font-family: 'Lato', sans-serif;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Poppins', sans-serif;
       font-family: 'Source Serif 4', sans-serif;
       font-weight:300;
`
export const Button = styled.button`
        background:linear-gradient(45deg,purple,blue);
        color:white;
        border:none;
        border-radius:50px;
        outline:none;
        padding:2px 4px;
        height:25px;
        width:80px;
        font-size:20px;
        margin-top:5px;
        text-align:center;
        &:hover{
                background:transparent;
                color:blue;
                border:2px solid blue;
        }
`
export const Input = styled.input`
      border-radius:8px;
      outline:0;
      border:2px solid blue;
      font-size:20px;
      &:focus{
              border:2px solid blue;
      }
`