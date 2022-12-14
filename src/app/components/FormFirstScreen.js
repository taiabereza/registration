import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AlertValid from './AlertValid';

import bird from './../img/stickebird.png';
import Buttons from './Buttons';
import { useState } from 'react';

export default function FormFirstScreen({ formState, setFormState, formScreen, setFormScreen, alertInvalid, setAlertInvalid }) {

	const { login, email, password } = formState;

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
							controlId="floatingLogin"
							label="Логін"
							className="mb-3"
						>
							<Form.Control className="form-float-input"
								name="login" type="text"
								placeholder="Login" maxLength={16}
								value={login}
								onChange={(e) => {
									handleOnChange(e);
								}}
							/>
						</FloatingLabel>

						<FloatingLabel
							controlId="floatingEmail"
							label="Електронна пошта"
							className="mb-3"
						>
							<Form.Control className="form-float-input"
								name="email" type="email"
								placeholder="name@example.com"
								value={email}
								onChange={(e) => {
									handleOnChange(e);
								}}
							/>
						</FloatingLabel>

						<FloatingLabel
							controlId="floatingPassword"
							label="Пароль"
						>
							<Form.Control className="form-float-input"
								name="password" type="password"
								placeholder="Password" maxLength={22}
								value={password}
								onChange={(e) => {
									handleOnChange(e);
								}}
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