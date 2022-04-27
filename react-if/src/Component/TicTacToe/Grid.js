import Cell from './Cell';

function Grid(props) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><Cell></Cell></td>
                        <td><Cell></Cell></td>
                        <td><Cell></Cell></td>
                    </tr>
                    <tr>
                        <td><Cell></Cell></td>
                        <td><Cell></Cell></td>
                        <td><Cell></Cell></td>
                    </tr>
                    <tr>
                        <td><Cell></Cell></td>
                        <td><Cell></Cell></td>
                        <td><Cell></Cell></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Grid;