import React from 'react';

function BoilingWater(props){
    const waterState = parseInt(props.celsius) >= 100 ? "The water is boiling" : "The water would not boil"
    return (
        <div>
            <p>{waterState}</p>
        </div>
        
    )
}

export default BoilingWater;