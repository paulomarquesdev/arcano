import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 0;

    form {
        max-width: 80%;
        background-color: var(--gray-main);
        border-radius: 1.25rem;
        padding: 2.25rem 6rem;
        box-shadow: var(--boxShadowForm);
    }

    h2 {
        color: var(--black-main);
        font-family: "Prata", serif;
        font-size: 2rem;
        font-weight: 400;
        text-align: center;
        margin-bottom: 2.5rem;
    }

    @media screen and (max-width: 768px) {
        margin: 2.5rem 0;
        form {
            max-width: 85%;
            padding: 2rem;
        }
    }
`;