// Code DelayedButton Component Here
import React, { Component } from 'react'
class DelayedButton extends Component{
    render = () =>{
        return(
            <button
                onClick={this.handleClick}
            >
                DelayedButton

            </button>)

        }
    handleClick =(event)=>{
        const {onDelayedClick, delay} = this.props;
        event.persist()
        setTimeout(()=>{onDelayedClick(event)}, delay)
    }
}

export default DelayedButton