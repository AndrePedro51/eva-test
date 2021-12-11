import styled from "styled-components";

export const HighlightsByCategoryStyle = styled.section`
    width: 100%;
    h2:first-child{
        margin: 2rem 2rem 2.625rem 2rem;
        width: 4rem;
        height: 4rem;
        font-size: 1.5rem;
        border-top: 4px solid var(--pink);
        white-space: nowrap;
    }
    button.button{
        opacity: 0;
        background: var(--pink);
        color: var(--text-white);
        font-size: 1rem;
        border: 0;
        width: 100%;
        height: 2.625rem;
        border-radius: 0.5rem;
        margin: 0 auto;
        margin-top: 1rem;
        transition: 0.2s ease-in-out;
        @media (max-width: 1100px){
            opacity: 1;
        }
    }
    
    button.rec-arrow-right, button.rec-arrow-left{
        color: var(--pink);
        background: transparent;
        border: 0;
        box-shadow: 0 0 0 0;
        border-radius: 0;
        :hover{
            background: transparent;
            color: var(--pink);
            box-shadow: 0 0 0 0;
        }
        :focus{
            background: transparent;
            color: var(--pink);
            box-shadow: 0 0 0 0;
        }
        
    }
    div.card{
        padding: 1rem 1.25rem;
        border-radius: 0.25rem;
        :hover{
            button.button{
                opacity: 1;
            }
            border: 1px solid var(--pink);
            padding: 15px 1.25rem;
            @media (max-width: 1100px) {
                border: 0;
            }
        }
        
    }
    figure{
        width: 100%;
        display: flex;
        flex-direction: column;
        img{
            width: 200px;
            height: 200px;
            object-fit: contain;
            margin: 0 auto;
        }
        figcaption{
            max-width: 11.43rem;
            min-height: 3rem;
            margin: 1.625rem auto 0.5rem;
            font-size: 0.875rem;
            font-weight: 300;
            text-align: left;
            line-height: 1rem;
            color: black;
        }
    }

    .stars{
        text-align: center;
        margin-bottom: 0.5rem;
    }

    span.price{
        display: block;
        text-align: right;
        margin-right: 3.375rem;
        font-size: 0.75rem;
        color: var(--grey);
        text-decoration: line-through;
    }
    h2.price{
        font-size: 2rem;
        font-weight: 700;
        color: var(--pink);
        padding: 0.25rem 0;
        text-align: center;
    }
    p{
        font-size: 0.625rem;
        color: black;
        font-weight: 400;
        text-align: center;
        margin-top: 0;
    }
    :last-child{
            margin-bottom: 2rem;
    }
`

export const CategoryCarousel = styled.section`
    width: 100%;
`