// da se prikaze vo dopolnitelen fajl lista od filmovi (minimum 5 po vash izbor)
// izdefinirana vo app so atributi {name,date,genre plot,imdbLink,imgUrl}
// listata na atributi prikaz i slika za filmot (slikata ne mora da bide od imdb),
// imdb.com e stranata za filmovite

export const Movies = ({filmovi}) => {
    console.log(filmovi)
    return(
        <div id='movies'>
            {filmovi.map((film,i)=>{
                return(
                <div key={i}>
                    <h3><span>Title:</span> {film.name}</h3>
                    <p><span>Released:</span> {film.date}</p>
                    <p><span>Genre:</span>{film.genre}</p>
                    <p><span>Plot:</span> {film.plot}</p>
                    <a target="_blank" href={film.imdbLink}>Go to IMDb</a>
                    <br/>
                    <img src={film.imgUrl} alt={film.name} 
                    width={250} height={350}
                    />
                    <hr/>
                </div>
                )    
        }
        )}

        </div>
    )
}