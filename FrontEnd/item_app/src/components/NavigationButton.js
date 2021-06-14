import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const NavigationButton = ({isLoaded, leftDisabled, rightDisabled, currentPage, setCurrentPage}) => {
    const handleNext = () => {
        setCurrentPage(currentPage + 1)
    }
    const handleBack = () => {
        setCurrentPage(currentPage - 1)
    }
    const handleReset = () => {
        setCurrentPage(0)
    }
    return (
        <div>
            <center>
            <ButtonGroup hidden={!isLoaded} aria-label="Basic example">
                <Button variant="secondary" disabled={leftDisabled?true:""} onClick={handleBack}>Back</Button>
                <Button variant="secondary" onClick={handleReset}>Reset</Button>
                <Button variant="secondary" disabled={rightDisabled?true:""} onClick={handleNext}>Next</Button>
            </ButtonGroup>
            </center>
        </div>
    )
}

export default NavigationButton
