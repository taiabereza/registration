import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AlertValid from './AlertValid';

import { useState } from 'react';

import bird from './../img/stickebird-3.png';
import Buttons from './Buttons';

export default function FormThirdScreen({ formState, setFormState, formScreen, setFormScreen, alertInvalid, setAlertInvalid }) {

	const { education, workplace, position, phone } = formState;

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
				<Col md={5} className="form-left">
					<div className="form-wrapper p-3">
						<FloatingLabel
							controlId="floatingEducation"
							label="Освіта"
							className="mb-3"
						>
							<Form.Control className="form-float-input"
								name="education" type="text"
								placeholder="Освіта" maxLength={16}
								value={education}
								onChange={(e) => handleOnChange(e)}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingEducation"
							label="Де працюєш"
							className="mb-3"
						>
							<Form.Control className="form-float-input"
								name="workplace" type="text"
								placeholder="Місце роботи" maxLength={16}
								value={workplace}
								onChange={(e) => handleOnChange(e)}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingEducation"
							label="Ким працюєш"
							className="mb-3"
						>
							<Form.Control className="form-float-input"
								name="position" type="text"
								placeholder="Позиція" maxLength={16}
								value={position}
								onChange={(e) => handleOnChange(e)}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingEducation"
							label="Номер телефону"
							className="mb-3"
						>
							<Form.Control className="form-float-input"
								name="phone" type="tel"
								placeholder="Номер телефону" maxLength={16}
								value={phone}
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