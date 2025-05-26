import React,{useState} from 'react';


export const Carousel = ({title,images,description}) => {
    const [currentIndex,setCurrentIndex] = useState(0);
    console.log(images)


    const goToNext = () =>{
        setCurrentIndex((currentIndex+1) % images.length)
    }

    const goToPrev = () =>{
        setCurrentIndex((currentIndex-1 + images.length) % images.length)
    }

    return(
        <div className="popup-container">
            <h3>{title}</h3>
            <img 
                src={images[currentIndex]}
                alt={images[currentIndex].title}
            />

          {images.length > 1 && 
            <>
          <button onClick={goToPrev} className='carousel-button-left'>
                {'<'}
            </button>
            <button onClick={goToNext} className='carousel-button-right'>
                {'>'}
            </button>
            </>
            }
            <p>{description}</p>
        </div>
    )
}