import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AlertValid from './AlertValid';

import { useState } from 'react';


import bird from './../img/stickebird-4.png';
import Buttons from './Buttons';

export default function FormFourthScreen({ formState, setFormState, formScreen, setFormScreen, alertInvalid, setAlertInvalid }) {

    const { country, city, address } = formState;

	const handleOnChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value
		})
		setAlertInvalid(false);
		e.target.classList.remove('alert-border');
	}

    const handleClickNext = () => {
        const inputSet = document.querySelectorAll('.form-float-input');
				const invalidInputs = [...inputSet].filter(input => input.value === '');
        if (invalidInputs.length !== 0) {
            inputSet.forEach(input => (input.value === '') ? input.classList.add('alert-border') : null);
            setAlertInvalid(true);
        } else {
            setFormScreen(formScreen += 1);
        }
    }

    return (
        <div className="form mt-4 p-3">
            <Row className="form-row">
                <Col md={5} className="form-left form-left-order">
                    <div className="form-wrapper p-3">
                        <FloatingLabel
                            controlId="floatingCountry"
                            label="Країна"
                            className="mb-3"
                        >
                            <Form.Control className="form-float-input"
                                name="country" type="text"
                                placeholder="Країна" maxLength={16}
                                value={country}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingCity"
                            label="Місто"
                            className="mb-3"
                        >
                            <Form.Control className="form-float-input"
                                name="city" type="text"
                                placeholder="Місто" maxLength={16}
                                value={city}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingAddress"
                            label="Адреса"
                            className="mb-3"
                        >
                            <Form.Control className="form-float-input"
                                name="address" type="text"
                                placeholder="Адреса" maxLength={16}
                                value={address}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </FloatingLabel>
                    </div>
                    <AlertValid alertInvalid={alertInvalid} />
                    <Buttons
                        formScreen={formScreen}
                        setFormScreen={setFormScreen}
                        handleClickNext={handleClickNext}
                    />
                </Col>
                <Col md={7} className="form-right">
                    <img src={bird} alt="" />
                </Col>
            </Row>
        </div>
    )
}