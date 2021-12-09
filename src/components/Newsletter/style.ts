import styled from 'styled-components'

export const Content = styled.section`
    padding: 3rem;
    background: var(--grey);
    text-align: center;
    img{
        height: 3.375rem;
        margin: 0 auto;
    }
    h3{
        padding: 1rem 0 3rem 0;
        color: var(--text-white);
        font-weight: 400;
        font-size: 1.5rem;
    }
    form{

    }
    input{
        height: 2rem;
        width: 17.375rem;
        margin: 0 0.5625rem;
        border-radius: 0.25rem;
        border: 0;
        padding: 0.625rem 0 0.375rem 0.3125rem;
        font-size: 0.875rem;
    }
    button{
        display: block;
        margin: 0 auto;
        margin-top: 3.25rem;
        padding: 0.75rem 2rem;
        background: var(--pink);
        color: var(--text-white);
        border: 0;
        border-radius: 0.5rem;
        font-size: 1rem;
    }
`