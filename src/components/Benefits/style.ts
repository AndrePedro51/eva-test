import styled from 'styled-components'

export const BenefitsStyle = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    
    div{
        padding: 0 4rem;
        margin: 4rem 0;
        border-right: 1px solid #DADFEB;
        text-align: center;
        color: var(--pink);

        :last-child{
            border: 0;
        }
    }
    @media(max-width: 600px){
        flex-direction: column;
        div{
            padding: 2rem;
            margin: 2rem;
            border: 0;
            border-bottom: 1px solid #DADFEB;
        }
    }
`