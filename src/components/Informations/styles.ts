import styled from 'styled-components'

export const InformationsStyle = styled.section`
    background: var(--black);
    padding: 2rem;

    h2{
        display: inline-block;
        color: var(--pink);
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--text-white);
        
    }
    @media(max-width: 800px){
        text-align: left;
        h2{
            margin: auto 2rem;
        }
    }
`

export const InformationsDivStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.125rem;
    gap: 6.25rem;
    @media(max-width: 800px){
        div{
            margin: 2rem auto;
            width: 80%;
        }
        text-align: left;
        gap: 0;
    }
    
    ul{
        list-style: none;
        a{
            text-decoration: none;
            color: var(--text-white);
            font-size: 1rem;
            line-height: 2rem;
            font-weight: 400;
        }
    }
    span{
        display: block;
        color: var(--text-white);
        font-weight: 300;
        font-size: 1rem;
        line-height: 2rem;

        img{
            margin-right: 0.5rem;
        }
    }
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
`
