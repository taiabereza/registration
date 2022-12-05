import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import bird from './../img/stickebird-2.png';
import Buttons from './Buttons';

export default function FormSecondScreen({ formState, setFormState, formScreen, setFormScreen }) {

    const { firstName, lastName, birthDate, sex } = formState;

    const handleOnChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="form mt-4 p-3">
            <Row className="form-row">
                <Col md={5} className="form-left form-left-order">
                    <div className="form-wrapper p-3">
                        <FloatingLabel
                            controlId="floatingFirstName"
                            label="Ім'я"
                            className="mb-3"
                        >
                            <Form.Control className="form-float-input"
                                name="firstName" type="text"
                                placeholder="Іван"
                                value={firstName}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingLastName"
                            label="Прізвище"
                            className="mb-3"
                        >
                            <Form.Control className="form-float-input"
                                name="lastName" type="text"
                                placeholder="Іваненко"
                                value={lastName}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingDate"
                            label="Дата народження"
                            className="mb-3"
                        >
                            <Form.Control className="form-float-input"
                                name="birthDate" type="date"
                                placeholder="Login" maxLength={16}
                                value={birthDate}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </FloatingLabel>
                        <Form.Select className="form-float-input p-3"
                            name="sex"
                            aria-label="Default select example"
                            value={sex}
                            onChange={(e) => handleOnChange(e)}
                        >
                            <option value="" style={{display:"none"}}>Стать</option>
                            <option value="man">Чоловік</option>
                            <option value="woman">Жінка</option>
                            <option value="other">Інше/Бажаю не вказувати</option>
                        </Form.Select>
                    </div>
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