import React, { useState } from "react";
import InputText from "./InputText";
import InputSelect from "./InputSelect";
import { Container } from "./style";
import Button from "./Button";


export default function Form({ aoColaboradorCadastrado, times }) {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    
    const Salvar = (event) => {
        event.preventDefault()
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <Container>
            <form onSubmit={Salvar}>
                <h2>Preencha os dados e deixe sua marca</h2>
                <InputText
                    required={true}
                    id="nome"
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    aoAlterado={value => setNome(value)}
                />
                <InputText
                    required={true}
                    id="cargo"
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={cargo}
                    aoAlterado={value => setCargo(value)}
                />
                <InputText
                    id="imagem"
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    aoAlterado={value => setImagem(value)}
                />
                <InputSelect
                    required={true}
                    id="time"
                    name="Time"
                    options={times}
                    value={time}
                    aoAlterado={value => setTime(value)}
                />
                <Button>Criar card</Button>
            </form>
        </Container>
    );
};