import Token from './Token'

function Cell(props) {
    return (
        <div onClick={props.onTokenClick} style={{width: '100%', height: '100%'}}>
            <Token token={props.value}></Token>
        </div>
    );
}

export default Cell;