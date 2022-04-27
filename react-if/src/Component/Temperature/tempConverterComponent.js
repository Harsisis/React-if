import React from 'react';
import TemperatureInput from './TemperatureInput'
import BoilingWater from './BoilingWater'

export class TempConverter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature : 0,
            scale : "c",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({submitted: true });
    }
    handleCelsiusChange(e){
        this.setState({
            scale: 'c',
            temperature: e.target.value
        });
    }
    handleFahrenheitChange(e){
        this.setState({
            scale : 'f',
            temperature: e.target.value})
    }
    convertToCelsius(temperature){
        return (temperature - 32)  * (5/9);
    }
    convertToFarhenheit(temperature){
        return temperature * (9/5) + 32;
    }
    render() {
        const celsius = this.state.scale === "c" ? this.state.temperature : this.convertToCelsius(this.state.temperature);
        const farhenheit = this.state.scale === "f" ? this.state.temperature : this.convertToFarhenheit(this.state.temperature);

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TemperatureInput temp="c" tempName="Celsius" handleTempChange={this.handleCelsiusChange} tempValue={celsius}></TemperatureInput>
                    <TemperatureInput temp="f" tempName="Fahrenheit" handleTempChange={this.handleFahrenheitChange} tempValue={farhenheit}></TemperatureInput>
                </form>
                
                <BoilingWater celsius={celsius}></BoilingWater>
            </div>
        );
    }
}