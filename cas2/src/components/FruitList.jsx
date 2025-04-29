import React from 'react';

export const FruitList = ({listaNaOvosje}) => {
    return(
        <div id='fruit-list'>
            <h2>Fruit List:</h2>
            <ul>
                {/* {listaNaOvosje.map((ovosje,i)=>{
                    return(
                        <li key={i}>{ovosje}</li>
                    )
                })} */}
              {listaNaOvosje.map((ovosje,i)=>(
                <li key={i}>{ovosje}</li>
              ))}
            </ul>
        </div>
    )
}


//Anonimna f-ja ()=>{}