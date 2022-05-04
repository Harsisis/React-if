import React from 'react';
import Grid from './Grid';
import PlayerTurn from './PlayerTurn';
import PlayerWin from './PlayerWin';

import '../../TicTacToe.css';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            grid : Array(9).fill(null)
        }
        this.handleTokenClick = this.handleTokenClick.bind(this);
    }
    getPlayerTurn(){
        let count = 0;
        this.state.grid.forEach( element => {
            if(element !== null){
                count++;
            }
        });
        return count;
    }
    handleTokenClick(i) {
        if (this.state.grid[i] !== null) {
            console.error('Already there');
            return;
        }
        const newGrid = this.state.grid.slice();
        newGrid[i] = this.getPlayerTurn()%2 ? "X" : "O";
        this.setState({grid : newGrid})

    }
    render(){
        return (
            <div>
             <PlayerTurn turn={this.getPlayerTurn()}></PlayerTurn>
             <Grid grid={this.state.grid} onTokenClick={this.handleTokenClick}></Grid>
             <PlayerWin></PlayerWin>
         </div>
        );
    }
}



function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }