import React from 'react'
import Cardslider from './cardslider'
import styled from 'styled-components';

export default function Slider({movies}) {

    const getMoviesFromRange=(from,to)=>{
        return movies.slice(from,to);
    }

  return (
    <Container>
        <Cardslider title="Trending Now" data={getMoviesFromRange(0,10)}/>    
        <Cardslider title="New Release" data={getMoviesFromRange(10,20)}/> 
        <Cardslider title="Blockbuster Movie" data={getMoviesFromRange(20,30)}/> 
        <Cardslider title="popular on netflix" data={getMoviesFromRange(30,40)}/> 
        <Cardslider title="Action Movies" data={getMoviesFromRange(40,50)}/> 
        <Cardslider title="Epics" data={getMoviesFromRange(50,60)}/> 
    </Container>
  )
}

const Container = styled.div``;
