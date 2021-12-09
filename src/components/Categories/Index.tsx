import { CategoriesStyle } from "./style";
import booksCategorie from "../../img/books.png"
import deskCategorie from "../../img/desk.png"
import clothingCategorie from "../../img/clothing.png"

export function Categories(){
    return(
        <CategoriesStyle className="mobile">
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
    )
}