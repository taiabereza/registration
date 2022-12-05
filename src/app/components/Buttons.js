import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Buttons({ formScreen, setFormScreen, handleClickNext }) {



    return (
        <ButtonGroup>
            <Button
                disabled={(formScreen === 0) ? true : false}
                className="button-nav"
                variant="outline-dark p-3 mt-3"
                onClick={() => {
                    setFormScreen(formScreen -= 1)
                }}
            >
                Назад
            </Button>
            <Button
                disabled={(formScreen === 4) ? true : false}
                className="button-nav"
                variant="outline-dark p-3 mt-3"
                onClick={() => {
                    handleClickNext();
                }}
            >
                Далі
            </Button>
        </ButtonGroup>
    )
}