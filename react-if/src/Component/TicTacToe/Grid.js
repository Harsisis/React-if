import Cell from './Cell';

function Grid(props) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><Cell value={props.grid[0]} onTokenClick={() => (props.onTokenClick(0))}></Cell></td>
                        <td><Cell value={props.grid[1]} onTokenClick={() => (props.onTokenClick(1))}></Cell></td>
                        <td><Cell value={props.grid[2]} onTokenClick={() => (props.onTokenClick(2))}></Cell></td>
                    </tr>
                    <tr>
                        <td><Cell value={props.grid[3]} onTokenClick={() => (props.onTokenClick(3))}></Cell></td>
                        <td><Cell value={props.grid[4]} onTokenClick={() => (props.onTokenClick(4))}></Cell></td>
                        <td><Cell value={props.grid[5]} onTokenClick={() => (props.onTokenClick(5))}></Cell></td>
                    </tr>
                    <tr>
                        <td><Cell value={props.grid[6]} onTokenClick={() => (props.onTokenClick(6))}></Cell></td>
                        <td><Cell value={props.grid[7]} onTokenClick={() => (props.onTokenClick(7))}></Cell></td>
                        <td><Cell value={props.grid[8]} onTokenClick={() => (props.onTokenClick(8))}></Cell></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Grid;