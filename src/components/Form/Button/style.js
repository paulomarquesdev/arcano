import styled from 'styled-components';

export const Container = styled.div`
    button {
        background-color: var(--blue-main);
        color: var(--white-main);
        font-size: 1.125rem;
        font-weight: 700;
        border-radius: 0.625rem;
        padding: 1.75rem 1.82rem;
        border: none;
        cursor: pointer;
        margin-top: 2rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
    }
`;