import React from 'react';
import {Goodbye} from './Goodbye';

export class Hello extends React.Component{

    render(){
        return(
            <div>
            <p style={{color:'red',backgroundColor:'green'}}>This is a class Component</p>
            <Goodbye/>
            </div>
        )
    }

}