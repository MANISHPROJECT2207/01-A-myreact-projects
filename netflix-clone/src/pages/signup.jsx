import React from 'react'
import styled from"styled-components";
import { useState } from 'react';
import BackgroundImage from '../components/backgroundImage';
import Header from '../components/header';
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {firebaseAuth} from  "../utils/firebase-config";
import { Navigate, useNavigate } from 'react-router-dom';
export default function Signup() {
  const navigate = useNavigate();
  // State for holding user inputs
  const [showPassword,setshowPassword] = useState(false);
  const [formvalues,setformvalues] = useState({
    email:"",
    password:""
  });
  const handlerSignin = async ()=>{
    try{
      const {email,password} = formvalues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password)
      onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser) navigate("/");
      })
    }
    catch(error){
      console.log(error)
    }
  };
  
  
  return (
    <Container>
      <BackgroundImage/>
      <div className="content">

      <Header login />
      <div className="body flex column a-center j-center">
        <div className="text flex column">
          <h1>unlimited movies,tv SHOWS and more</h1>
          <h4>Watch anywhere.cancel anytime</h4>
          <h6>ready to watch? Enter your email and restart membership</h6>

        </div>
        <div className="form">
          
          <input type="email" name="Email address" placeholder='Email address' id="email" value={formvalues.email} onChange={(e) => setformvalues({...formvalues,[e.target.id]: e.target.value,})}/>
          {
            showPassword &&
            <input type="password" name="Password" placeholder='Password' id="password" value={formvalues.password} onChange={(e) => setformvalues({...formvalues,[e.target.id]: e.target.value,})}/>
          }
          {
            !showPassword
            && <button onClick={()=>setshowPassword(true)}>get Started</button>
          }

        </div>
        <div>
            <button onClick={handlerSignin}>Sign Up</button>
        </div>
      </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
position: relative;
.content{
  position:absolute;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  background-color:rgba(0,0,0,0.5);
  display:grid;
  grid-template-rows:15vh 85vh; 
  .body{
    gap:1rem;
    .text{
      gap:1rem;
      text-align:center;
      font-size:2rem;
      h1{
        padding:0.25rem;
      }
    }
    .form{
      display:grid;  
      grid-template-columns:${({showPassword})=> showPassword ? "1fr 1fr" : "2fr 1fr"};
      width:60%;
      input{
        color:black;
        border:none;
        padding:1.5rem;
        font-size:1.2rem;
        border:1px solid black;
        &:focus{
          outline:none;
        }
      }
      button{
        padding:0.5rem 1rem;
        background-color:#e50914;
        boarder:none;
        cursor:pointer;
        color:white;
        
        font-weight:bolder;
        font-size:1.05rem;
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
}
`;


