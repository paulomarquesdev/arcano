import styled from 'styled-components';

export const Container = styled.div`
    margin: 1.5rem 0;

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 1.125rem;
        font-weight: 600;
    }

    select {
        background-color: var(--white-main);
        box-shadow: var(--boxShadowFields);
        width: 100%;
        border: none;
        font-size: 1rem;
        padding: 1.5rem;
        box-sizing: border-box;

    }

    @media screen and (max-width: 768px) {
        select {
            border-radius: 0.5rem;
            margin-bottom: -1rem;
        }
    }
`;