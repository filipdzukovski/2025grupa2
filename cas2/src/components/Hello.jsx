import React from 'react';

export function Hello(props){
    console.log(props)
    console.log(props.age)
    return(
        <div className='hello-component'>
            <p>Hello {props.ime} {props.prezime}</p>
            <p>I am {props.age} old</p>
        </div>
    )
}