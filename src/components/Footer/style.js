import styled from 'styled-components';

export const Container = styled.footer`
    background-color: var(--blue-main);
    color: var(--white-main);
    padding: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
        display: inline-block;
        margin-right: 2rem;

        &:last-child {
            margin-right: 0;
        }
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;
        padding: 2rem 1rem;
        
        ul {
            display: flex;
            width: 50%;
            gap: 2rem;

            li {
                margin: 0;
            }
        }
    }
`;