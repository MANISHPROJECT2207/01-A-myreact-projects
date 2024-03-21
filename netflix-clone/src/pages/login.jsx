import React from 'react'
import styled from "styled-components";
import { useState ,useEffect} from 'react';

import Header from '../components/header';
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../components/backgroundImage';
export default function Login() {
  
  // State for holding user inputs
    const [formvalues, setformvalues] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      
      const { email, password } = formvalues;
      await signInWithEmailAndPassword(firebaseAuth, email, password)
      
    }
    catch (error) {
      console.log(error);
    }
  };
  
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  
 
  
  

 

  return (
    <Container>
      <BackgroundImage />
      <div className='content'>
        <Header />
        <div className='form-container flex column a-center j-center'>
          <div className='form flex column a-center j-center'>
            <div className='title'>
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              

                <input type="email" name="email"
                 placeholder='Email address' id="email"
                value={formvalues.email} 
                onChange={(e) => setformvalues({ ...formvalues, [e.target.id]: e.target.value, })} />

                <input type="password" name="Password" placeholder='Password' id="password" value={formvalues.password} onChange={(e) => setformvalues({ ...formvalues, [e.target.id]: e.target.value, })} />



            
              
                  <button onClick={handleLogin}>Login</button>
              
            </div>
          </div>
        </div>
      </div>
    
    </Container >
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

    
  .form-container{
    gap:2rem;
    height:85vh;
    .form{
      padding:2rem;
      background-color:#000000b0;
      width:25vw;
      gap:2rem;
      color:white;
    
      .container{
      gap:2rem;
      input{
        padding:0.5rem 1rem;
        width:15rem;
      }
      button{
        padding:0.5rem 1rem;
        background-color:#e50914;
        border:none;
        cursor:pointer;
        color:white;
        border-radius:0.2rem;
        font-weight:bolder;
        font-size:1.05rem;
    }
    }
  }
  }
}
`;



