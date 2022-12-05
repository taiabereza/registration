import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AlertValid from './AlertValid';

import bird from './../img/stickebird-5.png';
import Buttons from './Buttons';

export default function FormFifthScreen({ formState, setFormState, formScreen, setFormScreen, alertInvalid, setAlertInvalid }) {

    const { secondLang, about } = formState;

    const handleOnChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
        setAlertInvalid(false);
        e.target.classList.remove('alert-border');
    }

    return (
        <div className="form mt-4 p-3">
            <Row className="form-row">
                <Col md={5} className="form-left">
                    <div className="form-wrapper p-3">
                        <Form.Select className="form-float-input mb-3 p-3"
                            name="secondLang"
                            aria-label="Default select example"
                            value={secondLang}
                            onChange={(e) => handleOnChange(e)}
                        >
                            <option value="" style={{ display: "none" }}>Друга мова, яку я знаю</option>
                            <option value="Не спілкуюся іншими мовами">Не спілкуюся іншими мовами</option>
                            <option value="Англійська">Англійська</option>
                            <option value="Іспанська">Іспанська</option>
                            <option value="Польська">Польська</option>
                            <option value="Чеська">Чеська</option>
                            <option value="Інша">Інша</option>
                        </Form.Select>
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Додаткова інформація про тебе"
                            className="mb-3"
                        >
                            <Form.Control className="form-float-input"
                                name="about" as="textarea"
                                style={{ height: '180px', resize: 'none' }}
                                placeholder="Додаткова інформація про тебе" maxLength={240}
                                value={about}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </FloatingLabel>
                    </div>
                    <AlertValid alertInvalid={alertInvalid} />
                    <Buttons
                        formScreen={formScreen}
                        setFormScreen={setFormScreen}
                    />
                </Col>
                <Col md={7} className="form-right">
                    <img src={bird} alt="" />
                </Col>
            </Row>
        </div>
    )
}