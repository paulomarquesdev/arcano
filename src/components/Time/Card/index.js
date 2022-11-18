import { Item } from "./style";


export default function Card({ colaborador, primaryColor, secondaryColor }) {
    return (
        <Item primary={primaryColor} secondary={secondaryColor} >
            <i></i>
            <img src={colaborador.imagem ? colaborador.imagem : "https://cdn-icons-png.flaticon.com/512/847/847969.png"} alt="Foto de perfil" />
            <div>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </Item>
    );
};