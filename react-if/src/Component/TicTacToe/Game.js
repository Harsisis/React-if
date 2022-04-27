import Grid from './Grid';
import PlayerTurn from './PlayerTurn';
import PlayerWin from './PlayerWin';

import '../../TicTacToe.css';

function Game(props) {
    return (
        <div>
            <PlayerTurn></PlayerTurn>
            <Grid></Grid>
            <PlayerWin></PlayerWin>
        </div>
    );
}

export default Game;