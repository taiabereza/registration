import Alert from 'react-bootstrap/Alert';

export default function AlertValid({ alertInvalid }) {
    return (
        <>
            <Alert className="mt-3"
                key="danger"
                variant="danger"
                style={(alertInvalid) ? {display: "block"} : {display:"none"}}
            >
                Перевірте поля! Всі поля мають бути заповнені!
            </Alert>
        </>
    );
}
