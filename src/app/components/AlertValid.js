import Alert from 'react-bootstrap/Alert';

export default function AlertValid({ alert }) {
    return (
        <>
            <Alert className="mt-3"
                key="danger"
                variant="danger"
                style={(alert) ? {display: "block"} : {display:"none"}}
            >
                Перевірте поля! Всі поля мають бути заповнені!
            </Alert>
        </>
    );
}
