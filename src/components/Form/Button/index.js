import { Container } from "./style";


export default function Button({ children }) {
    return (
        <Container>
            <button type="submit">{children}</button>
        </Container>
    );
};