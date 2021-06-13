import BootstrapButton from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

const Button = ({ text }) => {
    const history = useHistory();
    return (
        <div className="button" style={{float: 'right'}}>
            <BootstrapButton variant="outline-success" onClick={ () => { history.push('/addForm'); console.log(history) }}>{text}</BootstrapButton>{' '}
        </div>
    )
}

export default Button
