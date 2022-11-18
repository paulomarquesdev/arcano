import { Container } from './styles'

export default function InputText({ id, label, value, aoAlterado, required, placeholder }) {
    
    function aoDigitado(event) {
        aoAlterado(event.target.value)
    }
    
    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <input
                value={value}
                onChange={aoDigitado}
                required={required}
                id={id}
                type="text"
                placeholder={placeholder}
            />
        </Container>
    );
};