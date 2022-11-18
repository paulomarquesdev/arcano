import { Container } from "./style";
import Card from "./Card";

export default function Time({ primaryColor, secondaryColor, name, colaboradores }) {
    
    if (colaboradores.length > 0) {

        return (
            <Container primary={primaryColor} secondary={secondaryColor}>
                <h3>{name}</h3>
                <i></i>
                <ul>
                    {colaboradores.map((colaborador) => {
                        return (
                            <Card
                                key={colaborador.name}
                                colaborador={colaborador}
                                primaryColor={primaryColor}
                                secondaryColor={secondaryColor}
                            />
                        )
                    })}
                </ul>
            </Container>
        );
    } else {
        return ''
    }
};