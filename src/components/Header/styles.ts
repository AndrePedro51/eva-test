import styled from 'styled-components'

export const Container = styled.header`
    background: var(--black);
    font-weight: 300;
    .mobile{
        @media (max-width:1000px){
            a{
                display: none;
            }
        }
    }
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    display: grid;
    align-items: center;
    grid-template-columns: 1.5fr 0.8fr 3.5fr 1fr 1fr;
    gap: 2rem;
    padding: 1rem 2rem;

    a{
        display: flex;
        align-items: baseline;
        gap: 0.5rem;

        font-size: 1rem;
        color: var(--text-white);
        text-decoration: none;

        transition: color 0.2s;

        :hover{
            color: var(--pink);
        }
        
    }

`

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    input{
        width: 100%;
        height: 2rem;
        border: 0;
        border-radius: 0.25rem 0 0 0.25rem;
        padding: 0 0.5rem;
    }

    button {
        height: 2rem;
        width: 2rem;
        border: 0;
        border-radius: 0 0.25rem 0.25rem 0;
        background: var(--text-white);
        padding: 0 0.5rem;
    }
`

export const Categories = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: var(--text-white);
    cursor: pointer;
    height: 120%;
    z-index: 2;

    img{
        height: 0.5rem;
    }

    ul{
        opacity: 0;
        display: block;
        position: absolute;
        top: -50%;
        background: var(--text-white);
        list-style: none;
        color: var(--black);
        border-radius: 0.25rem;
        width: 10.5rem;
        
        transition: opacity 0.5s ;

        li{
            line-height: 1rem;
            padding: 0.5rem 1rem;
            border-bottom: 1px solid #DADFEB;
            font-weight: 300;

            :last-child{
                border: 0;
            }
            a{ 
                color: var(--black);
                :hover{
                    border: 0;
                } 
            }
            
        }
    }
    :hover{
        ul{
            top: 50px;
            opacity: 1;
        }
    }
`