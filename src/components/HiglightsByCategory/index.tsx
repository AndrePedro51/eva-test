import { useEffect, useState } from "react"
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

export function HighlightsByCategory(){
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
                        <CategoryCarousel>
                            <h2>Destaques em {category.name}</h2>
                            <Carousel
                                itemsToShow={4} 
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