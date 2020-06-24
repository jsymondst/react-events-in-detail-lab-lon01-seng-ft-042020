// Code CoordinatesButton Component Here
import React, { Component } from 'react'
class CoordinatesButton extends Component{
    
    render(){
        return(
            <button
                onClick={this.handleClick}
            >
                CoordinatesButton
            </button>
            )
    }

    handleClick = (event) =>{
        const coords = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coords)
    }


    

}

export default CoordinatesButton