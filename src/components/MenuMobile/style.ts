import styled from "styled-components";

export const MenuMobileStyle = styled.div`
    @media (min-width:1050px){
        display: none;
    }
    .show{
        top: 0;
        @media(max-width:500px){
            img.menu:first-child{
                display: block;
            }
        }
        
    }
    .hide{
        position: absolute;
        top: calc(-100% + 4rem);

        img.menu{
            position: absolute;
            bottom: 2px;
            right: 2rem;
            :first-child{
                position: absolute;
                margin: 0;
                bottom: 12px;
                left: 2rem;
                top: auto;
            }
            
        }
        @media (max-width:500px){
            img.menu{
                bottom: -2px;
                :first-child{
                    display: block;
                }
            }
        }
        
        
    }
`

export const Content = styled.div`
    position: fixed;
    text-align: left;
    z-index: 100;
    right: 0;
    height: 100vh;
    width: 300px;
    background: var(--black);
    color: var(--text-white);
    padding: 1rem 2rem;
    @media (max-width:500px){
        width: 100%;
    }

    ul.hideCat{
        display: none;
    }
    ul.showCat{
        display: block;
    }
    a, p{
        :hover{
            color: var(--pink);
        }
    }
    a{
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        margin: 3rem 0; 

        font-size: 1rem;
        color: var(--text-white);
        text-decoration: none;

        transition: color 0.2s;
        
    }
    img.menu{
        display: block;
        margin: 0 2rem 1rem auto;
        cursor: pointer;
        :first-child{
            display: none;
            position: absolute;
            margin: 0;
            top: 12px;
            left: 2rem;
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
    display: block;
    width: 100%;
    gap: 0.5rem;
    font-size: 1rem;
    color: var(--text-white);
    cursor: pointer;
    z-index: 2;

    p{
        display: inline;
        margin-right: 0.5rem;
    }
    img{
        display: inline;
        height: 0.5rem;
        margin-top: 2rem;
    }

    ul{
        display: block;
        list-style: none;
        border-radius: 0.25rem;
        width: 10.5rem;

        li{
            line-height: 1rem;
            padding: 1rem 3rem;
            font-weight: 300;
            text-align: left;

            a{ 
                color: var(--text-white);
                text-decoration: none;
                margin: 0;
                :hover{
                    border: 0;
                } 
            }
            
        }
    }
`