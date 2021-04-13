import React,{useEffect,useState} from 'react';
import axios from "../../Action/axios";
import requests from "../../Action/requests"
import Row from '../Row';
function Body() {
    const [movies,setMovies] = useState([]);


    return (
        <div>
            <Row title="Action film" fetchURL={requests.fetchActionMovies}/>
            <Row title="Trending film" fetchURL={requests.fetchTrending}/>
            <Row title="Horror film" fetchURL={requests.fetchHorrorMovies}/>
        </div>
    )
}

export default Body;
