import styled from 'styled-components';

export const Container = styled.section`
    background-color: ${props => props.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    h3 {
        font-family: 'Prata';
        font-size: 2rem;
        line-height: 2.6875rem;
        margin-bottom: 0.60rem;
    }

    i {
        background-color: ${props => props.primary};
        display: inline-block;
        width: 2.2rem;
        height: 0.25rem;
        border-radius: 0.8rem;
        margin-bottom: 2.375rem; 
    }

    ul {
        width: 90vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem;
        width: 100%;
        
        ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;