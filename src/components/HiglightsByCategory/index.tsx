import { useEffect, useLayoutEffect, useState } from "react"
import { api } from "../../services/api"
import { CategoryCarousel, HighlightsByCategoryStyle } from "./style"
import Carousel from "react-elastic-carousel"
import starImgFill from "../../assets/star-fill.svg"
import starImg from "../../assets/star.svg"

interface Category{
    id: string,
    name: string,
    bankslip_discount: number,
    created_at: string,
    updated_at: string,
    product: [
        {
        id: string,
        name: string,
        stars: 5,
        price: string,
        promotional_price: string,
        category_id: string,
        created_at: string,
        updated_at: string,
        images: [
            {
            id: string,
            path: string,
            product_id: string,
            created_at: string,
            updated_at: string
            }
        ]
        }
    ]
}

function useWindowSize() {
    const [size, setSize] = useState(0);
    let itemsToShow = 4
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    if(size > 1100){
        itemsToShow = 4
    }else if(size > 750){
        itemsToShow = 3
    }else if(size > 550){
        itemsToShow = 2
    }else{
        itemsToShow = 1
    }
    return itemsToShow;
    
}

export function HighlightsByCategory(){
    const items = useWindowSize()
    const [categories, setCategories] = useState<Category[]>([])
    useEffect(() => {
        api.get('categories')
        .then(response => setCategories(response.data))
    }, [])
    return(
        <HighlightsByCategoryStyle>
            {categories.map(category => {
                if(category.product.length >= 4){
                    return(
                        <CategoryCarousel key={category.id}>
                            <h2>Destaques em {category.name}</h2>
                            <Carousel
                                itemsToShow={items} 
                                isRTL={false} 
                                pagination={false}
                            >
                                {category.product.map(prod => {
                                    let stars = []
                                    let image = ''
                                    let bankslipPrice = 0
                                    for ( let i = 0; i < prod.stars; i++){
                                        stars.push('1')
                                    }
                                    if(stars.length < 5){
                                        for(let i = stars.length; i < 5; i++){
                                            stars.push('0')
                                        }
                                    }
                                    try{
                                        image = (prod.images[0].path)
                                    } catch(e) {
                                        image = 'https://picsum.photos/200'
                                    }
                                    bankslipPrice = Number(prod.promotional_price) - (Number(prod.promotional_price) * (category.bankslip_discount/100))
                                    return(
                                        <div key={prod.id} className="card">
                                            <figure >
                                                <img src={image} alt={prod.name} />
                                                <figcaption>{prod.name}</figcaption>
                                            </figure>
                                            <div className="stars">
                                                {stars.map(star => {
                                                    if(star === "1"){
                                                    return(
                                                            <span key={prod.id + Math.random()}><img src={starImgFill}/></span>
                                                        ) 
                                                    }else {
                                                        return(
                                                            <span key={prod.id + Math.random()}><img src={starImg}/></span>
                                                        )
                                                    }
                                                    
                                                })}
                                            </div>
                                            <span className="price">
                                                {new Intl.NumberFormat('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(Number(prod.price))}
                                            </span>
                                            <h2 className="price">
                                                {new Intl.NumberFormat('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(Number(prod.promotional_price))}
                                            </h2>
                                            
                                            <p>
                                                Ou {new Intl.NumberFormat('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(bankslipPrice)} com {category.bankslip_discount}% off no boleto
                                            </p>
                                            <button className="button">
                                                Comprar
                                            </button>
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </CategoryCarousel>
                    )
                }
                
            })}
        </HighlightsByCategoryStyle>
        
    )
    
}