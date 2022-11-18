import styled from 'styled-components';

export const Item = styled.li`
    width: 16.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white-main);
    border-radius: 0.625rem;
    box-shadow: var(--boxShadowCard);
    
    i {
        width: 100%;
        height: 6rem;
        border-radius: 0.625rem 0.625rem 0 0;
        background: ${props => props.primary};
        padding-top: 2.5rem;
    }

    img {
        background-color: ${props => props.secondary};
        margin-top: -35%;
        width: 7.5rem;
        height: 7.5rem;
        border-radius: 50%;
        border: 1px solid ${props => props.primary};
    }

    div {
        padding: 0 1.9rem;
        
        h4 {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--blue-main);
            margin: 1rem auto 0.2rem;
            line-height: 1.375rem;
            text-align: center;
        }
    
        h5 {
            color: var(--black-main);
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.25rem;
            text-align: center;
            padding-bottom: 2rem;
        }
    }
    @media screen and (max-width: 768px) {
        width: 83%;

        i {
            height: 7rem;
        }
    }
`;