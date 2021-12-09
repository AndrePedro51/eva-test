import styled from 'styled-components'

export const CategoriesStyle = styled.section`
    width: 100%;
    height: 16rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    figure {   
        position: relative; 
        display: flex;
        height: 100%;
        flex-flow: column;
        margin: auto;
        cursor: pointer;
        transition: 0.3s;
        :hover{
            transform: scale(1.1)
        }
    }   
    img{
        border-radius: 0.25rem;
        height: 100%;
    }
    figcaption{
        text-align: center;
        font-weight: 700;
        font-size: 2rem;
        position: absolute;
        width: 100%;
        bottom: 1rem;
        color: var(--text-white);
    }
    @media(max-width: 600px){
        display: block;
        figure{
            width: 200px;
            margin-top: 2rem;
        }
        text-align: center;
    }
    
    
`