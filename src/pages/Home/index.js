import React, { useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Time from "../../components/Time";

export function Home() {
    const times = [
        {
            name: "Programação",
            primaryColor: "#57C278",
            secondaryColor: "#D9F7E9"
        },
        {
            name: "Front-end",
            primaryColor: "#82CFFA",
            secondaryColor: "#E8F8FF"
        },
        {
            name: "Back-end",
            primaryColor: "#82CFC3",
            secondaryColor: "#EBFFF1"
        },
        {
            name: "Data Science",
            primaryColor: "#A6D157",
            secondaryColor: "#F0F8E2"
        },
        {
            name: "Devops",
            primaryColor: "#E06B69",
            secondaryColor: "#FDE7E8"
        },
        {
            name: "Ux e Design",
            primaryColor: "#DB6EBF",
            secondaryColor: "#FAE9F5"
        },
        {
            name: "Mobile",
            primaryColor: "#FFBA05",
            secondaryColor: "#FFF5D9"
        },
        {
            name: "Inovação e Gestão",
            primaryColor: "#FF8A29",
            secondaryColor: "#FFEEDF"
        }
    ]

    const [colaboradores, setColaboradores ] = useState([])

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    }

    return (
        <React.Fragment>
            <Banner />
            <Form
                times={times.map((time => time.name))}
                aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
            />
            
            {times.map((time) => {
                return (
                    <Time
                        key={time.name}
                        name={time.name}
                        primaryColor={time.primaryColor}
                        secondaryColor={time.secondaryColor}
                        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.name)}
                    />
                )
            })}
            <Footer />

        </React.Fragment>
  );
};