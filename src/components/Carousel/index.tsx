import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
import { ContainerCarousel, Content } from './styles';
import bookImg from '../../img/booksimg.png'
import { CSSProperties } from 'react';



export function CarouselComponent(){
    const indicatorStyles: CSSProperties = {
        background: '#fff',
        width: 12,
        height: 12,
        display: 'inline-block',
        margin: '0 4px',
        borderRadius: 8,
        cursor: 'pointer',
    };
    return(
        <ContainerCarousel>
            <Carousel
                infiniteLoop
                interval={3000}
                width= "100%"
                showArrows={false}
                autoPlay
                emulateTouch
                showThumbs={false}
                showStatus={false}
                statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                        if (isSelected) {
                            return (
                                <li
                                    style={{ ...indicatorStyles, background: '#FF3BA5' }}
                                    aria-label={`Selected: ${label} ${index + 1}`}
                                    title={`Selected: ${label} ${index + 1}`}
                                />
                            );
                        }
                        return (
                            <li
                                style={indicatorStyles}
                                onClick={onClickHandler}
                                onKeyDown={onClickHandler}
                                value={index}
                                key={index}
                                role="button"
                                tabIndex={0}
                                title={`${label} ${index + 1}`}
                                aria-label={`${label} ${index + 1}`}
                            />
                        );
                    }
                }
            >
                <div>
                    <Content>
                        <h2>Seus livros favoritos</h2>
                        <p>estão te esperando aqui!</p>
                    </Content>
                    <img src={bookImg} alt="Categoria livros" />
                </div>
                <div>
                    <Content>
                        <h2>Seus livros favoritos</h2>
                        <p>estão te esperando aqui!</p>
                    </Content>
                    <img src={bookImg} alt="Categoria livros" />
                </div>
                <div>
                    <Content>
                        <h2>Seus livros favoritos</h2>
                        <p>estão te esperando aqui!</p>
                    </Content>
                    <img src={bookImg} alt="Categoria livros" />
                </div>
                <div>
                    <Content>
                        <h2>Seus livros favoritos</h2>
                        <p>estão te esperando aqui!</p>
                    </Content>
                    <img src={bookImg} alt="Categoria livros" />
                </div>
            </Carousel>
        </ContainerCarousel>
        
    )
}

