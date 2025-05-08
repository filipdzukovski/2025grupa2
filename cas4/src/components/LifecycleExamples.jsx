import React from 'react';

export class LifecycleExample extends React.Component{

    constructor(props){
        super(props);
        console.log("THIS method is called from the CONSTRUCTOR")//1
        this.state = {
            promenliva: "Vrednost 1"
        }
    }

    componentDidMount(){
        console.log("THIS IS COMPONENT DID MOUNT"); //3
    }

    smeniVrednost = () =>{
        // this.state.promenliva = "Vrednost 2";
        this.setState({
            promenliva: "Vrednost 2"
        })
    }

    render(){
    console.log("THIS IS RENDER METHOD")//2
        return(
            <div id='lifecycle-example'>
                <h1>Class Component Example</h1>
                <p>Vrednost na Promenliva: {this.state.promenliva}</p>
                <button onClick={this.smeniVrednost}>Click Me !!!</button>
            </div>
        )
    }
}