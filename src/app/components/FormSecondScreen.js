import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AlertValid from './AlertValid';


import bird from './../img/stickebird-2.png';
import Buttons from './Buttons';

export default function FormSecondScreen({ formState, setFormState, formScreen, setFormScreen, alertInvalid, setAlertInvalid }) {

	const { firstName, lastName, birthDate, sex } = formState;

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
							<option value="" style={{ display: "none" }}>Стать</option>
							<option value="Чоловік">Чоловік</option>
							<option value="Жінка">Жінка</option>
							<option value="Інше/Бажаю не вказувати">Інше/Бажаю не вказувати</option>
						</Form.Select>
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