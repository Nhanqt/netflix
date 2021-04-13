import React,{useEffect,useState} from 'react'
import axios from '../../Action/axios'
import "./style.css";
import SlickResponsive from '../SlickResponsive'
function Row({fetchURL,title }) {
    const [movies,setMovies] = useState([]);
    useEffect(() =>{
        console.log("useEffec runing");
        async function fetchData(){
            const result = await axios.get(fetchURL);
            setMovies(result.data.results);
        }
        fetchData();
    }, [])
    return (
        <div className="row">
            <h2>{title}</h2>
            <SlickResponsive listFilm={movies}/>
        </div>
        
    )
}

export default Row
