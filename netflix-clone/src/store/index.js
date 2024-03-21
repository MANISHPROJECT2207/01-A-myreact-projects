import {configureStore,createAsyncThunk,createSlice }from "@reduxjs/toolkit"
import { API_KEY, BASE_URL, TMDB_API_KEY, TMDB_API_URL } from "../utils/constants";
import axios from 'axios';
// import {thunkApi} from "redux-thunk"

const initialState = {
    movies: [],
    genresLoaded:false,
    genres:[]
};
const proxy = 'http://cors-anywhere.herokuapp.com/';



export const getGenres = createAsyncThunk("netflix/genres",async ()=>{
    
    //-----------------------for omdb api--------------------
    // const {data:{Search}} = await axios.get(`${BASE_URL}?&apikey=${API_KEY}&s=all&type=movie&page=3`);
    // console.log(Search);
    //------------------------------------------------------
    //-------------------for pagination---------------------
    // let page = 1
    // while (page <= 5) {
    //     const res = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&type=movie&page=${page}`);
    //     this.result = res.data;
    //     this.page = page;
    //     page++;
    //     console.log(result)
    // }
    //-----------------------------------------------------
    const {data:{genres}} = await axios.get(`${TMDB_API_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`)
    // console.log(genres); //  to get all type of genres 
    return genres;

})

// ----------------------fetch rapid api for movie---------------------------------------------------


// const axios = require('axios');

// const url = 'https://moviesminidatabase.p.rapidapi.com/movie/order/upcoming/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '5cb0a348a5mshc3f913735e7bbd4p1db0f7jsn8df14d354325',
// 		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response;
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

//---------------------------------------------------------------------

const createArrayFromData = (array,moviesArray,genres) =>{
    // console.log(array);
    
    array.forEach((movie) => {
        const movieGenres = [];
        movie.genre_ids.forEach((genre)=>{
            const name = genres.find(({id})=> id===genre);
            if(name) movieGenres.push(name.name);
        });
        if(movie.backdrop_path){
            moviesArray.push({
                id:movie.id,
                name:movie?.original_name ? movie.original_name : movie.original_title,
                image:movie.backdrop_path,
                genres:movieGenres.slice(0,3)
            });
        }
    });
}
//-------------60 trending movies using paging -----------
const getRawData = async (api,genres,paging) => {
    const moviesArray = [];
    for(let i = 1;moviesArray.length<60 && i<10 ;i++){
       const {data:{results}} = await axios.get(`${api}${paging ? `&page=${i}` : ""}`)
       createArrayFromData(results,moviesArray,genres);
        //  console.log(results);
        // console.log(moviesArray);
    }   
    return moviesArray;
}

//----------------------------------------------

export const fetchMovies = createAsyncThunk("netflix/trending",async ({type},thunkApi)=>{
    const {netflix:{genres}} = thunkApi.getState();
   // omdb all movie api --------------- return getRawData(`${TMDB_API_URL}?apikey=${API_KEY}&s=all&type=${type}&page=1`)
    return getRawData(`${TMDB_API_URL}/trending/${type}/week?api_key=${TMDB_API_KEY}`,genres,true)

    // console.log(data)
})  

const NetflixSlice = createSlice({ 
    name:"Netflix",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getGenres.fulfilled,(state,action)=>{
            state.genres = action.payload;
            state.genresLoaded = true;
        });
        builder.addCase(fetchMovies.fulfilled,(state,action)=>{
            state.movies = action.payload;
        });
    },
    
});

export const store = configureStore({
    reducer:{
        netflix : NetflixSlice.reducer,
    }
});