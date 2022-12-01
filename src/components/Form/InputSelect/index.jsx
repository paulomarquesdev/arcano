import { Container } from "./style";

export default function InputSelect({ options, name, value, aoAlterado, required }) {  

    return (
        <Container>
            <label htmlFor={name}>{name}</label>
            <select
                value={value}
                onChange={event => aoAlterado(event.target.value)}
                required={required}
                id={name}
                name={name}

            >
                
                <option defaultChecked disabled>Escolha seu time...</option>
                {options.map((item) => {
                    return (
                        <option key={item} value={item} >{item}</option>
                    )
                })}
            </select>
        </Container>
    );
};