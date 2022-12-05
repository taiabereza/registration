import './App.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormFirstScreen from './components/FormFirstScreen';
import FormSecondScreen from './components/FormSecondScreen';
import FormThirdScreen from './components/FormThirdScreen';
import FormFourthScreen from './components/FormFourthScreen';
import FormFifthScreen from './components/FormFifthScreen';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

function App() {

  const [alertInvalid, setAlertInvalid] = useState(false);
  const [isThemeLight, setIsThemeLight] = useState(true);

  const handleThemeSwitch = () => {
    setIsThemeLight(() => !isThemeLight);
  }

  useEffect(() => {
    if (isThemeLight) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light')
      document.body.classList.add('dark');
    }
  }, [isThemeLight])

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const inputSet = document.querySelectorAll('.form-float-input');
    const invalidInputs = [...inputSet].filter(input => input.value === '');
    if (invalidInputs.length !== 0) {
      inputSet.forEach(input => (input.value === '') ? input.classList.add('alert-border') : null);
      setAlertInvalid(true);
    } else {
      console.dir(formState);
    }
  }

  const [formState, setFormState] = useState({
    login: '', email: '', password: '', firstName: '', lastName: '', birthDate: '', sex: '', education: '', workplace: '', position: '', phone: '', country: '', city: '', address: '', secondLang: '', about: ''
  });

  const [formScreen, setFormScreen] = useState(0);

  const componentsArr = [
    <FormFirstScreen
      formState={formState}
      setFormState={setFormState}
      formScreen={formScreen}
      setFormScreen={setFormScreen}
      alertInvalid={alertInvalid}
      setAlertInvalid={setAlertInvalid}
    />,
    <FormSecondScreen
      formState={formState}
      setFormState={setFormState}
      formScreen={formScreen}
      setFormScreen={setFormScreen}
      alertInvalid={alertInvalid}
      setAlertInvalid={setAlertInvalid}
    />,
    <FormThirdScreen
      formState={formState}
      setFormState={setFormState}
      formScreen={formScreen}
      setFormScreen={setFormScreen}
      alertInvalid={alertInvalid}
      setAlertInvalid={setAlertInvalid}
    />,
    <FormFourthScreen
      formState={formState}
      setFormState={setFormState}
      formScreen={formScreen}
      setFormScreen={setFormScreen}
      alertInvalid={alertInvalid}
      setAlertInvalid={setAlertInvalid}
    />,
    <FormFifthScreen
      formState={formState}
      setFormState={setFormState}
      formScreen={formScreen}
      setFormScreen={setFormScreen}
      alertInvalid={alertInvalid}
      setAlertInvalid={setAlertInvalid}
    />
  ]

  return (
    <div className="app">
      <Container fluid="lg" className="main-container">
        <Row>
          <Col>
            <header>
              <h1>Привіт, госте!</h1>
              <h2>Як добре, що ти вирішив(ла) стати частиною нашої команди! <br />
                Сподіваюся, ми пізнаємо тебе якнайкраще!</h2>
            </header>
          </Col>
        </Row>
          <Form.Check
            type="switch"
            id="themeSwitch"
            label={(isThemeLight) ? 'Світла тема' : 'Темна тема'}
            onChange={() => {handleThemeSwitch()}}
          />
        <form name="main-form" className="form-container" onSubmit={(e) => {
          handleOnSubmit(e)
        }}>
          {componentsArr[formScreen]}
          {(formScreen === 4)
            ? <Button type="submit" className="button-submit" variant="light p-3 mt-3">
              Зареєструватися
            </Button>
            : null}
        </form>
      </Container>
    </div>
  );
}

export default App;
