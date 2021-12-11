import { CategoriesStyle, CategoriesStyleMobile } from "./style";
import booksCategorie from "../../img/books.png"
import deskCategorie from "../../img/desk.png"
import clothingCategorie from "../../img/clothing.png"
import { Carousel } from "react-responsive-carousel";
import { CSSProperties } from 'react';

export function Categories(){
    return(
        <>
        <CategoriesStyle>
            <figure>
                <img src={booksCategorie} alt="Categoria Livros" />
                <figcaption>Livros</figcaption>
            </figure>
            <figure>
                <img src={deskCategorie} alt="Categoria Livros" />
                <figcaption>Escritório</figcaption>
            </figure>
            <figure>
                <img src={clothingCategorie} alt="Categoria Livros" />
                <figcaption>Vestuário</figcaption>
            </figure>
            
            
        </CategoriesStyle>
        <CategoriesStyleMobile>
        <Carousel
            infiniteLoop
            className="carousel"
            interval={3000}
            width= "100%"
            showArrows={false}
            showIndicators={false}
            autoPlay
            emulateTouch
            showThumbs={false}
            showStatus={false}
            statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
            
        >
            <figure>
            <img src={booksCategorie} alt="Categoria Livros" />
            <figcaption>Livros</figcaption>
            </figure>
            <figure>
                <img src={deskCategorie} alt="Categoria Livros" />
                <figcaption>Escritório</figcaption>
            </figure>
            <figure>
                <img src={clothingCategorie} alt="Categoria Livros" />
                <figcaption>Vestuário</figcaption>
            </figure>
        </Carousel>
    </CategoriesStyleMobile>
    </>
        
    )
}