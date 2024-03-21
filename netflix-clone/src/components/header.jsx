import React from 'react'
import styled from 'styled-components'
import bgcimage2 from '../assets/bgcimage2.png'
import { useNavigate } from 'react-router-dom'
export default function Header(props) {
    const navigate = useNavigate();
  return (
    <Container className='flex a-center j-between'>
        <div className="logo">
            <img src={bgcimage2} alt="logo" />
        </div>
        <button onClick={()=>navigate(props.login? "/login" :"/signup")}>{props.login ? "log IN" : "Sign IN"}</button>
    </Container>
  )
}


const Container = styled.div`
    padding : 0 4rem;
    .logo{
        img{
            height:5rem;
            mix-blend-mode:linear;
        }
    }
    button{
        padding:0.5rem 1rem;
        background-color:#e50914;
        boarder:none;
        cursor:pointer;
        color:white;
        border-radius:0.2rem;
        font-weight:bolder;
        font-size:1.05rem;


    }
`