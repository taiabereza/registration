import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormFirstScreen from './components/FormFirstScreen';
import FormSecondScreen from './components/FormSecondScreen';
import FormThirdScreen from './components/FormThirdScreen';
import FormFourthScreen from './components/FormFourthScreen';
import FormFifthScreen from './components/FormFifthScreen';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {

  const [formState, setFormState] = useState({
    login: '', email: '', password: '', firstName: '', lastName: '', birthDate: '', sex: '', education: '', workplace: '', position: '', phone: '',  country: '', city: '', address: '', secondLang: '', about: ''
  });

  const [formScreen, setFormScreen] = useState(0);

  const componentsArr = [
    <FormFirstScreen
      formState={formState}
      setFormState={setFormState}
      formScreen={formScreen}
      setFormScreen={setFormScreen}
    />,
    <FormSecondScreen
      formState={formState}
      setFormState={setFormState}
      formScreen={formScreen}
      setFormScreen={setFormScreen}
    />,
    <FormThirdScreen
      formState={formState}
      setFormState={setFormState}
      formScreen={formScreen}
      setFormScreen={setFormScreen}
    />,
    <FormFourthScreen
      formState={formState}
      setFormState={setFormState}
      formScreen={formScreen}
      setFormScreen={setFormScreen}
    />,
    <FormFifthScreen
      formState={formState}
      setFormState={setFormState}
      formScreen={formScreen}
      setFormScreen={setFormScreen}
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
        <form name="main-form" className="form-container" onSubmit={(e) => {
          e.preventDefault();
          console.dir(formState);
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
