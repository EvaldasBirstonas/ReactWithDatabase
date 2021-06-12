import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const InformationTable = (props) => {
    console.log(props);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item name</th>
                        <th>Item description</th>
                        <th>Date of adding</th>
                    </tr>
                </thead>
                <tbody>
                    { props.informationList.map(data => (
                        <tr key={data.id}>
                            <td>{ data.id }</td>
                            <td>{ data.name } </td>
                            <td>{ data.description }</td>
                            <td>{ data.timeOfAddition }</td>
                        </tr>
                    )) }
                </tbody>
            </Table>
        </div>
    )
}

Table.defaultProps = {
    informationList: [],
}

export default InformationTable
