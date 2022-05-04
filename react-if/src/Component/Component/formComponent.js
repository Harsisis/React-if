import React from 'react'
import Menu from './menuComponent'

export class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'noName',
            submitted: false,
            menuList: [],
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(e){
        this.setState({name: e.target.value})
        console.log(e.target.value)
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({submitted: true });
    }
    render(){
        let menu;
        if (this.state.submitted) {
            menu =(<Menu name={this.state.name}></Menu>);
        }
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.name} onChange={this.handleNameChange}></input>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>

                {menu}
            </div>
                
        );
        
    }
}