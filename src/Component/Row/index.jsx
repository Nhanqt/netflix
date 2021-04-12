import React from 'react'
import "./style.css";
function Row({ listMovies }) {
    const baseImgUrl = "https://image.tmdb.org/t/p/original";
    return (
        <div className="row">
            {listMovies.map((item)=>{
            return <div className="item">
                <img src={baseImgUrl + item.poster_path} alt=""/>
            </div>
            })}
        </div>
        
    )
}

export default Row
