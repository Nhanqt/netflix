import React,{useEffect,useState} from 'react';
import axios from "../../Action/axios";
import requests from "../../Action/requests"
import Row from '../Row';
function Body() {
    const [movies,setMovies] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const result = await axios.get(requests.fetchActionMovies);
            setMovies(result.data.results)
        }
        fetchData();
    }, [])
    return (
        <div>
            <Row listMovies={movies} className="row"/>
        </div>
    )
}

export default Body;
