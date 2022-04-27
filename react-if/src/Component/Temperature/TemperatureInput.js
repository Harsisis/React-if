import React from 'react';

function TemperatureInput(props){
    return (
        <fieldset>
            <legend>Temperature en {props.tempName}</legend>
            <input type="text" value={props.tempValue} name={props.temp} onChange={props.handleTempChange}></input>
        </fieldset>
        
    )
}

export default TemperatureInput;