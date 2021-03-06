import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function SlideResponsive({listFilm}) {
    
    const baseImgUrl = "https://image.tmdb.org/t/p/original";
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div>
          <Slider {...settings}>
            {listFilm.map((item)=>{
                return <div className="item" key={item.id}>
                    <img src={baseImgUrl+item.poster_path} alt=""/>
                </div>
            })}
          </Slider>
        </div>
      );
}

export default SlideResponsive;
