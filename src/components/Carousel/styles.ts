import styled from 'styled-components'

export const ContainerCarousel = styled.section`

    div{
        width: 100%;
        height: 400px;
        p, h2{
            color: var(--text-white);
            font-weight: 400;
            text-align: left;
        }
        h2{
            font-size: 2.625rem;
        }
        p{
            font-size: 1.5rem;
        }
        
    }

    img{
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        top: 0;
        left: 0;
        z-index: -1;
    }
    
    
`
export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 7.87rem 2rem;
`